import { useEffect, useState } from 'react';
import Loading from './Loading';
import Pictures from './Pictures';

/*
To do
- может сделать кнопку удаления сбоку и картинкой?
- поправить названия в css файле
- при нажатии на картинку простое модальное окно с доп инфой и чуть увеличеной картинкой, 
также там какую кнопку для развертывания доп инфы
- подумать над идеей, загрузка рандомных изображений, потом после удаления, соответственно, 
при рефреше загрузка других рандомных изображений

! Важно. Добавлен к git. При изменения git commit -m 'text', потом git push просто. Плюс доавлено к netlify continuous deploiment, 
т.е. всё автоматом будет праться с актуальной версии гит.
*/

const url = 'https://picsum.photos/v2/list?limit=9&page=3';

function App() {
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
    <main>
      <Pictures pictures={pictures} removePicture={removePicture} />
    </main>
  );
}

export default App;
