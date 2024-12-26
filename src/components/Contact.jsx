import React from "react";
import { Facebook, Instagram, Telegram } from "../assets";

export default function Contact() {
  return (
    <section className="mt-52 text-white" id="contact">
      <p className="text-4xl text-center font-extrabold p-5">Contact</p>
      <hr />

      <div className="bg-[#6c8ce2] px-20 py-32 bg-opacity-50 rounded-lg hover:scale-[103%] ">
        <h2 className="py-10 font-bold">Send Us A Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-bold">Message</label>
            <textarea
              className="w-full px-4 py-2 mt-2 text-black rounded-lg"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-4"></div>
          <div className="text-center">
            <button className="bg-[#FF4081] text-white px-6 py-3 mt-4 rounded-lg hover:bg-[#D62F6A]">
              Send Message
            </button>
            <div className="flex justify-end space-x-4 mt-4">
              <a
                href="https://www.instagram.com/mr_ziyodbe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://t.me/ziyodbek_dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Telegram}
                  alt="Telegram"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-8 h-8 rounded-full"
                />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
