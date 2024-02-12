
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/example/",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/example/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/example/",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a href={link.href} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
        <p>Copyright &copy; ©2023 OKX.COM All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;




// import React from 'react'

// const Footer = () => {
//   return (
      
//     <div>
//           <div className=''>
//             <h2>More about OKX</h2>
//             <a href="http://"> About Us </a>
//             <a href="http://"> Jobs </a>
//             <a href="http://">Contact us </a>
//             <a href="http://">Terms of us </a>
//             <a href="http://">Privacy Policy </a>
//             <a href="http://">Declaration </a>
//             <a href="http://">Notice relating to relating to denunciation </a>
//             <a href="http://">Law application</a>
//             <a href="http://">OKX app </a>
//           </div>

//         <div className=''>
//               <p>Products</p>
//               <a href="http://">Buy crypto</a>
//               <a href="http://">P2P trading</a>
//               <a href="http://">Conversion</a>
//               <a href="http://">Trading</a>
//               <a href="http://">Earn</a>
//               <a href="http://">OKAY</a>
//               <a href="http://">OKX Wallet</a>
//               <a href="http://">Web3 Marketplace</a>
//               <a href="http://">Crypto Calculator</a>
//               <a href="http://">Trading bots</a>
//               <a href="http://">All crypto currencies</a>
//               <a href="http://">Academy</a>
//         </div>

//         <div className=''>
//               <p>Services</p>
//               <a href="http://">Affiliated</a>
//               <a href="http://">API v5</a>
//               <a href="http://">Historical market data</a>
//               <a href="http://">Fee levels</a>
//               <a href="http://">A price quote </a>
//               <a href="http://">Application to become P2P merchant</a>
//         </div>

//         <div className=''>
//               <p>Assistance</p>
//               <a href="http://">Help center</a>
//               <a href="http://">Official verification</a>
//               <a href="http://">Advertisement</a>
//               <a href="http://">Connection with OKX</a>
//         </div>

//         <div className=''>
//               <p>Buy cryptos</p>
//               <a href="http://">Buy USDT</a>
//               <a href="http://">Buy Bitcoin</a>
//               <a href="http://">Buy Ethereum</a>
//               <a href="http://">Buy ADA</a>
//               <a href="http://">Buy Solana</a>
//               <a href="http://">Buy MATIC</a>
//               <a href="http://">Buy litecoin</a>
//               <a href="http://">Buy XRP</a>
//         </div>  

//         <div className=''>
//               <h1>Crypto calculator</h1>
//               <a href="http://">BTC to EUR</a>
//               <a href="http://">ETF to EUR</a>
//               <a href="http://">USDT to EUR</a>
//               <a href="http://">SOL to EUR</a>
//               <a href="http://">XRP to EUR</a>
//        </div>  

//        <div className=''>
//                 <h1>Trading</h1>
//                 <a href="http://">BTC to USDT</a>
//                 <a href="http://">ETH to USDT</a>
//                 <a href="http://">MATIC to USDT</a>
//                 <a href="http://">LTC to USDT</a>
//                 <a href="http://">SOL to USDT</a>
//                 <a href="http://">XRP to USDT</a>
//                 <a href="http://">Bitcoin course</a>
//                 <a href="http://">Ethereum Price</a>
//                 <a href="http://">Cardano Price</a>
//                 <a href="http://">Solana Course</a>
//                 <a href="http://">XRP price</a>
//        </div>

//        <div className=''>
//               <p>trade from anywhere with OKX</p>
//        </div>

//        <div>
//               <button>Register</button>
//        </div>

//        <div className='scan'>
//               <img src="" alt="" />
//        </div>
       
//       <div className=''></div>
//             <p>Community</p>

//             <div>
                  
//             </div>
//     </div>

   
//   )
// }

// export default Footer