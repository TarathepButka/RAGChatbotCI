import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8 bg-[#29292f] my-16 rounded-4xl border border-gray-600 shadow-lg shadow-indigo-500/50 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

