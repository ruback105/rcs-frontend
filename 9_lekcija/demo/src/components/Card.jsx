function Card({ name, description, src }) {
  return (
    <div className="border-2 rounded-md border-black p-4 w-[200px] h-[200px]">
      <img src={src} alt="" />
      <h1 className="font-bold text-blue-800 text-lg">{name}</h1>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default Card;
