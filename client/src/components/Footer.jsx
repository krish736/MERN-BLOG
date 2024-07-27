import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full sm:flex md:grid-cols-1 justify-between">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                krish's
              </span>{" "}
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 ">
            <div className="mt-8">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/krish736/MERN-BLOG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git Repo
                </Footer.Link>
                <Footer.Link href="/about" rel="noopener noreferrer">
                  Krish's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="mt-8">
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/krishnakant-dave-4b86a4236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://discord.com/users/765652395198906399"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="mt-8">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Krish's Blog" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}
