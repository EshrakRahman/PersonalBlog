import xIcon from "../../assets/images/logo-x.svg";
import gitHubIcon from "../../assets/images/logo-github.svg";
import linkedInIcon from "../../assets/images/logo-linkedin.svg";
import fmIcon from "../../assets/images/logo-frontend-mentor.svg";

export default function Footer() {
  return (
    <>
      <footer className=" mt-8 pb-4 flex  justify-between items-center">
        <div className="left">
          <p className="tp-8 text-neutral-600">Made with ❤️ and ☕️</p>
        </div>
        <div className="icons flex gap-4">
          <button className="x  flex items-center justify-center">
            <img src={xIcon} alt="X icon" />
          </button>
          <button className="gitbub  flex items-center justify-center">
            <img src={gitHubIcon} alt="github icon" />
          </button>
          <button className="linkedIn  flex items-center justify-center">
            <img src={linkedInIcon} alt="linkedin icon" />
          </button>
          <button className="fm  flex items-center justify-center">
            <img src={fmIcon} alt="Frontend mentor icon" />
          </button>
        </div>
      </footer>
    </>
  );
}
