import * as React from "react";
import { Switch } from "@headlessui/react";

const ToggleTheme = ({ theme, isChecked, onChange }) => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Switch
        checked={isChecked}
        onChange={onChange}
        onClick={toggleTheme}
        className={`${
          theme === "dark" ? "bg-white" : "bg-[#858484]"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${isChecked ? "translate-x-6" : "translate-x-1"} ${
            theme === "dark" ? "bg-[#858484]" : "bg-white"
          } inline-block h-4 w-4 transform rounded-full  transition`}
        />
      </Switch>
    </>
  );
};

export default ToggleTheme;
