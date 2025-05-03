import React from "react";
import { Element } from "react-scroll";
const ContactUs = () => {
  return (
    <section className="py-12 px-6 relative">
        {/* TODO: Add Fancy colors and animations to this section (using framer motion, e.t.c)*/}
      <Element name="Contact Us">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex-col-center text-center space-y-2">
            <h2 className="text-3xl lg:text-5xl font-bebas text-p1 tracking-wide">
              Contact Us
            </h2>
            <p className="small lg:base font-barlow italic pb-3">
              Got Questions, Movie Pitches, or Just Wanna Say Hi?
            </p>
            <p className="font-exo small-caption py-2 px-15 max-lg:hidden">
              Whether you're bursting with feature ideas, need help, or just
              watched something amazing and need to talk about it — we’re all
              ears (and eyeballs).
            </p>
          </div>
          <form className="max-w-3xl mx-auto bg-s2 rounded-3xl shadow-2xl p-8 my-10 text-p1 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Jordan Peel"
                  className="w-full p-3 rounded-xl border border-p3 focus:outline-none focus:ring-2 focus:ring-p3"
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. jordan@movies.com"
                  className="w-full p-3 rounded-xl border border-p3 focus:outline-none focus:ring-2 focus:ring-p3"
                />
              </div>
            </div>
            <div>
              <label className="block font-bold mb-1">Your Message</label>
              <textarea
                rows="5"
                placeholder="Tell us your favorite plot twist, feedback, or meme-worthy moment..."
                className="w-full p-3 rounded-xl border border-p3 focus:outline-none focus:ring-2 focus:ring-p3"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-p1 hover:bg-p3 transition text-white font-bold py-3 px-8 cursor-pointer rounded-full shadow-lg"
              >
                🎤 Drop the Mic & Send
              </button>
            </div>
          </form>
          <div className="absolute inset-0 bg-linear-to-t from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
          {/* <div className="absolute inset-0 bg-linear-to-tr from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div> */}
        </div>
      </Element>
    </section>
  );
};

export default ContactUs;
