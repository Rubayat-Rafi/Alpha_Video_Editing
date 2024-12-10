import React from "react";
import logo from "../assets/logo Main.png";
import { Link, NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const Footer = () => {

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_7ah632q", // Your EmailJS Service ID
        "template_wybtn6q", // Your EmailJS Template ID
        form.current, // Reference to the form
        "0Ve5RDNi5S2zT_KVR" // Your Public Key (User ID)
      )
      .then(
        () => {
          // SweetAlert2Show success message
          Swal.fire({
            title: "SUCCESS!",
            text: "Email sent successfully!",
            icon: "success",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: `FAILED... ${error.message}`,
            title: "Oops...",
            text: "Failed to send email. Please try again.",
          });

        }
      );
  };

  return (
    <div className="relative border-t border-TextColor/20 ">
      <div className="py-14 max-w-[1440px] w-11/12 mx-auto">
        {/* <h3 className="text-3xl font-bold mb-8">Alpha</h3> */}
        <a href="/#hero">
          <img src={logo} alt="logo" className=" w-14 md:w-16 mb-8" />
        </a>

        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="text-TextColor">
            <p className="text-lg font-semibold mb-4">Join Our Newsletter</p>
            <p className="max-w-[500px] text-base text-SecondTextColor">
              Sign up to our mailing list below and be the first to know about
              new updates. Don't worry, we hate spam too.
            </p>

            <div className="mt-3">
              <form ref={form} onSubmit={handleSubmit} className="space-x-2">
                <input
                  type="email"
                  name="email" // Matches EmailJS placeholder
                  className="py-2 md:px-4 pl-2 rounded-lg bg-TextColor/20 placeholder:text-TextColor placeholder:text-xs md:placeholder:text-sm border border-TextColor/50 w-[180px] md:w-[270px] outline-none text-xs md:text-base"
                  placeholder="Your Email Address"
                  required // Ensure the field is not empty
                />
                <button
                  type="submit"
                  className="bg-MainColor text-sm md:text-base md:py-2 rounded-lg md:px-4 py-2 px-1 font-medium md:font-medium"
                >
                  Get Notified
                </button>
              </form>
            </div>
          </div>
          <div className="flex gap-8 md:flex-row flex-col mb-10">
            <nav>
              <h3 className="text-base text-TextColor mb-5">Social</h3>
              <div className="flex md:flex-col  md:space-x-0 space-x-4 md:space-y-4 text-sm text-SecondTextColor flex-wrap">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/imam-hasan-666021204/"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@AlphaVideoEdit"
                  className="hover:underline"
                >
                  YouTube
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/alphavideoedit/"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Alphavideoeditcom/61566444836135/?mibextid=ZbWKwL"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </div>
            </nav>
            <nav>
              <h3 className="text-base text-TextColor mb-5">Information</h3>
              <div className="md:space-y-4 text-sm text-SecondTextColor flex space-x-4 md:flex-col md:space-x-0">
                <a href="/#faq" className="hover:underline">
                  FAQ
                </a>
                <a
                  target="_blank"
                  href="https://tidycal.com/alphavideoedit2001/15-minute-meeting"
                  className="hover:underline"
                >
                  Contact Us
                </a>
                <Link to="/about"  className="hover:underline">
                  About Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center -mt-6 mb-4 text-SecondTextColor text-xs md:text-base">
        <p>&copy; 2024 Alpha Video Edit. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
