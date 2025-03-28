"use client";

import React from "react";

interface ServicesProps {
  data: {
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactElement;
    }[];
  };
}
export const Services = (props: Readonly<ServicesProps>) => {
  const { data } = props;
  return (
    <div className="mt-5">
      {data.bullets.map((item, index) => (
        <div className="flex items-start mt-8 space-x-3" key={index}>
          <div className="flex items-center justify-center flex-shrink-0 mt-1 rounded-md w-11 h-11 ">
            {React.cloneElement(item.icon)}
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {item.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
