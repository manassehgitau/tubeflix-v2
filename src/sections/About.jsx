import React, { useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Element } from 'react-scroll';

const About = () => {
  const [posterCards, setPosterCards] = useState([]);
  
    useEffect(() => {
      const fetchPosterData = async () => {
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
          setPosterCards(trendingResults.results);
        } catch (err) {
          console.error("Error Fetching data: ", err);
        }
      };
  
      fetchPosterData();
    }, []);
  
  return (
    <section className='py-12 px-6 relative'>
      <Element name='About'>
        <div className='mx-auto max-w-screen-xl'>
            <div className='flex-col-center text0center space-y-3'>
                <h2 className='text-3xl lg:text-5xl font-bebas text-p1 tracking-wide'>Who Are We?</h2>
                <p className='small lg:base font-barlow italic pb-3'>Besides Your New Best Friend in Streaming</p>
            </div>

            <div className='flex-center'>
              <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className='flex-col-center gap-2 font-exo leading-relaxed'>
                  <p className='py-2'>
                    We're your <span className='text-p3'>digital couch companion</span> — tirelessly watching, rating, sorting, 
                    and recommending the <span className='text-p3'>best of movies and TV shows</span> so you don't waste time watching duds.
                  </p>
                  <p className='py-2'>
                  From mind-blowing thrillers to comfort-watch sitcoms, we’ve got a recommendation for <span className='text-p3'>every mood, moment, and snack combo.</span> 
                  </p>
                </div>

                <div className='w-full max-w-md mx-auto lg:mx-0'>
                  <Swiper
                  effect={'coverflow'}
                  autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                  }}
                  rewind={true}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                    rotate:80,
                    stretch:5,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  className='rounded-2xl shadow-lg'
                  >
                    {posterCards.map((poster) => (
                      <SwiperSlide key={poster.id} className='max-w-xs h-auto'>
                        <img src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${
                      poster.poster_path
                    }`} alt={`poster of ${poster.title || poster.name}`}
                    className='w-full h-80 object-contain' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          <div className='absolute inset-0 bg-radial from-p2 to-s1 mix-blend-soft-light -z-2'></div>
        </div>
        </Element>
    </section>
  )
}

export default About