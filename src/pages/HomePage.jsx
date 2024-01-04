import { useState, useEffect } from "react";
import { Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import MasonryImages from "../components/MasonryImages";
import "../index.css";

const HomePage = () => {
  const [searchInp, setSearchInp] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchQuery(searchInp);
      console.log(searchInp);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchInp]);

  return (
    <>
      <div className=" relative w-full h-[372px] sm:h-[384px] bg-[url('../public/images/homepage_bg.png')] bg-cover bg-no-repeat bg-center">
        {/* <Image src={heroBg} className="w-full object-contain" alt="hero" /> */}
        <div className="w-full absolute z-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <p className="px-[50px] font-bold text-2xl sm:text-3xl mb-2.5 sm:mb-4 text-white text-center">
            Download High Quality Images by creators
          </p>
          <p className="px-[50px] text-xs sm:text-sm mb-4 text-[#C4C4C4]  text-center">
            Over 2.4 million+ stock Images by our talented community
          </p>
          <div className="w-4/5 hidden sm:block">
            <Input
              value={searchInp}
              onChange={(event) => setSearchInp(event.target.value.trim())}
              placeholder="Search high resolution Images, categories, wallpapers"
              startDecorator={<SearchIcon />}
              sx={{
                outline: "none",
                margin: "0 auto",
                width: "60%",
                padding: "14px 18px ",
                borderRadius: 8,
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="w-4/5 block sm:hidden">
            <Input
              value={searchInp}
              onChange={(event) => setSearchInp(event.target.value)}
              placeholder="Search high resolution Images"
              startDecorator={<SearchIcon />}
              sx={{
                outline: "none",
                width: "100%",
                padding: "14px 13px ",
                borderRadius: 8,
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
      </div>
      {searchQuery && searchQuery !== "" && (
        <p className="font-bold text-lg sm:text-3xl text-black dark:text-white mt-4 sm:mt-6 px-7 sm:px-[10rem]">
          Showing results for "{searchQuery}"
        </p>
      )}
      <MasonryImages searchQuery={searchQuery} />
    </>
  );
};

export default HomePage;
