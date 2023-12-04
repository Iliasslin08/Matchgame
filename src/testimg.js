/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

const PhotoSwitcher = () => {
 const [showFirstPhoto, setShowFirstPhoto] = useState(true);

 const switchPhoto = () => {
    setShowFirstPhoto(!showFirstPhoto);
 };

 return (
    <div>
      <h1>Photo Switcher</h1>
      <button onClick={switchPhoto}>Switch Photo</button>
      <img
        src= {showFirstPhoto ? 'https://img.freepik.com/vecteurs-premium/dessin-anime-chat-mignon_70172-661.jpg?w=360' : 'https://img.freepik.com/vecteurs-libre/style-bande-dessinee-paysage-ferme-coloree_52683-16687.jpg?w=740&t=st=1701560368~exp=1701560968~hmac=6baf0edb92ea2096abc686d82903caa6a4afc3218294bf7a02f227ce26ed522e'}
        alt="Switchable Photo"
        onClick={switchPhoto}
      />
    </div>
 );
};

export default PhotoSwitcher;