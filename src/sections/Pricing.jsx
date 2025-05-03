import React from "react";
import { Element } from "react-scroll";
import { pricing } from "../constants";
import PriceItem from "../components/PriceItem";

const Pricing = () => {
  return (
    <section className="py-12 px-6 relative">
              {/* TODO: Fix Button Component */}
      <Element name="Pricing">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex-col-center text-center space-y-2">
            <h2 className="text-3xl lg:text-5xl font-bebas text-p1 tracking-wide">
              Pricing
            </h2>
            <p className="small lg:base font-barlow italic pb-3">
              Popcorn for All – Pick Your Flavor
            </p>
            <p className="font-exo small-caption py-2 px-15 max-lg:hidden">
              We believe great recommendations shouldn't break the bank. Whether
              you're a casual browser or a full-on binge strategist, there's a
              plan for you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-20 px-2 md:px-10">
            {pricing.map((price) => (
              <PriceItem key={price.id} title={price.title} price={price.price} description={price.description} features={price.features} caption={price.caption} />
            ))}
          </div>
          <div className="absolute inset-0 bg-linear-to-bl from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
          <div className="absolute inset-0 bg-linear-to-br from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
