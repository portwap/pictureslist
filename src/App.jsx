import { useEffect, useState } from 'react';
import Loading from './Loading';
import Pictures from './Pictures';

/*
To do
- поправить названия в css файле
- кнопка удаления картники
- при пустом спике рефреш
- при нажатии на картинку простое модальное окно с доп инфой и чуть увеличеной картинкой, 
также там какую кнопку для развертывания доп инфы
- внизу инфа о правах и т.д.

! Важно. Добавлен к git. При изменения git commit -m 'text', потом git push просто. Плюс доавлено к netlify continuous deploiment, 
т.е. всё автоматом будет праться с актуальной версии гит.
*/

const url = 'https://picsum.photos/v2/list?limit=9&page=3';

function App() {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState([]);

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

  return (
    <main>
      <Pictures pictures={pictures} />
    </main>
  );
}

export default App;
