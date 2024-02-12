import React from 'react'
import './style.css'


const Navbar = () => {
  return (
  <nav class="navbar flex flex-rows flex-wrap bg-gray-900 space-x-2.5 gap-14 p-0.5 text-gray-50  fixed">
 
  
      <ul class="flex items-center flex-rows gap-0 text-gray-700  fixed z-10 pt-14 bg-black ">
      <img src="logo.png" alt="logo" className='h-10 ' />
      <a href="/" class="navbar-brand  text-white px-4">OKX Exange wallet</a>


      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Buy Cryptos
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Discover
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         Trade
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Make it prosper
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Build
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Institutional
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <div class="dropdown" >
          <button class="btn btn-secondary dropdown-toggle drops" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Connection
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Express Purchase</a></li>
            <li><a class="dropdown-item" href="#">P2P trading</a></li>
            <li><a class="dropdown-item" href="#">Third party payment</a></li>
          </ul>
      </div>
      <button class="btn bg-blue-500 hover:bg-blue-700 text-white  py-2 rounded underline">Register</button>
        
      </ul>
  
</nav>

  )
}

export default Navbar