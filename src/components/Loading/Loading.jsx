const Loading = () => {
  return (
    <div className="flex items-center gap-5 max-lg:gap-2">
      <div className="border-4 border-customWhite border-solid border-t-white rounded-full w-10 h-10 animate-spin"></div>
      <p>Cargando...</p>
    </div>
  );
};
export default Loading;
