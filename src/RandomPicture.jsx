import { useEffect, useState } from 'react';

const RandomPicture = () => {
  const [randomIndex, setRandomIndex] = useState(0);

  const getNewRandomImage = () => {
    let randomNumber = Math.floor(Math.random() * 1000); // work with 1000 pictures only
    if (randomNumber === randomIndex) {
      randomNumber = randomIndex + 1;
    }
    setRandomIndex(randomNumber);
  };

  return (
    <section>
      <div className='title'>
        <h2>random picture</h2>
        <div className='underline'></div>
      </div>
      <div className='pictures-container'>
        <article className='single-tour'>
          <img src={`https://picsum.photos/300/200?random=${randomIndex}`} />
          <footer>
            <button className='random-btn' onClick={getNewRandomImage}>
              surprise me
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default RandomPicture;
