export const Movie = ({ title, img, overview }) => {
  const imgUrl = new URL(`https://image.tmdb.org/t/p/w500/${img}`);

  return (
    <div>
      <div>{title}</div>
      <img src={imgUrl} />
      <div>{overview}</div>
    </div>
  );
};
