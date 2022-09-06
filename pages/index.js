import Link from 'next/link'
import { useState,useEffect } from "react"

const mintingDate = new Date (2022, 8, 6, 0, 23,30,);

const getTimedelta=()=>{
  const now = new Date();
  
  const Timedelta = (mintingDate.getTime() - now.getTime());

  //diff in days
  const days = Math.floor(Timedelta/(24*60*60*1000));

  //diff in hours
  const hours = Math.floor((Timedelta % (24 * 60 * 60 * 1000))/(60*60*1000));

  //diff in mins
  const mins = Math.floor((Timedelta % (60*60*1000))/(60 * 1000));

  //diff in secs
  const secs = Math.floor((Timedelta % (60 *1000))/(1000));

  return {
    days,
    hours,
    mins,
    secs
  };

};



export default function Home() {
  const[countdown, setCountdown] = useState()
  const[loading, setLoading] = useState(true)
  const[isMintingDate, setIsMintingDate] = useState(true)

  useEffect(()=> {
    const interval = setInterval (() => {
     const Timedelta = getTimedelta ()
     setCountdown(Timedelta);
     setLoading(false);
     
     if(Timedelta.secs < 0){
      setIsMintingDate(true)
     }
    },1000 )

    return ()=> clearInterval(interval)
  

    });
    if (loading){
      return <h1>Loading...</h1>
    }
    if(isMintingDate){
      return (
        <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-black px-4 py-4">
	<div className="z-1 md:max-w-6xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-4 flex flex-col items-center
            bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
      
	<div className='grid grid-cols-2 h-full w-full item-center justify-center p-auto'>
        
        <div className=' h-full w-full flex flex-col m-0 px-2'>
           <img
              src="/gif1.gif"
              className="w-fullit h-full object-cover border boredr-white-01"
            />
        </div>

          <div className="m-auto p-auto items-center justify-center">
          
           <div className ="justify-center mx-5 flex flex-row">
           <Link href="/" passHref>
            <a><img src="/logo.png" className=" mt-auto mb-0 sm:h-[80px] md:w-[80px] rounded-md"/></a>
            </Link>
            </div>
           <div className='items-center text-4xl text-white font-Righteous text-semibold mt-10 mb-2 text-center'> Minting is Live !!
	   </div>
           
	<div className="h-full w-full container  mx-auto flex flex-col items-center pt-auto">
        <div className="flex flex-col items-center max-w-4xl w-full">
          <Link href="/wlMint" passHref>

          <a className="mt-16 font-Righteous uppercase inline-flex items-center px-6 py-2 text-sm sm:text-2xl md:text-3xl font-small text-center rounded bg-rose-500 text-white hover:bg-white hover:text-rose-500"
            >
              Go To Whitelisted Sale
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>
          
          
          <Link href="/publicMint" passHref>
            <a className="mt-16 font-Righteous uppercase inline-flex items-center px-6 py-2 text-sm sm:text-2xl md:text-3xl font-small text-center rounded bg-rose-500 text-white hover:bg-white hover:text-rose-500"
            >
              Go To Public Sale
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>

          
        </div>
      </div>
          </div>
        
      </div>
	</div>
      
      </div>
      
    
      )
    }
  

  return (
    <div className="min-h-screen h-full w-full overflow-hidden flex flex-col items-center justify-center bg-black px-4 py-4">
	<div className="z-1 md:max-w-6xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-4 flex flex-col items-center
            bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
      <div className='grid grid-cols-2 h-full w-full item-center justify-center '>
        
        <div className='h-full w-full flex flex-col m-0 px-2'>
           <img
              src="/gif1.gif"
              className="w-fullit h-full object-cover border boredr-white-01"
            />
        </div>

          <div className="mt-auto mb-auto">
          <div className="m-auto p-auto items-center justify-center">
          
          <div className ="justify-center mx-5 flex flex-row">
          <Link href="/" passHref>
           <a><img src="/logo.png" className=" mt-auto mb-0 sm:h-[80px] md:w-[80px] rounded-md"/></a>
           </Link>
           </div>
           </div>

          <div className='grid grid-cols-4 mx-4  mt-10 border rounded-lg border-white-01 py-4 px-2 items-center'>
           <div className='font-Righteous mx-5 text-2xl text-bold text-white items-center text-center'>
             <span >{countdown.days}</span><br/>
             <span>DAYS</span>
           </div>
           <div className='font-Righteous  mx-5 text-2xl text-bold text-white items-center text-center'>
             <span >{countdown.hours}</span> <br/>
             <span>HOURS</span>
           </div>
           <div className='font-Righteous  mx-5 text-2xl text-bold text-white items-center text-center'>
             <span>{countdown.mins}</span><br/>
             <span>MINS</span>
           </div>
           <div className='font-Righteous  mx-5 text-2xl text-bold text-white items-center text-center'>
             <span >{countdown.secs}</span><br/>
             <span>SECS</span>
           </div>
          </div>
           <div className='items-center text-3xl text-white font-Righteous text-semibold mt-10 pb-2 text-center'> Minting will start soon!</div>
           
        


        
        

          
        
          
        
      </div>
      
      </div>
      </div>
    </div>
  )
}
