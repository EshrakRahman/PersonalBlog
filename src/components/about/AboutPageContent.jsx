import aboutImgSmall from "../../assets/images/image-workspace-small.jpg";
import aboutImgLarge from "../../assets/images/image-workspace-large.jpg";
import { FollowMe } from "../common";

export default function AboutPageContent() {
  return (
    <>
      <div className="pt-5">
        <h1 className="tp-2 text-neutral-700">
          <span className="underline-bg">
            <span className="ub-text">About</span>
          </span>
        </h1>
        <div className="bio-text flex flex-col gap-5 py-5 tp-7 text-neutral-600">
          <p className="first">
            Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
            creativity and problem-solving. That’s what led me to the world of
            front-end web development. There’s something magical about seeing an
            idea come to life in the browser—whether it’s a simple layout
            experiment or a complex interface for a bigger project.
          </p>
          <p className="second">
            When I’m not coding, I love getting lost in a good book. My taste is
            pretty eclectic: I’ll happily read everything from fantasy novels to
            biographies of tech pioneers. Reading helps me unwind and often
            sparks new ideas for my coding projects.
          </p>
          <p className="third">
            Another big passion of mine is the great outdoors. Hiking allows me
            to disconnect from the digital world and reconnect with nature. I
            love challenging hikes with rewarding views at the top. And if I’m
            not on the trails, you might catch me rock climbing. The combination
            of mental focus and physical endurance is a perfect parallel to
            tackling tough coding challenges!
          </p>
          <p className="books-recom">
            <p className="pb-5">Some of my favorite books:</p>
            <ul className=" list-disc ml-3">
              <li>
                <span className="tp-7-semibold text-neutral-600 mr-1">
                  “The Pragmatic Programmer”
                </span>
                by Andrew Hunt and David Thomas (for helpful insights into
                software development)
              </li>
              <li>
                <span className="tp-7-semibold text-neutral-600 mr-1">
                  “Ready Player One”
                </span>
                by Ernest Cline (for some futuristic escapism)
              </li>
              <li>
                <span className="tp-7-semibold text-neutral-600 mr-1">
                  “The Hobbit”
                </span>
                by J.R.R. Tolkien (for a bit of fantasy fun)
              </li>
              <li>
                <span className="tp-7-semibold text-neutral-600 mr-1">
                  “Educated”
                </span>
                by Tara Westover (for incredible inspiration)
              </li>
            </ul>
          </p>
          <p className="last">
            I absolutely love my workspace as a place that inspires me to do my
            best work, so I thought I’d share it with you:
          </p>
          <div className="img">
            <img
              className="md:hidden rounded-lg"
              src={aboutImgSmall}
              alt="workpace table"
            />
            <img
              className="hidden md:block rounded-lg"
              src={aboutImgLarge}
              alt="workpace table"
            />
          </div>
          <p>
            I hope this blog not only documents my growth but also helps others
            see that coding can be for everyone. Thanks for joining me on this
            journey!
          </p>
        </div>
        <FollowMe title="Follow Me" />
      </div>
    </>
  );
}
