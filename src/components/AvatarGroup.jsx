import React from "react";
import PlaceHolder from "../assets/placeholder.svg";

const AvatarGroup = ({ avatars, maxVisible = 3 }) => {
  return (
    <div className="flex items-center">
      {avatars.slice(0, maxVisible).map((avatar, index) => {
        const imageSrc =
          avatar && typeof avatar === "string" && avatar.trim() !== ""
            ? avatar
            : PlaceHolder;

        return (
          <img
            key={index}
            src={imageSrc}
            alt={`Avatar ${index}`}
            className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0"
          />
        );
      })}
      {avatars.length > maxVisible && (
        <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-xs rounded-full border-2 border-white -ml-3">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
