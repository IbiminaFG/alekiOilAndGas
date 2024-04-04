const ServiceDetail = ({ serviceData }) => {
  return (
    <section className="my-10">
      <div className="flex items-end gap-1 ">
        <h1 className="text-2xl font-light">Services</h1>
        <div className="h-1 w-64 bg-primary-blue rounded-md"></div>
      </div>
      <h2 className="uppercase text-4xl font-bold my-2">{serviceData.title}</h2>

      <div className="my-10">
        <img src={serviceData.image} alt={serviceData.title} />
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
