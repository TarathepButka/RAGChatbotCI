module.exports = {
  theme: {
    extend: {
      // เพิ่ม configuration อื่นๆ ที่นี่
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "::-webkit-scrollbar": {
          width: "8px",
          backgroundColor: "#222",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "#555",
          borderRadius: "4px",
          minHeight: "30px",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "#222",
        },
        "::-webkit-scrollbar-button:start:decrement": {
          height: "12px",
          backgroundColor: "#222",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M6 0l6 6H0z' fill='%23555'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
        "::-webkit-scrollbar-button:end:increment": {
          height: "12px",
          backgroundColor: "#222",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M6 6l6-6H0z' fill='%23555'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        },
      });
    },
  ],
};
