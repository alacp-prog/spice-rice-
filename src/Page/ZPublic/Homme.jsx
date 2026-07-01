import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../../assets/backg.jpg";
import platimage from "../../assets/plat.png";
import loopimage from "../../assets/loop.png";
import flecheimage from "../../assets/fleche.png";
import bgplat from "../../assets/bgplat.png";
import sushi from "../../assets/sushi.png";
import bibimbap from "../../assets/bibimbap.png";
import padthai from "../../assets/padthai.png";
import chikentikka from "../../assets/chikentikka.png";
import ramen from "../../assets/ramen.png";
import greencurry from "../../assets/greencurry.png";
import teriyakichiken from "../../assets/teriyakichiken.png";
import pho from "../../assets/pho.png";
import phoneIcon from "../../assets/phone.png";
import webIcon from "../../assets/web.png";
import mailIcon from "../../assets/mail.png";
import locationIcon from "../../assets/location.png";
import sendIcon from "../../assets/send.png";

import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";

import { Menu, Facebook, Instagram, Twitter } from "lucide-react";
const Homme = () => {
  // Pour fixer l'écran sur la section principale (home)
  React.useEffect(() => {
    // Suppression du blocage du scroll et des effets de mouvement d'écran
  }, []);
  // Scroll vers une section par id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  // Animation utilitaire pour le titre principal
  const mainTitleAnim = "animate-fade-in-down";

  // Menu mobile
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef();
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);
  return (
  <div className="font-sans h-auto bg-white animate-fade-in min-h-screen">
      {/* Section principale */}
  <section id="home" className="relative w-screen h-screen min-h-[420px] flex bg-[#232323] overflow-hidden animate-fadein-slow ">
  <div className="absolute inset-0 bg-cover bg-center opacity-60 animate-fadein" style={{zIndex:1, backgroundImage: `url(${bgImage})`, minHeight:'600px'}}></div>
        <div className="hidden md:block absolute top-0 right-0 h-full w-[36%] bg-[#d9772b] z-10" />
  <div className="absolute top-6 left-0 flex items-center z-30 p-0 m-0 animate-slidein-down" style={{height:'56px'}}>
          <span className="block w-14 h-5 bg-[#d9772b]  mr-3 ml-0"></span>
          <span className="text-white text-2xl font-serif tracking-wide drop-shadow-lg">Spice &amp; Rice</span>
        </div>
  <div className="absolute top-8 right-6 z-40 flex items-center gap-1 animate-slidein-down delay-200">
          <img src={loopimage} alt="search" className="w-7 h-7 object-contain" />
          <div className="h-8 w-px bg-white opacity-60 mx-2" />
          <button onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu" className="focus:outline-none">
            <Menu className="w-7 h-7 text-white" />
          </button>
          {/* Menu déroulant */}
          {menuOpen && (
            <div ref={menuRef} className="absolute right-0 top-12 mt-2 bg-[#232323] border border-[#d9772b] rounded-lg shadow-xl flex flex-col min-w-[160px] animate-fadein z-50">
              <button onClick={() => scrollToSection('home')} className="text-white px-5 py-2 text-left hover:bg-[#d9772b] hover:text-black transition-colors rounded-t-lg">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-white px-5 py-2 text-left hover:bg-[#d9772b] hover:text-black transition-colors">About Us</button>
              <button onClick={() => scrollToSection('most')} className="text-white px-5 py-2 text-left hover:bg-[#d9772b] hover:text-black transition-colors">Most Requested</button>
              <button onClick={() => scrollToSection('gallery')} className="text-white px-5 py-2 text-left hover:bg-[#d9772b] hover:text-black transition-colors">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-white px-5 py-2 text-left hover:bg-[#d9772b] hover:text-black transition-colors rounded-b-lg">Contact Us</button>
            </div>
          )}
        </div>
        <div className="relative z-20 flex flex-1 flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-16 lg:px-32 animate-fadein-up delay-300">
          <div className="flex-1 flex flex-col justify-center h-full text-left md:pr-10 max-w-[520px] delay-500">
            <div className="mt-24 md:mt-0">
              <div className="flex flex-col items-center">
                <div className="text-[#d9772b] text-lg md:text-xl font-bold tracking-widest mb- text-center animate-fade-in-up">ASIAN</div>
                <div className={`text-white text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight ${mainTitleAnim}`}>RESTAURANT</div>
                <div className="text-gray-200 italic text-sm md:text-lg mb-8 text-center animate-fade-in-up delay-200">Authentic Asian Flavors in Every Bite</div>
              </div>
              <button className="flex items-center bg-[#d9772b] hover:bg-[#b35e1e] rounded-full px-5 py-2 mb-4 shadow-lg transition-all duration-200 w-max mx-auto justify-center text-base md:text-lg" onClick={() => scrollToSection('contact')}>
                <span className="text-white font-serif text-lg md:text-xl font-normal group-hover:scale-105 transition-transform duration-300">Book a Table</span>
                <span className="ml-4 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#232323] animate-bounce-slow group-hover:animate-bounce">
                  <img src={flecheimage} alt="arrow" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                </span>
              {/* On réactive le scroll quand on clique sur le bouton */}
              <script dangerouslySetInnerHTML={{__html:`document.body.style.overflow='';`}} />
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center h-full relative z-30 delay-700">
            <img src={platimage} alt="Asian Dish" className="w-[260px] md:w-[400px] rounded-full object-cover" />
          </div>
        </div>


      </section>

      {/* About us section */}
  <section id="about" className="w-full bg-white py-10 px-2 sm:px-4 md:px-2 lg:px-24 flex flex-col items-center animate-fadein-up">
  <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl  mb-4 sm:mb-6 text-justify animate-fade-in-down" style={{ fontFamily: 'TheSeasonsSpringit', color: '#d9772b', wordBreak: 'break-word' }}> About us : </h2>
        <p className="text-black text-base xs:text-lg sm:text-xl md:text-xl max-w-full  text-justify mb-6 sm:mb-10 tracking-wide leading-relaxed font-[500] px-1 sm:px-4"style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive', wordBreak: 'break-word' }}>
          At Spice &amp; Rice, we bring the heart of Asia straight to your table. From sizzling stir-fries and aromatic curries
          to comforting bowls of ramen and fragrant jasmine rice, every dish is crafted with fresh ingredients and bold spices.
          Our chefs combine traditional flavors with a modern twist, creating an unforgettable dining experience.
          Whether you're joining us for a casual lunch, a family dinner, or a late-night craving, Spice &amp; Rice is your destination for authentic Asian taste in the heart of Tokyo.
        </p>
      <style>{`
        #about p {
          line-height: 2.5 !important;
        }
      `}</style>
      </section>

    {/* Section bgplat */}
  <section id="most" className="w-full relative flex items-center justify-center overflow-hidden min-h-[480px] md:min-h-[540px]">
    <img src={bgplat} alt="bgplat" className="w-full h-full  object-center absolute inset-0" />
  <div className="relative z-20 flex flex-col items-center justify-center w-full   mt-32 md:mt-96 ">
  <h2 className="text-3xl md:text-6xl font-bold text-white  tracking-wide drop-shadow-lg text-center mb-8 animate-fade-in-down" style={{ fontFamily: 'TheSeasonsSpringit' } }>Most Requested</h2>
      {/* Mobile only: carousel plats */}
      <div className="w-full flex justify-center mt-6 md:hidden">
        <div className="relative w-full ">
          {(() => {
            const plats = [
              { img: sushi, title: "Sushi", desc: "A Japanese classic of fresh fish and rice." },
              { img: bibimbap, title: "Bibimbap", desc: "A colorful Korean rice bowl." },
              { img: padthai, title: "Pad Thai", desc: "A sweet and savory noodle dish from Thailand." },
              { img: chikentikka, title: "Chicken Tikka Masala", desc: "A rich Indian curry." },
              { img: ramen, title: "Ramen", desc: "A hearty bowl of noodles in rich, flavorful broths with toppings." },
              { img: greencurry, title: "Green Curry", desc: "A spicy, coconut-based curry with your choice of chicken or tofu." },
              { img: teriyakichiken, title: "Teriyaki Chicken", desc: "Grilled chicken with a sweet and savory teriyaki glaze." },
              { img: pho, title: "Pho", desc: "A traditional Vietnamese beef noodle soup with fresh herbs and spices." }
            ];
            const [active, setActive] = React.useState(0);
            const goLeft = () => setActive(prev => prev === 0 ? plats.length - 1 : prev - 1);
            const goRight = () => setActive(prev => (prev + 1) % plats.length);
            const plat = plats[active];
            return (
              <div className="relative flex flex-row w-full z-10 items-center  px-4  justify-center" style={{minHeight:320}}>
                {/* Flèche gauche centrée sur la carte */}
                <button onClick={goLeft} className="absolute left-0 top-1/4 -translate-y-1/2  text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg  z-20 transition-all duration-200">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                {/* Plat actif uniquement */}
                <div className="flex flex-col items-center relative group z-10 snap-center scale-110 shadow-2xl bg-black transition-all duration-500" style={{ minWidth: 220, minHeight: 320, borderRadius: 32, boxShadow: '0 8px 32px 0 rgba(217,119,43,0.25)' }}>
                  <img
                    src={plat.img}
                    alt={plat.title}
                    className="rounded-full border-4 border-white mb-2 object-cover transition-all duration-500 z-10 relative shadow-lg w-36 h-36 group-hover:scale-110 animate-zoom-in"
                    style={{boxShadow: '0 4px 24px 0 #d9772b55'}}
                  />
                  <span className="text-[#d9772b] font-bold transition-all duration-500 z-10 relative text-xl group-hover:text-2xl">{plat.title}</span>
                  <span className="text-white text-center mt-1 max-w-[300px] transition-all duration-500 z-10 relative text-base group-hover:text-base" style={{ fontFamily: 'Comic Sans MS' }}>{plat.desc}</span>
                </div>
                {/* Flèche droite centrée sur la carte */}
                <button onClick={goRight} className="absolute right-0 top-1/4 -translate-y-1/2 text-white  rounded-full w-10 h-10 flex items-center justify-center shadow-lg  z-20 transition-all duration-200">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            );
          })()}
        </div>
      </div>
      {/* Desktop only: grille plats */}
      <div className="hidden md:block w-full relative  mt-4 py-6 z-20">
        {/* Bandes orange horizontales */}
        <div className="absolute left-0 w-full h-16 bg-[#d9772b]" style={{top: '12%'}}></div>
        <div className="absolute left-0 w-full h-16 bg-[#d9772b]" style={{top: '59%'}}></div>
        <div className="grid w-full gap-y-6 gap-x-2 relative z-10" style={{gridTemplateColumns: 'repeat(4, 1fr)'}}>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={sushi} alt="Sushi" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Sushi</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A Japanese classic of fresh fish and rice.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={bibimbap} alt="Bibimbap" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Bibimbap</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A colorful Korean rice bowl.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={padthai} alt="Pad Thai" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Pad Thai</span>
            <span className="text-white text-s max-w-43 mx-1.5 mb-10" style={{fontFamily: 'inherit'}}>A sweet and savory<br /> noodle dish from Thailand.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={chikentikka} alt="Chicken Tikka Masala" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Chicken Tikka Masala</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A rich Indian curry.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={ramen} alt="Ramen" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Ramen</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A hearty bowl of noodles in rich,<br /> flavorful broths with toppings.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={greencurry} alt="Green Curry" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Green Curry</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A spicy, coconut-based curry <br />with your choice of chicken or tofu.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={teriyakichiken} alt="Teriyaki Chicken" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Teriyaki Chicken</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>Grilled chicken with<br /> a sweet and savory teriyaki glaze.</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-20">
            <div className="rounded-full border-4 border-white mb-2 object-cover shadow-lg w-36 h-36 flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110" style={{background: '#000'}}>
              <img src={pho} alt="Pho" className="rounded-full w-32 h-32 object-cover" style={{boxShadow: '0 4px 24px 0 #d9772b55'}} />
            </div>
            <span className="text-[#d9772b] font-bold text-xl mb-1" style={{fontFamily: 'cursive'}}>Pho</span>
            <span className="text-white text-s max-w-43 mx-3.5 mb-10" style={{fontFamily: 'inherit'}}>A traditional Vietnamese beef noodlebr/ soup with fresh herbs and spices.</span>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Section Contact Us */}

  <section id="contact" className="w-full min-h-[600px] bg-white flex flex-col md:flex-row items-center justify-center  px-2 sm:px-4 md:px-8  relative z-30 animate-fadein-up gap-2 md:gap-0 overflow-hidden">
    <div className="w-full md:w-1/2 max-w-xl bg-white rounded-lg shadow-2xl p-3  md:mr-8 mb-8 md:mb-0 relative z-20 flex flex-col justify-center">
      <form className="flex flex-col gap-3 xs:gap-4 w-full">
        <div>
          <label className="block text-black font-medium mb-1">Name</label>
          <input type="text" placeholder="put your name" className="w-full border border-[#d9772b] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9772b] placeholder-gray-400" />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <label className="block text-black font-medium mb-1">Email</label>
            <input type="email" placeholder="your email" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9772b] placeholder-gray-400" />
          </div>
          <div className="flex-1 min-w-0">
            <label className="block text-black font-medium mb-1">Phone Number</label>
            <input type="tel" placeholder="0123456789" className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9772b] placeholder-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-black font-medium mb-1">Message</label>
          <textarea placeholder="hi , i need a reservation for 2 in date  dd/mm/yyyy......" rows={4} className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9772b] placeholder-gray-400 resize-none" />
        </div>
        <button type="submit" className="mt-2 bg-black text-white rounded-full px-8 py-2 flex items-center gap-2 font-semibold shadow-md hover:bg-[#d9772b] transition-all w-max mx-auto sm:mx-0">
          SUBMIT <img src={sendIcon} alt="send" className="w-5 h-5 ml-1" />
        </button>
      </form>
      <div className="flex justify-between mt-8 text-xs text-[#d9772b] flex-wrap gap-2">
        <a href="#" className="underline">Privacy Policy</a>
        <a href="#" className="underline">Need Help?</a>
      </div>
    </div>
        {/* Infos de contact */}
        {/* Bloc infos contact mobile */}
        <div className="w-full flex flex-col items-center justify-center pb-10 md:mb-8 md:hidden">
          <div className="w-full max-w-md px-2 py-8 flex flex-col items-center gap-6">
            <h2 className="text-5xl font-bold font-sans mb-8 text-black text-left w-full">Contact Us</h2>
            <ul className="flex flex-col gap-6 text-black text-lg w-full animate-fade-in-up">
              <li className="flex items-center gap-3"><img src={phoneIcon} alt="phone" className="w-7 h-7 min-w-[28px]" /><span className="text-xs font-medium break-all">+81 3-5678-1234</span></li>
              <li className="flex items-center gap-3"><img src={webIcon} alt="web" className="w-7 h-7 min-w-[28px]" /><span className="text-xs font-medium break-all">www.spiceandrice.jp</span></li>
              <li className="flex items-center gap-3"><img src={mailIcon} alt="mail" className="w-7 h-7 min-w-[28px]" /><span className="text-xs font-medium break-all">contact@spiceandrice.jp</span></li>
              <li className="flex items-center gap-3"><img src={locationIcon} alt="location" className="w-7 h-7 min-w-[28px]" /><span className="text-xs font-medium whitespace-nowrap">2-14-5 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan</span></li>
            </ul>
          </div>
        </div>
        {/* Bloc infos contact desktop */}
        <div className="w-full md:w-1/2 flex-col items-center justify-center pb-10 md:mb-8 hidden md:flex">
          <div className="w-full max-w-md px-2 pb-8 flex flex-col items-center gap-6">
            <h2 className="text-5xl font-bold font-sans mb-8 text-black text-left">Contact Us</h2>
            <ul className="flex flex-col gap-6 text-black text-lg w-full animate-fade-in-up">
              <li className="flex items-center gap-4"><img src={phoneIcon} alt="phone" className="w-10 h-10 min-w-[40px]" /><span className="text-lg md:text-xl font-semibold break-all">+81 3-5678-1234</span></li>
              <li className="flex items-center gap-4"><img src={webIcon} alt="web" className="w-10 h-10 min-w-[40px]" /><span className="text-lg md:text-xl font-semibold break-all">www.spiceandrice.jp</span></li>
              <li className="flex items-center gap-4"><img src={mailIcon} alt="mail" className="w-10 h-10 min-w-[40px]" /><span className="text-lg md:text-xl font-semibold break-all">contact@spiceandrice.jp</span></li>
              <li className="flex items-center gap-4"><img src={locationIcon} alt="location" className="w-10 h-10 min-w-[40px]" /><span className="text-lg md:text-xl font-semibold whitespace-nowrap">2-14-5 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan</span></li>
            </ul>
          </div>
        </div>
{/* Bande orange unique avec flèche centrée vers le haut */}
<div className="w-full absolute left-0 bottom-0 flex justify-center items-end  sm:h-32 bg-[#d9772b] z-10" style={{minHeight:'21px'}}>
  <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute" style={{top: '-28px', left: '65%', transform: 'translateX(-50%)'}}>
    <polygon points="30,0 60,32 0,32" fill="#d9772b" />
  </svg>
