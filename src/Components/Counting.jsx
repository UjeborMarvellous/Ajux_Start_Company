import React from 'react'
import { useSpring, animated } from 'react-spring';


function Count({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 400,
        config: { mass: 4, tension: 10, friction: 10 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
function Counting() {
    return (
        <div className='flex lg:gap-5 md:gap-5 sm:gap-2'>
            <p className='text-pink-600 text-center lg:text-3xl md:text-2xl sm:text-lg lg:tracking-wide lg:font-extrabold md:font-extrabold sm:font-medium '>
                <span className='text-black/80 font-bold lg:text-xl md:text-xl sm:text-lg'>Projests</span><Count n={27} />
            </p>
            <p className='text-pink-600 text-center lg:text-3xl md:text-2xl sm:text-lg lg:tracking-wide lg:font-extrabold md:font-extrabold sm:font-medium '>
                <span className='text-black/80 font-bold lg:text-xl md:text-xl sm:text-lg'>Campaigns</span><Count n={18} />
            </p>
            <p className='text-pink-600 text-center lg:text-3xl md:text-2xl sm:text-lg lg:tracking-wide lg:font-extrabold md:font-extrabold sm:font-medium '>
                <span className='text-black/80 font-bold lg:text-xl md:text-xl sm:text-lg'>Events</span><Count n={56} />
            </p>
            <p className='text-pink-600 text-center lg:text-3xl md:text-2xl sm:text-lg lg:tracking-wide lg:font-extrabold md:font-extrabold sm:font-medium '>
                <span className='text-black/80 font-bold lg:text-xl md:text-xl sm:text-lg'>Execllency</span><Count n={13} />
            </p>
        </div>
    )
}

export default Counting