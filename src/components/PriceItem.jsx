import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import Button from "./Button";
import { MdStart } from "react-icons/md";

const PriceItem = ({title, price, description, features, caption}) => {
  return (
    <section>
        <div className='py-4 px-4 lg:px-2 lg:min-h-[850px] xl:min-h-[850px] bg-s2 bg-opacity-10 backdrop-blur-3xl rounded-4xl shadow-lg border-p3'>
            <div className='pt-5 px-5 font-barlow h4 text-p1'>
                {title}
            </div>
            <div className='small font-exo italic py-2 px-5'>{description}</div>
            <div className='font-barlow text-8xl flex flex-row items-center justify-center lg:px-5 py-9'>
                <span className='text-p3 px-2 self-start text-[20px]'>Ksh</span>
                <span>{price}</span>
                <span className='text-p3 px-2 self-end text-[20px]'>/mon</span>
            </div>

              {/* TODO: Fix Button Component */}
            <div className='my-7 flex-center'>
                <Button icon={<MdStart />}>Get Started</Button>
            </div>

            <div>
                {features.map((feature) => (
                    <ul key={feature.id} className='flex flex-row justify-start items-baseline py-2 body-1'>
                        <span className='px-3 lg:pl-6'><FaCircleCheck /></span>
                        <li className='max-md:body-3 max-xl:body-3 font-barlow'>{feature.description}</li>
                    </ul>
                ))}
            </div>
            <div className='lg:hidden small-1 font-barlow italic py-7 px-3'>{caption}</div>
          <div className='absolute inset-0 rounded-4xl bg-linear-to-t from-p3 to-s1 max-lg:opacity-20 max-xl:opacity-60 mix-blend-soft-light -z-2'></div>
        </div>
    </section>
  )
}

export default PriceItem