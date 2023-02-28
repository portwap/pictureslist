import { useEffect, useState } from 'react';
import Loading from './Loading';
import Picture from './Picture';

const url = 'https://picsum.photos/v2/list?limit=9&page=3';

const Pictures = () => {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState([]);

  const removePicture = (id) => {
    const newPictureList = pictures.filter((picture) => picture.id !== id);
    setPictures(newPictureList);
  };

  const fetchPictures = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const pictures = await response.json();
      setPictures(pictures);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (pictures.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no pictures left</h2>
          <div className='underline'></div>
          <button className='btn' onClick={() => fetchPictures()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <section>
      <div className='title'>
        <h2>pictures list</h2>
        <div className='underline'></div>
      </div>
      <div className='pictures-container'>
        {pictures.map((picture) => {
          return (
            <Picture
              key={picture.id}
              {...picture}
              removePicture={removePicture}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pictures;
