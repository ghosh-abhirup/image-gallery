import { Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
// import { pattaya } from "@/app/font";
import { Fragment, useEffect, useState } from "react";
import ToggleTheme from "./ui/ToggleTheme";
import { Popover, Transition } from "@headlessui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";

const Navbar = (props) => {
  // const [searchInp, setSearchInp] = useState("");
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isChecked ? setTheme("dark") : setTheme("light");
  }, [isChecked]);

  return (
    <div className="navbar">
      <p className={` text-2xl sm:text-3xl dark:text-white`}>Gallery</p>
      {/* <div className="w-fit flex-1 hidden sm:block">
        <Input
          value={searchInp}
          onChange={(event) => setSearchInp(event.target.value)}
          placeholder="Search Images here"
          startDecorator={<SearchIcon />}
          sx={{
            outline: "0px",
            marginLeft: "64px",
            marginRight: "27px",
            padding: "14px 12px ",
            borderRadius: 6,
            border: "1px solid #ECECEC",
            backgroundColor: "#FAFAFA",
            boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.05) inset",
          }}
        />
      </div> */}

      <div className="flex gap-4">
        <div className="navlinks">
          <p className="navlink">Explore</p>
          <p className="navlink">Collection</p>
          <p className="navlink">Communities</p>
        </div>

        <div className="darkToggle">
          <p className="text-xs font-semibold dark:text-white">{`${
            theme === "light" ? "Dark" : "Light"
          } mode`}</p>
          <ToggleTheme
            theme={theme}
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
        </div>
      </div>

      <div className="block sm:hidden">
        <Popover className={`relative`}>
          <Popover.Button>
            <MenuIcon className="dark:text-white" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-1"
            leaveTo="opacity-0 translate-y-0"
          >
            <Popover.Panel
              className={`absolute right-1/2 bg-white dark:bg-[#232323] rounded-md shadow-2xl`}
            >
              <p className="text-sm py-2.5 px-4 font-semibold cursor-pointer dark:text-white">
                Explore
              </p>
              <Divider />
              <p className="text-sm py-2.5 px-4 font-semibold cursor-pointer dark:text-white">
                Collection
              </p>
              <Divider />
              <p className="text-sm py-2.5 px-4 font-semibold cursor-pointer dark:text-white">
                Communities
              </p>
              <Divider />
              <div className="flex gap-4 py-2.5 px-4 items-center">
                <p className="text-xs font-semibold dark:text-white">{`${
                  theme === "light" ? "Dark" : "Light"
                }`}</p>
                <ToggleTheme
                  theme={theme}
                  isChecked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                />
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
