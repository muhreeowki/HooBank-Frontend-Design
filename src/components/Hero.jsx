import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    {/* Hero Text Div*/}
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16`}
    >
      {/* Discount Banner */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="Discount" className="w-[37px] h-[37]" />
        <p className={`${styles.paragraph} ml-l`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      {/* Top Half of the Hero */}
      <div className="flex flex-row justify-between items-center w-full">
        {/* Heading Text */}
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75]">
          The Next <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>

        {/* Get Started Button */}
        <div className="ss:flex hidde md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      {/* Second Half of the Hero */}
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    {/* End of Hero Heading Div */}

    {/* Right Side of the Hero */}
    <div className={`${styles.flexCenter} flex-1 md:my-0 my-10 relative`}>
      {/* Robot Arm */}
      <img
        src={robot}
        alt="Robot Arm"
        className="w-full h-full relative z-[5] "
      />
      {/* Gradients
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
    </div>

    {/* CTA Button */}
    <div className={`ss:hidden ${styles.flexStart}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
