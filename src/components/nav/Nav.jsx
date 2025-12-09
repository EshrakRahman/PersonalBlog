import logo from "../../assets/images/image-avatar.jpg";
import menuIcon from "../../assets/images/icon-menu.svg";
import menuIconClose from "../../assets/images/icon-menu-close.svg";
import moonIcon from "../../assets/images/icon-moon.svg";
import { useState } from "react";
import { Link } from "react-router";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuList = ["Home", "Blog", "About", "Newsletter"];

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <>
      <header className="bg-neutral-0 rounded-lg shadow lg:max-w-[780px] lg:mx-auto lg:mt-5 max-w-full">
        <nav className="p-5 relative flex justify-between items-center shadow ">
          <div className="">
            <img
              className="rounded-sm max-w-5 md:max-w-8 md:w-full"
              src={logo}
              alt="Avatar"
            />
          </div>
          <div className="hidden md:flex justify-end gap-6 items-center ">
            <nav>
              <ul>
                <li className="flex gap-5">
                  <Link className="tp-8  text-neutral-700  " to="/">
                    Home
                  </Link>

                  <Link className="tp-8  text-neutral-700  " to="/blog">
                    Blog
                  </Link>

                  <Link className="tp-8  text-neutral-700  " to="/about">
                    About
                  </Link>

                  <Link className="tp-8  text-neutral-700 " to="/newsletter">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="shadow bg-neutral-100 border  rounded-sm">
              <button className="w-8 p-1">
                <img className="w-full" src={moonIcon} alt="moon icon" />
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="mobile flex gap-4 items-center ">
              <div
                className={
                  mobileMenu
                    ? "bg-neutral-700    rounded-lg flex items-center justify-center p-1 w-full"
                    : " rounded-lg flex items-center justify-center p-1 w-full"
                }
              >
                {mobileMenu ? (
                  <button
                    onClick={handleMobileMenu}
                    className={mobileMenu && "bg-neutral-700 w-full"}
                    href=""
                  >
                    <img className="" src={menuIconClose} alt="menu icon" />
                  </button>
                ) : (
                  <button onClick={handleMobileMenu} className="" href="">
                    <img className="w-full" src={menuIcon} alt="menu icon" />
                  </button>
                )}
              </div>

              <div className="bg-neutral-100 border rounded-sm">
                <button className="w-8 p-1">
                  <img className="w-[17px]" src={moonIcon} alt="moon icon" />
                </button>
              </div>
            </div>
            {mobileMenu && (
              <div className=" absolute left-[10%] top-[120%] rounded-lg p-4 bg-neutral-0 shadow-xl w-full max-w-[347px]">
                <ul>
                  <li className="flex flex-col">
                    <Link
                      className="tp-7 pt-2 text-neutral-900 border-b border-neutral-200 pb-4"
                      to="/"
                    >
                      Home
                    </Link>

                    <Link
                      className="tp-7 pt-2 text-neutral-900 border-b border-neutral-200 pb-4"
                      to="/blog"
                    >
                      Blog
                    </Link>

                    <Link
                      className="tp-7 pt-2 text-neutral-900 border-b border-neutral-200 pb-4"
                      to="/about"
                    >
                      About
                    </Link>

                    <Link
                      className="tp-7 pt-2 text-neutral-900 pb-4"
                      to="/newsletter"
                    >
                      Newsletter
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
