const ServiceCard = ({ item }) => {
  return (
    <div className="bg-[#FAFAFA] rounded-lg p-5 flex items-center gap-4 w-[400px] shadow-lg">
      <img src={item.icon} alt="icon of service" />
      <p className="font-medium">{item.text}</p>
    </div>
  );
};

export default ServiceCard;
