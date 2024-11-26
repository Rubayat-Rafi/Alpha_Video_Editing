import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const Review = () => {
  const testimonials = [
    {
      name: "Marcus Engel",
      role: "Founder @ 301 Studios",
      text: "Diwas and his team are phenomenal. Their unmatched work rate, dedication, and creativity have made them invaluable partners for producing content.",
    },
    {
      name: "Mena Mikhail",
      role: "Founder @ Human Voice Over",
      text: "Awesome work! Never once left the loop for any revisions, and made sure the video was exactly what we were looking for.",
    },
    {
      name: "Lara Acosta",
      role: "Founder @ LA Digital",
      text: "Diwas and his team at Unchained set a new standard for video editing with exceptional quality and efficiency. 10000/10.",
    },
    {
      name: "Inge von AuLock",
      role: "Founder @ Penfriend",
      text: "Working with Diwas was seamless. The quality was incredible, with versatile video and animation. It’s a one-stop shop.",
    },
    {
      name: "Luke Matthews",
      role: "Founder @ AI WRITING made EASY",
      text: "Without hand-holding. I’m thrilled with his short-form work and will use him for YouTube next. Hire him; he’s elite.",
    },
    {
      name: "Niall Ratcliffe",
      role: "Co-founder @ Ratcliffe Brothers",
      text: "Diwas transformed our video content overnight. His work exceeded our expectations and elevated our brand.",
    },
  ];

  return (
    <div id="reviews" className="pt-24 flex flex-col items-center justify-center">
      <div className="mb-10 md:w-4/6 ">
        <Title
          heading={"Review"}
          title={"There’s a reason people are raving"}
          styleTitle={" about us."}
        ></Title>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center ">
        {/* Column 1 - Top to Bottom */}
        <motion.div
          className="space-y-8"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg bg-gray-900"
            >
              <p className="mb-4 text-gray-300">"{testimonial.text}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Column 2 - Bottom to Top */}
        <motion.div
          className="space-y-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.slice(2, 4).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg bg-gray-900"
            >
              <p className="mb-4 text-gray-300">"{testimonial.text}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </motion.div>

        {/* Column 3 - Top to Bottom */}
        <motion.div
          className="space-y-8"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.slice(4, 6).map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg bg-gray-900"
            >
              <p className="mb-4 text-gray-300">"{testimonial.text}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
