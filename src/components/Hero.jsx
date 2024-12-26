import React from "react";
import { ProfilePhoto } from "../assets";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-around w-full pt-20 pb-20">
      <div className="text-white px-10 max-w-[600px] gap-5 bg-[#6c8ce2] py-14 rounded-lg bg-opacity-50 hover:backdrop-blur-lg">
        <h2 className="font-bold text-2xl">Ziyodulla Komilov</h2>
        <h1 className="text-3xl font-bold py-5">I'm a Full Stack Developer</h1>
        <p className="py-2">
          I was born in 2000. I have a passion for playing and watching
          football. I am always eager to learn new technologies and improve my
          skills.
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          molestias quidem numquam amet rerum. Accusantium sit iste vitae
          inventore, dolore rem temporibus quaerat sunt debitis magni nobis
          consequuntur vel aspernatur.
        </p>
      </div>
      <div className="mt-10 md:mt-0">
        <img
          className="h-72 w-72 object-cover rounded-full"
          src={ProfilePhoto}
          alt="profile"
        />
      </div>
    </div>
  );
}
