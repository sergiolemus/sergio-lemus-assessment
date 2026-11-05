export const Movie = ({ title, img, overview }) => {
  const imgUrl = new URL(`https://image.tmdb.org/t/p/w500/${img}`);

  return (
    <div className="relative">
      <img src={imgUrl} className="w-full h-auto block" />
      <div className="absolute inset-0 p-4 bg-black/60 text-white">
        <div className="font-bold mb-2">{title}</div>
        <div className="text-sm">{overview}</div>
      </div>
    </div>
  );
};
