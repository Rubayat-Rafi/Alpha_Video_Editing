import React from 'react';

const Title = ({heading, title, styleTitle, paragraph}) => {
    return (
        <div className='flex items-center flex-col justify-center text-TextColor space-y-3 md:space-y-5 text-center'>
            <div className='py-2 px-4 border rounded-lg border-TextColor/20 font-medium text-sm md:text-base' >{heading}</div>
            <h3 className='text-4xl md:text-5xl lg:text-[60px] md:leading-[66px] font-medium'>{title}<span className='text-MainColor font-Instrument italic'>{styleTitle}</span></h3>
            <p className='text-sm md:text-base lg:text-lg  text-center text-SecondTextColor'>{paragraph}</p>
        </div>
    );
};

export default Title;