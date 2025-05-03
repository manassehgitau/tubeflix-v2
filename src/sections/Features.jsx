import React from "react";
import { Element } from "react-scroll";
import { FeatureList } from "../constants";
import FeatureItem from "../components/FeaturesItem";

const Features = () => {
  const halfLength = Math.floor(FeatureList.length / 2);
  return (
    <section className="py-12 px-6 relative ">
      <Element name="Features">
        {/* TODO: Add Fancy colors and animations to this section (using framer motion, e.t.c)*/}
        <div className="mx-auto max-w-screen-xl">
          <div className="flex-col-center text-center space-y-2">
            <h2 className="text-3xl lg:text-5xl font-bebas text-p1 tracking-wide">
              Features
            </h2>
            <p className="small lg:base font-barlow italic pb-3">
              What Makes Us So Watch-Worthy?
            </p>
          </div>

          <div className="flex-center">
            <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-13 items-stretch">
              <div>
                {FeatureList.slice(0, halfLength).map((feature) => (
                  <FeatureItem
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    content={feature.content}
                  />
                ))}
              </div>

              <div>
                {FeatureList.slice(halfLength).map((feature) => (
                  <FeatureItem
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    content={feature.content}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-linear-to-tl from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
