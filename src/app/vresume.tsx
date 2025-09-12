import React from "react";
import ellipse from "../assets/ellipse.png";
import Image from "next/image";

const VResume = () => {
  return (
    <div className="relative md:min-h-screen flex items-center justify-center">
      {/* Colorful Blurred Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={ellipse}
          alt="Logo"
          width={90}
          height={90}
          className="absolute w-24 h-24 top-0 right-0 md:w-96 md:h-96"
        />
        <div className="absolute w-32 h-32 bg-blue-400 opacity-30 blur-3xl bottom-10 left-20 rounded-full"></div>
        <div className="absolute w-40 h-40 bg-purple-400 opacity-30 blur-3xl top-10 right-0 rounded-full"></div>
      </div>

      {/* Main Container with Blurred Transparent Background */}
      <div className="relative z-10 max-w-5xl w-full min-h-[70vh] mx-auto backdrop-blur-6xl border border-white shadow-lg rounded-2xl p-10 flex flex-col items-center justify-center gap-6 overflow-hidden">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
          My <span className="text-purple-500">Video Resume</span>
        </h1>

        {/* Embedded YouTube Video */}
        <div className="w-full max-w-3xl">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/rdqrq79y2Mo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Button to View on YouTube */}
        <a
          href="https://youtu.be/rdqrq79y2Mo"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default VResume;
