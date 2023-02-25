import Picture from './Picture';

const Pictures = ({ pictures }) => {
  return (
    <section>
      <div className='title'>
        <h2>pictures</h2>
        <div className='underline'></div>
      </div>
      <div className='pictures-container'>
        {pictures.map((picture) => {
          return <Picture key={picture.id} {...picture} />;
        })}
      </div>
    </section>
  );
};

export default Pictures;
