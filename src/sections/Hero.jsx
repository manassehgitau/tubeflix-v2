import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Button from "../components/Button";
import "swiper/css";
import { IoMdContacts } from "react-icons/io";
import { MdExplore } from "react-icons/md";

const Hero = () => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_TMDB_BASE_URL
          }/trending/all/day?language=en-US`,
          {
            headers: {
              Authorization: `bearer ${
                import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
              }`,
            },
          }
        );
        const trendingResults = await response.json();
        setHeroData(trendingResults.results);
      } catch (err) {
        console.error("Error Fetching data: ", err);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="">
      <Element name="hero">
        <div>
          <div className="-z-5 flex justify-center items-center bg-s1 opacity-20 mix-blend-hard-light">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              direction={"vertical"}
              
              modules={[Autoplay, Navigation]}
              className="w-full h-screen relative"
            >
              {heroData.map((result) => (
                <SwiperSlide key={result.id}>
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${
                      result.backdrop_path
                    }`}
                    alt={`Backdrop of ${result.title || result.name}`}
                    className="w-full h-9/10 lg:7/10 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="absolute inset-0 z-2 flex flex-col items-center justify-start lg:justify-center px-5 max-lg:py-30 lg:py-10">
            <div className="py-10 self-start">
              <h1 className="text-3xl md:text-5xl font-bebas tracking-normal text-p1">
                Find Your Next Binge-Worthy Obsession
              </h1>
              <p className="text-md lg:text-xl font-barlow max-w-[500px] py-5">
              We dig through the endless stream of content so you don't have to. 
              Discover shows and movies you'll love — no more scrolling, just streaming bliss.
              </p>
            </div>

            <div className="space-y-8 space-x-10 pt-5 lg:pt-25">
              {/* TODO: Fix Button Component */}
              <Button icon={<MdExplore />}>Start Exploring</Button>

              <Button icon={<IoMdContacts />}>Contact Us</Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-p2 to-s1 mix-blend-overlay  pointer-events-none z-30"></div>
      </Element>
    </section>
  );
};

export default Hero;
