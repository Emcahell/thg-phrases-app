import { useState } from 'react';
import imagePin from './assets/monckingjay-pin.png';
import quotesData from './data.json';

interface QuoteType {
  phrase: string;
  author: string;
}

function App() {

  const [currentQuote, setCurrentQuote] = useState<QuoteType>(quotesData[0]);
  const [isVisible, setIsVisible] = useState(true);


  const changeQuote = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      // Filtramos para no repetir la misma cita consecutivamente
      const availableQuotes = quotesData.filter(q => q.phrase !== currentQuote.phrase);
      const randomIndex = Math.floor(Math.random() * availableQuotes.length);
      setCurrentQuote(availableQuotes[randomIndex]);
      setIsVisible(true);
    }, 300);
  };

  return (
    <>
      <section className="widget">
        <h1 translate='no'>The Hunger Games Vibes</h1>
        <div 
        className={`box-phrase ${isVisible ? 'fade-in' : 'fade-out'}`}
        onClick={changeQuote} //Me permite cambiar la frase al hacer clic en ella tambien
        >
        <p className="phrase" translate='no'>"{currentQuote.phrase}"</p>
        <p className="author" translate='no'>- {currentQuote.author}</p>
      </div>
        <button 
          onClick={changeQuote}>
          <img src={imagePin} alt="monckingjay pin" />
        </button>
      </section>

      <div className='yo'>
        <p>Coded by Emcahell</p>
        <a href="https://instagram.com/kromwellykz" target="_blank" rel="noopener noreferrer">
          <svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />  <path d="M16.5 7.5l0 .01" /></svg>
        </a>
        <a href="https://github.com/emcahell" target="_blank" rel="noopener noreferrer">
          <svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </a>
      </div>
    </>
  )
}

export default App
