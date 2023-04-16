import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="Clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* Gradient */}
    <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient "/>
    {/* Heading and Text */}
    <div className="w-full flex md:flex-row flex-col justify-between items-center  sm:mb-16 mb-6 relative z-[1]">
      {/* Heading */}
      <h1 className={`${styles.heading2} `}>
        What people are <br className="sm:block hidden" /> saying about us
      </h1>
      {/* Text */}
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    {/* Testimonial Card */}
    <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] feedback-container">
      {feedback.map((person) => (
        <FeedbackCard key={person.id} {...person} />
      ))}
    </div>
  </section>
);

export default Testimonials;
