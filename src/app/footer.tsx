import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
//import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Sumit Chavda</h2>
          <p className="text-sm text-gray-400">Full Stack Developer | Machine Learning | Data Analyst | Problem Solver</p>
          
          <a
            href="mailto:amitk.developer23@gmail.com"
            className="mt-2 flex items-center justify-center md:justify-start text-purple-400 hover:text-purple-300 transition gap-2"
          >
            <FaEnvelope className="text-lg" />
            <span className="text-sm">sumitchavda3003@gmail.com</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-4 md:mt-0 text-2xl">
          {/* <a
            href="https://leetcode.com/amitk2308"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-500 transition"
            title="LeetCode"
          >
            <SiLeetcode /> */}
          {/* </a> */}
          <a
            href="https://github.com/SUMITCHAVDA3003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sumit-chavda-699326254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@sumitchavda-w3h?si=8HTXNQcmfcrQ-R91"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition"
            title="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Sumit Chavda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
