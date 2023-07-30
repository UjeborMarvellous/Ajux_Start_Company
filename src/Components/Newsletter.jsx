import React from 'react'

function Newsletter() {
    return (
        <div className='py-16 bg-pink-600'>
            <h1 className='lg:text-4xl md:text-3xl sm:text02xl contentOne tracking-widest text-white text-center'>Subscribe To The Newsletter</h1>
            <p className='text-center font-semibold text-lg py-2 text-white'>Subscribing help you get update from us</p>
            <form className='flex lg:py-1 md:py-1 sm:py-1 bg-white lg:mx-[30%] md:mx-[15%] sm:mx-[5%] rounded-md outline-none'><input type="email" required placeholder='Example@gmail.com' className='py-2 outline-none lg:px-10 sm:px-2 md:px-2 w-4/5' /> <button type='submit' className='text-white pt-3 pb-2 lg:px-8 md:px-8 sm:px-5 bg-pink-600 hover:bg-pink-700 mx-3 lg:text-xl md:text-xl sm:text-sm contentOne tracking-widest rounded-xl cursor-pointer'>Subscribe</button></form>
        </div>
    )
}

export default Newsletter