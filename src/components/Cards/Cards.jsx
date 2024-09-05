const Cards = ({ name, id, img, types }) => {
  return (
    <div
      className="bg-blue-500 shadow-lg shadow-black w-72 h-80 rounded-2xl 
        flex flex-col items-center relative overflow-hidden duration-200
        hover:cursor-pointer hover:-rotate-6 hover:-translate-y-10"
    >
      <p className="absolute top-2 left-4 text-2xl text-white">#{id}</p>
      <p className="bg-red-500 py-2 w-2/4 absolute top-0 right-0 text-center text-white text-xl">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>
      <div className="bg-yellow-300 w-44 h-44 rounded-full absolute top-20">
        <img className="absolute z-1" src={img} alt={`Image of ${name}`}></img>
      </div>
      {types && types.length > 0 && (
        <p className="bg-white absolute rounded-md bottom-2 px-6 py-1">
          {types}
        </p>
      )}
    </div>
  );
};

export default Cards;
