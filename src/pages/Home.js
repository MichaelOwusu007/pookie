
import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='home-container'>
      <div className='home-content'>
       <Link to='/' className=' left-5 lg:top-10 lg:left-14 top-5 relative' >
       <button className='font-bold cursor-pointer text-[18px] lg:text-xl text-pink-500'>
        POOKIE
       <div className='absolute left-5 top-5 py-1 px-2 bg-black rounded text-base text-white'>Home</div>
        </button>
       </Link>
         <section className='absolute  lg:min-h-screen 2xl:min-h-[90vh] h-screen w-screen lg:items-center justify-center lg:flex lg:flex-row space-y-4'>
        <section className=' flex flex-col  items-center justify-center w-full lg:pl-14 mx-auto h-full z-0 lg:items-start'>
          <div>
          </div>
          <h1 className='font-extrabold main-text text-[48px] xl:text-[65px] righteous  '>
            <span className=' flex items-center  '>The cat and dog
            </span>
            <span className=' mx-auto flex items-center gap-3 w-max'>Pet lovers <span className='text-pink-600'> paradise</span> 
            </span>
          </h1>
          <p className='sub-text text-[22px] font-semibold top-[400px]   text-center lg:text-start lg:w-[550px] lg:text-[28x] '>Pookie helps you find the right pet. That cat or dog whose temperament actually matches with your character is here.</p>
            <div className='mt-[30px] xl:mt-[30px] flex items-center flex-col justify-center xl:items-start '>
              <div className='flex flex-row gap-6 btn-container'>
                <a href="/Dogpage"><button className='bg-green-500 w-[200px] items-center btn 1 rounded-md justify-center active:scale-95 h-[50px] flex'><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md mx-auto'>Find Dog</div></button></a>
                 <a href="/Catpage"><button className='bg-red-500 btn 2 w-[200px] items-center rounded-md justify-center active:scale-95 h-[50px] flex'><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md mx-auto'>Find Cat</div></button></a>
                </div>
          <div className=' pt-5 flex gap-6 justify-center items-center  text-center font-medium '>
            <span>
              <span className='text-[25px] '>Your</span>
            </span>
            <span>
              <span className='text-[25px] '>Perfect</span>
            </span>
            <span>
              <span className=' text-[25px]'>Match</span>
            </span>
              <span>
              <span className=' text-[25px]'></span>
            </span>
            </div>
          </div>
          </section>
          <section className='hidden lg:flex'>
              <div className="left-content">
              <div className="left-image object-cover pr-20 ">
                 <div class="border-top-left"></div>
                  <div class="border-bottom-right"></div>
                            <img src="pookie.jpg" alt="banner" />
                        </div>
                    </div>
          </section>
          </section>
      </div>
    </div>
  )
}

export default Homepage