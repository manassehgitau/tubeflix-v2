import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Trending = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const page1 = await fetch(
          `${
            import.meta.env.VITE_TMDB_BASE_URL
          }/trending/all/day?language=en-US&page=1`,
          {
            headers: {
              Authorization: `bearer ${
                import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
              }`,
            },
          }
        );
        const page2 = await fetch(
          `${
            import.meta.env.VITE_TMDB_BASE_URL
          }/trending/all/day?language=en-US&page=2`,
          {
            headers: {
              Authorization: `bearer ${
                import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN
              }`,
            },
          }
        );

        const data1 = await page1.json();
        const data2 = await page2.json();

        const combinedResults = [...data1.results, ...data2.results];
        // console.log(combinedResults);

        setTrendingData(combinedResults.slice(0, 40));
      } catch (err) {
        console.error("Error Fetching data: ", err);
      }
    };

    fetchTrendingData();
  }, []);

  return (
    <section className="py-12 px-6 relative">
      <Element name="Trending">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex-col-center text-center space-y-2">
            <h2 className="text-3xl lg:text-5xl font-bebas text-p1 tracking-wide">
              Trending
            </h2>
            <p className="small lg:base font-barlow italic pb-3">
              What’s Everyone Watching Right Now?
            </p>
            <p className="font-exo small-caption py-2 px-15 max-lg:hidden">
              From cult classics making a comeback to the newest releases
              lighting up timelines — here’s the buzz-worthy content viewers
              can’t stop talking about. If it’s hot, it’s here.
            </p>
          </div>

          {/* TODO: Add Fancy colors and animations to this section (using framer motion, e.t.c)*/}
          {/* TODO: Use custom navigation */}

          <div className="relative mx-5">
            <Swiper
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="px-12"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 6,
                },
              }}
            >
              {trendingData.map((trendingPoster, index) => (
                <SwiperSlide key={trendingPoster.id} className="max-xs h-auto">
                  <img
                    src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${
                      trendingPoster.poster_path
                    }`}
                    alt={`poster of ${
                      trendingPoster.title || trendingPoster.name
                    }`}
                    className="w-full h-60 sm:h-72 md:h-80 object-contain rounded-2xl shadow-lg"
                  />
                  <div
                    className="absolute bottom-2 left-20 md:bottom-12 md:-left-1 lg:bottom-8 lg:-left-7 z-1 text-6xl lg:text-8xl font-bebas text-p1 transition-all duration-500"
                    style={{
                      WebkitTextStroke: "0.5px white",
                    }}
                  >
                    {index + 1}
                  </div>
                  {/* {console.log(index)} */}
                </SwiperSlide>
              ))}
            </Swiper>
            <div></div>
          </div>
          <div className="absolute inset-0 bg-linear-to-bl from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
          <div className="absolute inset-0 bg-linear-to-tr from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
          <div className="absolute inset-0 bg-linear-to-tl from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2"></div>
        </div>
      </Element>
    </section>
  );
};

export default Trending;
