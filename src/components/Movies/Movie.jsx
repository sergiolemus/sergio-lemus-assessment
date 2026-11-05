export const Movie = ({ title, img, overview }) => {
  const imgUrl = new URL(`https://image.tmdb.org/t/p/w500/${img}`);

  return (
    <div className="relative group">
      <img src={imgUrl} className="w-full h-auto block" />
      <div className="absolute inset-0 p-4 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="font-bold mb-2">{title}</div>
        <div className="text-sm line-clamp-8">{overview}</div>
      </div>
    </div>
  );
};
