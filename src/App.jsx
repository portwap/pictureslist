import { useEffect, useState } from 'react';
import Loading from './Loading';
import Pictures from './Pictures';
import RandomPicture from './RandomPicture';

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

function App() {
  const [picturesMode, setPicturesMode] = useState('list');

  const switchPicturesMode = () => {
    setPicturesMode((currentMode) => {
      if (currentMode === 'list') {
        return 'random';
      }
      if (currentMode === 'random') {
        return 'list';
      }
    });
  };

  return (
    <main>
      <button className='toggle-mode-btn' onClick={switchPicturesMode}>
        {picturesMode === 'random'
          ? 'to pictures list...'
          : 'to random picture...'}
      </button>
      {picturesMode === 'list' ? <Pictures /> : <RandomPicture />}
    </main>
  );
}

export default App;