</div>     
 </section>




























        <section id="gallery" className="w-full bg-black py-4   flex flex-col items-center animate-fadein-up relative">
          {/* Overlay blanc mobile uniquement */}
          <h2 className="text-5xl font-bold text-white drop-shadow-lg   mt-3 md:mb-8 text-center" style={{ fontFamily: 'TheSeasonsSpringit', letterSpacing: 2 }}>Gallery</h2>
          <div className="w-full h-[50vh] md:h-[75vh] flex justify-center items-center ">
            <div className="relative h-80 w-full md:h-full">
              {(() => {
                // Images de la galerie
                const images = [s1, s2, s3, s4, s5, s6];
                const [index, setIndex] = React.useState(0);
                const [direction, setDirection] = React.useState(1); // 1: next, -1: prev
                const timeoutRef = React.useRef();
                React.useEffect(() => {
                  timeoutRef.current = setTimeout(() => {
                    setDirection(1);
                    setIndex((prev) => (prev + 1) % images.length);
                  }, 2200);
                  return () => clearTimeout(timeoutRef.current);
                }, [index]);
                const handleNext = () => {
                  setDirection(1);
                  setIndex((prev) => (prev + 1) % images.length);
                };
                const handlePrev = () => {
                  setDirection(-1);
                  setIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
                };
                // Animation glissement gauche-droite
                const variants = {
                  enter: (dir) => ({
                    x: dir > 0 ? 300 : -300,
                    opacity: 0
                  }),
                  center: {
                    x: 0,
                    opacity: 1
                  },
                  exit: (dir) => ({
                    x: dir > 0 ? -300 : 300,
                    opacity: 0
                  })
                };
                return (
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Flèches navigation: desktop only */}
                    <button
                      onClick={handlePrev}
                      aria-label="Précédent"
                      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 text-white w-12 h-12 items-center justify-center shadow-lg z-30 transition-all duration-200 hover:scale-110"
                      style={{backdropFilter:'blur(2px)'}}
                    >
                      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 24 9 14 18 4" /></svg>
                    </button>
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                        className="absolute w-full h-full"
                      >
                        <img
                          src={images[index]}
                          alt=""
                          className="w-full h-full object-cover "
                        />
                      </motion.div>
                    </AnimatePresence>
                    <button
                      onClick={handleNext}
                      aria-label="Suivant"
                      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 text-white w-12 h-12 items-center justify-center shadow-lg z-30 transition-all duration-200 hover:scale-110"
                      style={{backdropFilter:'blur(2px)'}}
                    >
                      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"  strokeLinejoin="round"><polyline points="10 4 19 14 10 24" /></svg>
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
  
     
     
      {/* Footer mobile uniquement : Titre, Opening Hours, Info, Copyright */}
      <footer className="w-full bg-black flex flex-col items-center h-auto p-0 md:hidden   gap-6">
        {/* Titre */}
        <span className="text-5xl font-serif text-[#d9772b] mt-4  text-center w-full" style={{fontFamily: 'cursive'}}>Spice &amp; Rice</span>
        {/* Bloc Opening Hours */}
        <div className="flex flex-row items-stretch w-full mb-4">
          {/* Bande orangée verticale à gauche */}
          <div className="flex items-center justify-center bg-gradient-to-b from-[#d9772b] to-[#b35e1e] w-8">
            <span className="text-xs font-bold text-black select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: 2 }}>Opening Hours</span>
          </div>
          {/* Contenu horaires */}
          <div className="flex flex-col items-start flex-1 pl-3 space-y-1 justify-between min-h-[120px] py-2">
            <span className="text-white text-s">Monday – Friday: 11:30 AM – 11:00 PM</span>
            <span className="text-white text-s">Saturday: 11:00 AM – 12:00 Midnight</span>
            <span className="text-white text-s">Sunday &amp; Holidays: 11:00 AM – 10:00 PM</span>
          </div>
        </div>
        {/* Bloc Info */}
        <div className="flex flex-col items-start w-full gap-3 mb-4">
          <div className="flex items-center gap-3 text-gray-300">
            <img src={phoneIcon} alt="phone" className="w-7 h-7 min-w-[28px]" />
            <span className="text-xs">+81 3-5678-1234</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <img src={webIcon} alt="web" className="w-7 h-7 min-w-[28px]" />
            <span className="text-xs">www.spiceandrice.jp</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <img src={mailIcon} alt="mail" className="w-7 h-7 min-w-[28px]" />
            <span className="text-xs">contact@spiceandrice.jp</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <img src={locationIcon} alt="location" className="w-7 h-7 min-w-[28px]" />
            <span className="text-xs whitespace-nowrap">2-14-5 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan</span>
          </div>
        </div>
        {/* Bloc Info */}
      </footer>

      {/* Footer desktop uniquement */}
      <footer className="w-full bg-black hidden md:flex flex-col items-center h-auto ">
        <div className="w-full flex flex-row justify-between items-stretch h-full">
          {/* Bloc 1 : rectangle orange vertical avec titre vertical */}
          <div className="flex flex-col items-center justify-center md:w-28 h-full bg-gradient-to-b from-[#d9772b] to-[#b35e1e] w-full">
            <span
              className="text-xl font-bold text-[#111] tracking-wider text-center font-[cursive] select-none leading-tight drop-shadow px-2 py-4"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Spice &amp; Rice
            </span>
          </div>
          {/* Regroupement des 3 blocs dans un seul div */}
          <div className="flex flex-row flex-1 h-full bg-black divide-x divide-[#232323] mt-6">
            {/* Bloc Opening Hours */}
            <div className="flex flex-col items-start justify-start flex-1 h-full bg-black pl-8">
              <span className="text-[#d9772b] text-lg font-bold mb-2">Opening Hours</span>
              <span className="text-white text-sm md:text-base">Monday – Friday: 11:30 AM – 11:00 PM</span>
              <span className="text-white text-sm md:text-base">Saturday: 11:00 AM – 12:00 Midnight</span>
              <span className="text-white text-sm md:text-base">Sunday &amp; Holidays: 11:00 AM – 10:00 PM</span>
            </div>
            {/* Bloc Navigation */}
            <div className="flex flex-row items-center justify-center flex-1 h-full bg-black gap-4 mt-2.5">
              {/* Colonne 1 : navigation principale */}
              <div className="flex flex-col items-center gap-2">
                <button onClick={() => scrollToSection('home')} className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">About Us</button>
                <button onClick={() => scrollToSection('most')} className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">Most Requested</button>
              </div>
              {/* Colonne 2 : liens secondaires */}
              <div className="flex flex-col items-center gap-2">
                <button onClick={() => scrollToSection('gallery')} className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">Gallery</button>             
                <button onClick={() => scrollToSection('contact')} className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">Contact Us</button>
                <button className="text-white text-sm py-0.5 rounded transition-colors text-left hover:text-[#d9772b]">Privacy Policy</button>
              </div>
            </div>
            {/* Bloc Info */}
            <div className="flex flex-col items-start justify-start flex-1 h-full bg-black gap-2 pl-4">
              <div className="flex items-center gap-3 text-gray-300">
                <img src={phoneIcon} alt="phone" className="w-6 h-6 min-w-[24px]" />
                <span className="text-sm md:text-base">+81 3-5678-1234</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <img src={webIcon} alt="web" className="w-6 h-6 min-w-[24px]" />
                <span className="text-sm md:text-base">www.spiceandrice.jp</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <img src={mailIcon} alt="mail" className="w-6 h-6 min-w-[24px]" />
                <span className="text-sm md:text-base">contact@spiceandrice.jp</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <img src={locationIcon} alt="location" className="w-6 h-6 min-w-[24px]" />
                <span className="text-sm md:text-xs whitespace-nowrap">2-14-5 Shibuya, Shibuya-ku, Tokyo 150-0002, Japan</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
              <div className="w-full bg-white flex flex-col md:flex-row justify-center items-center p-4">
          <span className="text-black text-xs md:text-sm text-center">© 2020 Spice &amp; Rice. All rights reserved.Crafted with <span className="text-[#d9772b]">❤</span> in Tokyo.</span>
        </div>

    </div>
  );
};

export default Homme;