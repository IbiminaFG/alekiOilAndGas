import alekiLogo from "../assets/svgs/aleki-logo.svg";
import location from "../assets/svgs/location.svg";
import phone from "../assets/svgs/phone.svg";
import mail from "../assets/svgs/mail.svg";

const navigations = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "#footer" },
];

const Footer = () => {
  return (
    <div
      id="footer"
      className="bg-black p-5 lg:p-20 flex flex-wrap-reverse justify-between gap-10"
    >
      <div className="flex flex-col gap-5">
        <div className="font-bold text-2xl cursor-pointer gap-3 flex items-center font-[Poppins] text-gray-800">
          <img src={alekiLogo} alt="aleki logo" />
          <div>
            <p className="uppercase text-[16px] text-white font-semi-bold leading-none">
              Aleki
            </p>
            <p className="text-[15px] text-white uppercase leading-none">
              Oil and Gas Limited
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={location} alt="location icon" />
          <p className="max-w-[200px] text-sm text-white">
            No 1 Chief Christian Boms Avenue Abacha road GRA Phrase 2 Port
            Harcourt River State
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img src={phone} alt="phone icon" />
          <div className="flex flex-col gap-1 text-sm text-white">
            <p>+234 8033426500</p>
            <p>+234 8038873859</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={mail} alt="mail icon" />
          <div className="flex flex-col gap-1 text-sm text-white">
            <p>alekimarine@gmail.com</p>
            <p>info@alekioilandgaslimited.net</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-white text-xl mb-3">Useful Links</h2>
        <div className="flex flex-col gap-3">
          {navigations.map((navigation, index) => (
            <a key={index} href={navigation.link} className="text-white">
              {navigation.title}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-white text-xl mb-3">Our Newsletter</h2>
        <p className="text-white mb-2">
          Sign up to receive our weekly newsletter
        </p>
        <div className="flex h-10 rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full h-full p-2"
          />
          <button className="h-full w-32 flex justify-center items-center p-2 bg-[#FF1400] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
