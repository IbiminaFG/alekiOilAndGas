import ceo from "../assets/images/ceo.jpg";
import md from "../assets/images/md.jpg";

const staffs = [
  {
    image: ceo,
    role: "MANAGING DIRECTOR/CEO",
    name: "AMININIM BATUBO",
  },
  {
    image: md,
    role: "GENERAL MANAGER",
    name: "OKOMBA BATUBO",
  },
];

const Staff = () => {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {staffs.map((staff, index) => (
          <div key={index}>
            <img src={staff.image} alt={staff.role} />
            <div className="flex flex-col justify-center text-center">
              <p className="font-semibold">{staff.name}</p>
              <p>{staff.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
