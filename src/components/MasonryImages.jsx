import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ui/ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImages = ({ searchQuery }) => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchRandomImages = async () => {
    console.log("Calling images data");

    try {
      let apiCall = "";

      if (searchQuery !== "") {
        apiCall = `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`;
      } else {
        apiCall = `https://api.unsplash.com/photos/random?count=10&client_id=${
          import.meta.env.VITE_ACCESS_KEY
        }`;
      }

      const res = await axios(apiCall);

      console.log(res?.data);

      if (searchQuery !== "") {
        setImages(res?.data?.results);
      } else {
        setImages(res?.data);
      }

      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchRandomImages();
  }, [searchQuery]);

  if (isLoading && !isError) {
    return (
      <div className="px-7 sm:px-[10rem] py-10 w-full h-full bg-white dark:bg-[#232323] flex flex-col items-center">
        <p className="text-lg sm:text-2xl font-bold text-[#A7A7A7] dark:text-white text-center">
          Loading some awesome Images...
        </p>
      </div>
    );
  }

  if (isLoading && isError) {
    <div className="px-7 sm:px-[10rem] py-10 w-full h-full bg-white dark:bg-[#232323] flex flex-col items-center">
      <p className="text-lg sm:text-2xl font-bold text-[#A7A7A7] dark:text-white text-center">
        {`Unsplash API has exceeded request (50 requests) this hour. Please visit again at the next hour.`}
      </p>
    </div>;
  }

  return (
    <div className="px-7 sm:px-[10rem] py-10 w-full h-full bg-white dark:bg-[#232323]">
      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 350: 2, 900: 3 }}> */}
      <div className="hidden sm:block">
        <Masonry gutter="36px" columnsCount={3}>
          {images &&
            images?.map((imageData, index) => (
              <ImageCard data={imageData} key={imageData.id} />
            ))}
        </Masonry>
      </div>
      <div className="block sm:hidden">
        <Masonry gutter="10px" columnsCount={2}>
          {images &&
            images?.map((imageData, index) => (
              <ImageCard data={imageData} key={imageData.id} />
            ))}
        </Masonry>
      </div>
      {/* </ResponsiveMasonry> */}
    </div>
  );
};

export default MasonryImages;
