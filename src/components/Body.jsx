import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

import React from 'react'
import { useState } from "react";
function Body(){
  const {icon, setIcon} = useState("hidden")
  const {plus, setPlus} = useState(CiCirclePlus)

    const handleClick =() => {
      if(icon === "hidden") {
        setPlus(CiCircleMinus)
        setIcon(CiCirclePlus)

    } else {
      setPlus(CiCirclePlus)
      setIcon('hidden')
    
     }
      
      }
   
  return (
<div className="bg-black rgb(255, 255, 255) ">
        <div className='mx-[12%] flex justify-center items-center h-screen'>
    <div className='flex pt-[12%] content-end '>
    <div className='flex items-center justify-end '>

<div>
     <h1 className='slashed-zero antial whitespace-wrap text-6xl subpixel-antialiased not-italic font-medium leading-none tracking-wide text-white'>A faster, more 
        efficient and more powerful cryptocurrency exchange platform</h1>
     <div className=" flex gap-2 my-5">
            <input
             type="email"
               name="email"
                placeholder="Enter your email address"
                className="bg-black border border-white-300 text-gray-900 text-sm rounded-lg
                 block w-80 p-2.5 dark:bg-black 
                    dark:border-white-600 dark:placeholder-gray-400 dark:text-white  
                  h-[50px]" />

            <button
                    className='bg-white rounded-full px-10 py-3 mx-10 w-[30%] '  type="button">
                    Try OKX
            </button> 

    </div>
            <div className=" w-30 h-15 justify-items-center flex items-center gap-12 py-20 rounded-lg shadow-md">
            <img className='w-[130px] h-[60px]' src="fest.webp" alt="logo2" />
            <img className='w-[130px] h-[40px]' src="mc.webp" alt="logo3" />
            <img className='w-[80px] h-[80px]' src="city.webp" alt="logo4" />
            </div>
</div>
</div>
    <div className='h-[50%] w-[70%] mx-[15%]flex justify-end items-center '>
            <video src="video1.mp4"autoPlay loop muted playsInline
            className=''></video>

    </div>
</div>

</div>

    <div className=''>
        <video src=""></video>
    </div>
    <div className='bg-yellow-600 bg-gradient-to-r from-yellow-500 via-red-500 to-indigo-500 ... from-red-200 flex-justify-center text-white p-1 h-12'>
    <marquee direction="left" height="100px" width="100%">MATIC $0,91 (+0,67 %)    XRP $0,60 (-0,10 %)    SOL $100,25 (-1,73 %)    DOGE $0,08 (+1,16 %)
BTC $46 607,10 (-0,13 %)    ETH $2 585,04 (+0,04 %)    OKB $54,90 (+0,04 %)    MATIC $0,91 (+0,67 %)    XRP $0,60 (-0,10 %)    SOL $100,25 (-1,73 %)   DOGE $0,08 (+1,16 %)
</marquee>
    </div>


    <div className='justify-items-center my-9 text-2xl text-white'>
        <h2 className='text-5xl text-center'>Trade like a pro</h2>
        <h4 className='mt-2 text-center text-gray-500'>Get the lowest fees, fastest transactions, powerful APIs, and more</h4>
    </div>
   

    <div  class="flex justify-center items-center h-screen"><video className='w-[98%] h-[90%] py-11' src="video2.mp4" autoPlay loop muted playsInline></video></div>

    <div className='justify-items-center ml-52 mx-11 flex mt-40 text-3xl text-white'>
        <img className='h-[21%] w-[25%] mx-[15%]flex justify-end items-center' src="last img.png" alt="logo" />
        <div className='px-28 py-11'><h5 className='itespace-wrap flex-end top-10 right-10text-white slashed-zero antial wh text-6xl subpixel-antialiased not-italic font-medium leading-none tracking-wide'>An application. <br />Unlimited <br />possibilities.</h5>
        <h1 className='py-20 text-lg'>Are you new to the world of cryptos? No problem. <br />Buy crypto for just $5 with just one click and build <br /> your skills as you go.</h1></div>
    </div>
        
        <div className=''>
            <p className='flex items-center justify-center py-5 mt-40 text-5xl font-semibold text-white'>By your side every step of the way</p>
            <p className=' flex items-center justify-center mx-10 text-2xl text-center text-white'>From your first crypto trading transaction to your first NFT purchase, we will guide you through the process. No question is ridiculous.  No need to worry yourself to sleep. Have confidence in your cryptos.</p>
        </div> 
            <div className='min-height-[80vw] p-0 w-[60% py-20 px-20'>
                <video src="https://static.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm"autoPlay loop muted playsInline></video>
            </div>
        

        <div className='py-28 px-20'>
            <p className='flex items-center justify-start text-5xl font-semibold text-white'>What is OKX?</p>
            <p className='py-5 text-lg text-white'>With help from our world-class partners, find out why we're now <br />your new favorite crypto app Discover</p>
            </div>

        <div className='flex items-center justify-between p-10 m-10'>   
            <button
                    className='bg-white rounded-full px-10 py-5 mx-10 w-[200px] h-[70px] font-semibold  ' type="button">
                    Discover
                </button> 
                <div className='justify-end px-10 flex h-[220px] w-[530px]'><img src="logo.png" alt="" /></div>
        </div>        
           
    <div className='flex justify-center gap-5'>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4" autoPlay loop muted playsInline> </video>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4"autoPlay loop muted playsInline ></video>
    <video className='min-height-[75vw] p-0 w-[30%]' src="https://static.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4"autoPlay loop muted playsInline></video>
     
    </div>
        <div className="">
          <div className=" mt-72">
            <h2 className="text-center text-5xl text-white font-bold pb-20">Got questions?</h2>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl" onClick={handleClick}>
                  <h2>What products does OKX provide?</h2>
                <h2 className="text-6xl" ><CiCirclePlus />
                  {plus}

                </h2>
                {/* <div className="border-2 border-solid border-white"></div> */}
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl py-10">
                  <h2>How do I buy Bitcoin on OKX?</h2>
                <h2 className="text-6xl"><CiCirclePlus /></h2>
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl py-10 ">
                  <h2>Where is OKX based?</h2>
                <h2 className="text-6xl" onClick={handleClick}><CiCirclePlus /></h2>
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl py-10 ">
                  <h2>Can U.S. citizens use OKX?</h2>
                <h2 className="text-6xl"><CiCirclePlus /></h2>
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl py-10 ">
                  <h2>What is crypto?</h2>
                <h2 className="text-6xl"><CiCirclePlus /></h2>
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            <div className="">
              <div className="">
                <div className="flex justify-between px-4 text-white text-2xl py-10 ">
                  <h2>How to trade crypto on OKX?</h2>
                <h2 className="text-6xl"><CiCirclePlus /></h2>
                

              </div>
              <div className="border-b-2 border-solid border-white py-4">
                    <h3 className="text-xl text-white px-4">OKX is an innovative cryptocurrency exchange with advanced financial offerings. We offer cutting-edge crypto trading and earning <br /> services to millions of users globally in more than 180 regions.
                        With OKX, you can:</h3>
                        <div className="text-white text-xl px-4">
                          <li>Trade hundreds of tokens and trading pairs on spot, margin, and derivatives markets.</li>
                          <li>Manage your DeFi portfolio by connecting your Web3 wallet to organize all your decentralized assets in one place.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Create, buy, and sell NFTs on our NFT Marketplace.</li>
                          <li>Connect to DeFi with our Web3 wallet via our app or browser extension.</li>
                          <li>Earn crypto in our mining pools, take out crypto collateralized loans, and discover other ways to grow your crypto with OKX Earn.</li>
                          <li>Connect to the world-famous TradingView Platform and trade crypto directly with their supercharged charts.</li>

                        </div>
                        
                </div>

              </div>
              
              
              
            </div>
            
            
          </div>
    
        </div>
        
</div>

  )
}

export default Body




// flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800