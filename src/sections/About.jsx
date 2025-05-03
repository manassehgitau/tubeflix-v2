import React, { useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Element } from 'react-scroll';
import { statistics  } from '../constants';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [posterCards, setPosterCards] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3,     // % of the section visible before triggering
  });
  
    useEffect(() => {
      const fetchPosterData = async () => {
        try {
          const response = await fetch(
            `${
              import.meta.env.VITE_TMDB_BASE_URL
            }/person/popular?language=en-US&page=1`,
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
    <section className='py-12 px-6 relative' ref={ref}>
      <Element name='About'>
        <div className='mx-auto max-w-screen-xl'>
            <div className='flex-col-center text-center space-y-2'>
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
                  <div className='flex-col-center py-4'>
                    <h2 className='h6 font-barlow text-p1'>Trusted by Many</h2>
                    <div className='flex-between px-4 gap-7 md:gap-20'>
                      {statistics. map((statistic) => (
                        <div key={statistic.id} className='flex-col-center'>
                          <div>
                            {inView && (
                            <CountUp start={statistic.prevNumber}
                            end={statistic.number}
                            duration={2}
                            decimal='.'
                            decimals={2}
                            suffix='M+'
                            className='text-p5 body-2'/> )}
                          </div>
                          <div className='body-3 text-p3 font-barlow'>
                            {statistic.caption}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
                    rotate:100,
                    stretch: 20,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true,
                  }}
                  modules={[EffectCoverflow, Autoplay]}
                  initialSlide={2}
                  className='rounded-2xl shadow-lg'
                  >
                    {posterCards.map((poster) => (
                      <SwiperSlide key={poster.id} className='max-w-xs h-auto'>
                        <img src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_PATH}${
                      poster.profile_path
                    }`} alt={`image of ${poster.title || poster.name}`}
                    className='w-full h-80 object-contain' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          <div className='absolute inset-0 bg-radial from-p2 to-s1 max-lg:opacity-50 max-xl:opacity-60 mix-blend-soft-light -z-2'></div>
        </div>
        </Element>
    </section>
  )
}

export default About