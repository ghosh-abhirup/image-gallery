import React, { Suspense, useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import DetailsPopup from "./DetailsPopup";

const LazyImage = React.lazy(() => import("./LazyImage"));

const ImageCard = ({ data }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer relative"
        onClick={() => setIsDialogOpen(true)}
      >
        <img
          src={data.urls.raw}
          alt="img"
          className="rounded-t-[4px] sm:rounded-t-[8px]"
          // loading="lazy"
        />
        {/* <Suspense fallback={<div>Loading...</div>}>
          <LazyImage
            src={data.urls.raw}
            alt="img"
            className="rounded-t-[4px] sm:rounded-t-[8px]"
          />
        </Suspense> */}

        <div className="w-full userCard">
          <div className="flex items-center">
            <div
              className={`rounded-full w-5 sm:w-10 h-5 sm:h-10 overflow-hidden mr-[5px]`}
            >
              <img
                src={data.user.profile_image.small}
                className="bg-cover bg-center w-full h-full"
                alt="user"
                // loading="lazy"
              />
              {/* <Suspense fallback={<div>Loading...</div>}>
                <LazyImage
                  src={data.user.profile_image.small}
                  className="bg-cover bg-center w-full h-full"
                  alt="user"
                />
              </Suspense> */}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-black dark:text-white font-bold text-[6.25px] sm:text-[12px] truncate w-[100%]">
                {data.user.name}
              </p>
              <p className="text-[#A7A7A7] font-semibold italic text-[5px] sm:text-[10px] truncate">
                @{data.user.username}
              </p>
            </div>
          </div>

          <div className="likesContent flex gap-[4px] items-center">
            <ThumbUpOutlinedIcon className="dark:text-white w-[8px] sm:w-[14px] h-[8px] sm:h-[14px] cursor-pointer" />
            <p className="font-bold text-[5px] sm:text-[10px] text-[#4F4F4F] dark:text-[#E5E5E5]">
              {data.likes}
            </p>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <DetailsPopup
          id={data.id}
          isDialogOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </>
  );
};

export default ImageCard;
