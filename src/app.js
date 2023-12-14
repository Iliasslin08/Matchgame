/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './app.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [cardRandom, setCardRandom] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  
    const cardImg = [
      { "src": "https://img.freepik.com/vecteurs-premium/dessin-anime-chat-mignon_70172-661.jpg?w=360", },
      { "src": "https://img.freepik.com/vecteurs-libre/illustration-vectorielle-coq_1441-9.jpg?w=740&t=st=1701560547~exp=1701561147~hmac=038a2464213e357c899f0bf41ee09c738d7ae736e2fb5ffb2ae1d23a0d019f7f", },
      { "src": "https://img.freepik.com/vecteurs-premium/dessin-anime-mignon-tortue-mangeant-biscuits_70172-2838.jpg", },
      { "src": "https://img.freepik.com/vecteurs-premium/dessin-anime-mignon-bebe-dinosaure-fond-blanc_70172-1824.jpg", },
      { "src": "https://img.freepik.com/vecteurs-libre/vache-souriant-illustration-vectorielle-dessin-anime_96037-417.jpg?w=1060&t=st=1701560157~exp=1701560757~hmac=a037e0e5722190bba799d8a1102b576ea83245b1cc9fc2cc005c9ffaf2f88c8c", },
      { "src": "https://img.freepik.com/vecteurs-libre/mignon-pug-dog-bite-bone-cartoon-vector-icon-illustration-concept-icone-nature-animale-isole-premium_138676-7370.jpg?w=740&t=st=1701560201~exp=1701560801~hmac=0d0e2101dd98981e4e97e6059046f6f2a1209a72830aab419767c256d48d6d0d", },
    ];
  const random = () => {
    const shuffleCard = [cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false}));
    setCardRandom(shuffleCard);
    setTurns(0);

    setTimeout(() => {
      setCardRandom((prevCards) => prevCards.map((card) => ({ ...card, flipped: false })));
    }, 5000);
  };
 const handleChoice = (card) => {
    setCardRandom((prevCards) =>
      prevCards.map((s) => (s.id === card.id ? { ...s, flipped: true } : s))
    );
    if (choice1 && choice2) {
      return;
    }
    if (!choice1) {
      setChoice1(card);
    } else {
      setChoice2(card);
  
      if (choice1.src === card.src && choice1.id !== card.id) {
  
        setCardRandom((prevCards) =>
          prevCards.map((c) =>
            c.id === choice1.id || c.id === card.id ? { ...c, matched: true, flipped: true } : c
          )
        );
        setTimeout(() => {
          resetChoices();
        }, 1000);
      } else {
        setCardRandom((prevCards) =>
          prevCards.map((c) =>
            c.id === choice1.id || c.id === card.id ? { ...c, flipped: true } : c
          )
        );
        setTimeout(() => {
          resetChoices();
        }, 1000);
      }
    }
    console.log(cardRandom)
  };

  const resetChoices = () => {
    setChoice1(null);
    setChoice2(null);
    setCardRandom((prevCards) =>
      prevCards.map((c) => (c.flipped && !c.matched ? { ...c, flipped: false } : c))
    );
    setTurns(turns + 1);
  };
  
  return (
    <div className='App'>
      <h2 className=''>Match game:</h2>
      <p>{turns}</p>
      <button onClick={random}>New game </button>

      <div className='card-grid'>
        {cardRandom.map((card) => (
          <div
            key={card.id}
            className={`card ${card.matched ? 'flipped' : ''}`}
            onClick={() => handleChoice(card)}
          >
            <div className={`flip-container ${card.flipped ? 'flipped' : ''}`}>
              <div className='flipper'>
                <img className='front' src={card.src} alt='card' />
                <img
                  className={`backimg ${card.flipped ? 'flipped' : ''}`}
                  width={90}
                  src='https://img.freepik.com/vecteurs-libre/style-bande-dessinee-paysage-ferme-coloree_52683-16687.jpg?w=740&t=st=1701560368~exp=1701560968~hmac=6baf0edb92ea2096abc686d82903caa6a4afc3218294bf7a02f227ce26ed522e'
                  alt='cover'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    <section>
              <a href="https://github.com/Iliasslin08" target={'_blank'}><img width="35" height="35" src="https://img.icons8.com/ios-filled/ffffff/500/github.png" alt="github"/></a>
                <a href="https://instagram.com/iliass_lin?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr " target={'_blank'}><img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="linkedin"/></a>
                <a href="https://web.facebook.com/iliass.linbouu" target={'_blank'}><img width="35" height="35" src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="twitterx--v2"/></a>
  </section> 
    </div>
  );
}

export default App;
