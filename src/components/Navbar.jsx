import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}Ahmed-Khalil-Software-Engineer-Resume.pdf`;
    window.open(resumeUrl);
  };

  const toggleGitHub = () => {
    const githubUrl = "https://github.com/DevAhmedKhalil";
    window.open(githubUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive("");
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul
      className={`list-none ${
        isSecondary ? "flex sm:hidden" : "hidden sm:flex"
      } flex-row sm:flex-row gap-4`}
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title
              ? "text-white"
              : isSecondary
                ? "text-secondary"
                : "text-white"
          } hover:text-white ${
            isSecondary ? "text-sm" : "text-[20px]"
          } font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`${
          isSecondary ? "text-secondary text-sm" : "text-white text-[20px]"
        } hover:text-white font-medium cursor-pointer`}
      >
        <button onClick={toggleGitHub}>GitHub</button>
      </li>
      <li
        className={`${
          isSecondary ? "text-secondary text-sm" : "text-white text-[20px]"
        } hover:text-white font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}logo.svg`}
              alt="AK logo"
              className="w-9 h-9"
            />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              Ahmed&nbsp;
              <span className="sm:block hidden">Khalil</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              type="button"
              aria-label={toggle ? "Close menu" : "Open menu"}
              className="text-white text-[28px]"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <HiX /> : <HiMenuAlt3 />}
            </button>
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
                toggle ? "flex text-small" : "hidden"
              }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
