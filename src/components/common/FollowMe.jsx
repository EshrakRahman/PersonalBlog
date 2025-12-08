import xIcon from "../../assets/images/logo-x.svg";
import gitHubIcon from "../../assets/images/logo-github.svg";
import linkedInIcon from "../../assets/images/logo-linkedin.svg";
import fmIcon from "../../assets/images/logo-frontend-mentor.svg";

export default function FollowMe({ title }) {
  return (
    <>
      <div className=" pb-5">
        <p className="mb-3 tp-4 text-neutral-700">{title}</p>
        <div className="icons flex gap-4">
          <button className="x w-10 h-10 bg-neutral-0 border border-neutral-200 flex items-center justify-center rounded-lg">
            <img src={xIcon} alt="X icon" />
          </button>
          <button className="gitbub w-10 h-10 bg-neutral-0 border border-neutral-200 flex items-center justify-center rounded-lg">
            <img src={gitHubIcon} alt="github icon" />
          </button>
          <button className="linkedIn w-10 h-10 bg-neutral-0 border border-neutral-200 flex items-center justify-center rounded-lg">
            <img src={linkedInIcon} alt="linkedin icon" />
          </button>
          <button className="fm w-10 h-10 bg-neutral-0 border border-neutral-200 flex items-center justify-center rounded-lg">
            <img src={fmIcon} alt="Frontend mentor icon" />
          </button>
        </div>
      </div>
    </>
  );
}
