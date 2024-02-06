"use client";
import { useState } from "react";
import Confetti from 'react-dom-confetti';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [mainImage, setMainImage] = useState("https://media.tenor.com/e71bz32B3AcAAAAi/cute-cats.gif")
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isConfettiActive, setConfettiActive] = useState(false);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const yesButtonSize = noCount * 20 + 16;

  const getRandomPosition = () => {
    const maxX = 500;
    const maxY = 300;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    return { x: randomX, y: randomY };
  };

  const handleButtonClick = () => {
    const newPosition = getRandomPosition();
    setPosition(newPosition);
    const newMainImage = getMainImage();
    setMainImage(newMainImage);
  };

  const handleNoClick = () => {
    handleButtonClick();
    setNoCount(noCount + 1);
  };

  const getMainImage = () => {
    const noStickers = [
      "https://media.tenor.com/GgWFywURt9MAAAAi/peachcat-cat.gif",
      "https://media1.tenor.com/m/D7B36l-_4i0AAAAd/cry-teary-eyed.gif",
      "https://media.tenor.com/Guhifn6ZDZUAAAAi/pepe-pepe-the-frog.gif",
      "https://media1.tenor.com/m/_wJxx_g651MAAAAd/sad-cat-cat-sad.gif",
      "https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif",
      "https://media1.tenor.com/m/BYZf0mMHcY4AAAAC/%E7%9A%849.gif",
      "https://media1.tenor.com/m/pFz1Q12_hXEAAAAd/cat-holding-head-cat.gif",
      "https://media1.tenor.com/m/CzO6SIM4IvQAAAAd/grogu-sad.gif",
      "https://media1.tenor.com/m/PnDwB6OVv2QAAAAC/ghost-cod.gif",
      "https://media1.tenor.com/m/rl06hkp0hlsAAAAC/barun-i-am-fine.gif",
      "https://media1.tenor.com/m/e-XR_5iBO94AAAAC/i%27m-not-okay-crying.gif",
      "https://media1.tenor.com/m/kjqof9l6gk8AAAAC/pikachu-sad.gif",
      "https://media1.tenor.com/m/G9qmH_P1nbsAAAAd/angry-angry-cat.gif",
      "https://media1.tenor.com/m/jLSQskeoWMMAAAAC/wtf-confused.gif",
      "https://media1.tenor.com/m/P8OYV56HSRAAAAAd/cry-sad.gif"
      
    ]

    return noStickers[Math.min(noCount, noStickers.length - 1)];
  }

  const handleYesButtonClick = () => {

    setConfettiActive(true);

    setTimeout(() => {
      setConfettiActive(false);
    }, 7000);
    setYesPressed(true)
  }
  

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Bhaisabbbbbbb, sach mei?",
      "Gazab bezati hai, sochlo",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Who even are you?",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart :'(",
    ];

    

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      <Confetti active={isConfettiActive} config={confettiConfig} />
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok yay!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src={mainImage}/>
          <h1 className="text-4xl my-4">Will you be my Valentine?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4 animate-bounce`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesButtonClick}
            >
              Yes
            </button>
            
            <button
              onClick={handleNoClick}
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:translate-y-12 transition ease-in-out delay-150"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}