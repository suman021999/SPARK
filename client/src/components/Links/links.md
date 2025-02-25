import { useState } from "react";

const ProfileCard = () => {
  const [bgColor, setBgColor] = useState("#3B2E25");
  const presetColors = ["#3B2E25", "#FFFFFF", "#000000"];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 rounded-xl shadow-lg w-96 bg-white">
        <div className="rounded-xl p-6" style={{ backgroundColor: bgColor }}>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Avatar"
              className="w-20 h-20 rounded-full mb-2"
            />
            <h2 className="text-white font-bold text-lg">@opopo_08</h2>
            <p className="text-white opacity-70">/opopo_08</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Custom Background Color</p>
          <div className="flex gap-2 mt-2">
            {presetColors.map((color) => (
              <button
                key={color}
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: color }}
                onClick={() => setBgColor(color)}
              ></button>
            ))}
          </div>
          <input
            type="text"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          />
          <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;