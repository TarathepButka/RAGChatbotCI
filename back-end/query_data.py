import argparse
from langchain_chroma import Chroma
from langchain.prompts import ChatPromptTemplate
from langchain_ollama import OllamaLLM
from huggingface_hub import InferenceClient

from get_embedded import get_embedding_function

CHROMA_PATH = "chroma"

PROMPT_TEMPLATE = """
โปรดตอบคำถามเป็นภาษาไทย โดยอิงจากข้อมูลในบริบทด้านล่างนี้:

{context}

---

ตอบคำถามโดยอิงจากบริบทข้างต้น: {question}
"""



def main(text):
    # Create CLI.
    parser = argparse.ArgumentParser()
    parser.add_argument("query_text", type=str, help="The query text.")
    args = parser.parse_args()
    query_text = args.text
    query_rag(query_text)
    
def query_rag(query_text: str):
    # Prepare the DB.
    embedding_function = get_embedding_function()
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)

    # Search the DB.
    results = db.similarity_search_with_score(query_text, k=5)

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=query_text)
    # print(prompt)

    client = InferenceClient(
        provider="together",
        api_key="",
    )

    response_text = client.chat.completions.create(
        model="meta-llama/Llama-3.3-70B-Instruct",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        max_tokens=500,
    )
    
    content = response_text.choices[0].message.content

    # Now you can use 'content' as needed
    print("Content = ", content)

    sources = [doc.metadata.get("id", None) for doc, _score in results]
    formatted_response = f"คำตอบ: {response_text}\nSources: {sources}"
    print(formatted_response)
    return  content


if __name__ == "__main__":
    main()