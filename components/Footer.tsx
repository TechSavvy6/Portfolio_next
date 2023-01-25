import Link from "next/link";
import { navs } from "./Navigation";

const Footer = () => {
  return (
    <div className="bg-[rgb(23,26,35)] text-sm overflow-hidden text-gray-500 px-20 md:flex-row items-center md:gap-0 gap-6 flex-col flex justify-between w-full py-12 ">
      <div className="upppercase font-bold">
        COPYRIGHT &copy; 2022 ALL RIGHTS RESERVED
      </div>
      <div className="flex gap-8">
        {navs.map((nav, index) => (
          <Link
            href={
              index !== 0
                ? nav === "Works"
                  ? "/works"
                  : (nav !== "Contact" ? "/" : "") + "#" + nav.toLowerCase()
                : "/"
            }
            key={index}
            className={`uppercase font-bold ${
              index === 3
                ? " opacity-50 cursor-not-allowed relative"
                : "cursor-pointer"
            }`}
          >
            <span> {nav}</span>
            {index === 3 && (
              <div className="absolute text-xs text-[white] top-[-1.5rem] -right-6  px-2 py-1 p-1  rounded-tl-md rounded-br-md bg-[rgb(55,91,254)]">
                SOON
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
