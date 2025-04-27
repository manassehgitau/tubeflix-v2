import clsx from 'clsx';
import React from 'react'

const Button = ({children, href, icon, onClick}) => {
    const Inner = () => (
        <>
            <span className='flex-between relative rounded-3xl px-5 py-1.5 inner-before bg-s3 group-hover:bg-s4 group-hover:opacity-100 overflow-hidden'>
                <span>
                    {icon && (icon) }
                </span>
                <span className='relative z-2 pl-3 text-white font-barlow base group-hover:text-p1 capitalize'>
                    {children}
                </span>
            </span>
            <span className='glow-before glow-after'></span>
        </>
    )

  return href ?  (
    <a href={href} className={clsx("relative p-0.5 rounded-2xl shadow-500 group cursor-pointer transition-colors duration-500")}>
        <Inner />
    </a>
  ) : (
    <button onClick={onClick} className={clsx("relative p-0.5 rounded-2xl shadow-500 group cursor-pointer transition-colors duration-500")}> 
        <Inner />
    </button>
  );
}

export default Button