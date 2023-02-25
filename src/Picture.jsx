const Picture = ({ id, author }) => {
  console.log(author, id);
  const image = `https://picsum.photos/id/${id}/300/200`;
  return (
    <article className='single-tour'>
      <img src={image} alt={author} />
      <footer>
        <div className="tour-info">
          <h4>Author: {author}</h4>

        </div>
      </footer>
    </article>
  );
};

export default Picture;
