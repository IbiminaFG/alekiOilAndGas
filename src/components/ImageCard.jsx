const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt="" className="w-full" />
    </div>
  );
};

export default ImageCard;
