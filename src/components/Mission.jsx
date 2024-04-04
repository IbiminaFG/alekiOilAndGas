const Mission = () => {
  return (
    <section id="mission" className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-10">
        <div className="lg:w-[500px] rounded-3xl mission_card p-10">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="lg:text-2xl">
              To be recognized as a company and partner of choice in the
              Nigerian oil and Gas industry for delivering on our promises,
              pioneering new opportunities and approaches and bringing value to
              our industry, shareholders and community.
            </p>
          </div>
        </div>

        <div className="lg:w-[500px] rounded-3xl mission_card p-10">
          <div className="text-white">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="lg:text-2xl">
              Our mission is to a make long-term difference in our industry and
              earn the trust of our partners and shareholders and to perform all
              projects to the complete satisfaction of our customers in term of
              timing and cost. At the same time, we perform our work to the
              expectation of our clients with respect to health and safety and
              security requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
