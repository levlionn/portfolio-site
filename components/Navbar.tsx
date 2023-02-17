import dynamic from "next/dynamic";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const FlyOutMenu = dynamic(() => import("../components/FlyOutMenu"), {
  ssr: false,
});

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50  bg-goldCrayola shadow-lg text-white p-5 max-w-6xl rounded-b-lg mx-auto">
      <div className="flex items-start justify-between tablet:section-x-outer-margin-width">
        <div className="flex flex-row items-center space-x-1 cursor-pointer outline-none">
          <Link href="/" className="mr-2 font-black outline-none">
            levm
          </Link>
          <div className="invisible tablet:visible outline-none">
            <SocialIcon
              url="https://linkedin.com/in/levmarkelov"
              network="linkedin"
              label="Lev Markelov Linkedin Profile"
              fgColor="white"
              bgColor="transparent"
              target="_blank"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="https://github.com/levlionn"
              network="github"
              label="Lev Markelov Github Profile"
              fgColor="white"
              bgColor="transparent"
              target="_blank"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="https://youtube.com/levmarkelov"
              network="youtube"
              label="Lev Markelov YouTube Profile"
              fgColor="white"
              bgColor="transparent"
              target="_blank"
              style={{ height: 25, width: 25 }}
            />
          </div>
        </div>
        {/* Pages */}
        <div className="flex flex-row items-center space-x-2 cursor-pointer">
          <Link href="/portfolio" className="text-sm uppercase">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm uppercase">
            About
          </Link>
          <Link href="#" className="text-sm uppercase">
            Blog
          </Link>
          <div className="flex flex-row items-center text-bold">
            <Link href="/contact">
              <SocialIcon
                network="email"
                fgColor="white"
                bgColor="transparent"
                target="_blank"
                className="cursor-pointer"
                style={{ height: 25, width: 25 }}
              />

              <span className="hidden tablet:inline-flex text-xs uppercase">
                Lets Connect
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
