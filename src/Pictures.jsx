import Picture from './Picture';

const Pictures = ({ pictures, removePicture }) => {
  return (
    <section>
      <div className='title'>
        <h2>pictures list</h2>
        <div className='underline'></div>
      </div>
      <div className='pictures-container'>
        {pictures.map((picture) => {
          return <Picture key={picture.id} {...picture} removePicture={removePicture} />;
        })}
      </div>
    </section>
  );
};

export default Pictures;
