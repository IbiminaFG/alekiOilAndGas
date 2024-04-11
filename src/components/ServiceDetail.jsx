const ServiceDetail = ({ serviceData }) => {
  return (
    <section className="my-10">
      <div className="flex items-end gap-1 ">
        <h1 className="text-2xl font-light">Services</h1>
        <div className="h-1 w-64 bg-[#FF1400] rounded-md"></div>
      </div>
      <h2 className="uppercase text-4xl font-bold my-2">{serviceData.title}</h2>

      <div className="my-10 flex gap-10 items-center overflow-auto py-2">
        {serviceData.image?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={serviceData.title}
            className="w-80"
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {serviceData.details.map((text, index) => (
          <p key={index} className="text-justify">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetail;
