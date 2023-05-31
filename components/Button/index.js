import React from "react";
import { useTheme } from "next-themes";
import data from "../../data/portfolio.json";

const Button = ({ children, type, onClick, classes }) => {
  const { theme } = useTheme();
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base rounded-full my-10 py-4 px-6 m-2 font-bold ${
          theme === "dark" ? "bg-white text-black" : "bg-accent text-white"
        }  transition-all duration-300 ease-out hover:scale-105 active:scale-100 link ${
          data.showCursor && "cursor-none"
        }  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`custom-button text-sm tablet:text-base py-2 px-4 m-2 rounded-full flex items-center transition-all ease-out duration-300 ${
        theme === "dark"
          ? "hover:text-accent text-white"
          : "hover:bg-slate-100 text-black"
      } hover:scale-105 active:scale-100  tablet:first:ml-0  ${
        data.showCursor && "cursor-none"
      } ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
