import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    // Content div
    <div className="flex justify-between flex-col max-w-[370px] px-10 py-12 rounded-[20px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      {/* Person Remarks */}
      <img
        src={quotes}
        alt="double_quotes"
        className=" object-contain w-[24px] h-[27px]"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>

      {/* Person Name and Image */}
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[32px] text-dimWhite ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
