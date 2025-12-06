import Divider from "../common/Divider";
import FollowMe from "../common/FollowMe";

export default function Header() {
  return (
    <>
      <div className="mb-4">
        <h1 className="relative tp-2 text-neutral-700 pt-8 pb-6">
          <span className="relative z-10">Hi, I’m Paulina 👋</span>
          <span className="absolute z-0 left-0 bottom-[25%] w-[65%] md:w-[30%] h-3 bg-blue-500"></span>
        </h1>
        <article className="pb-6 flex flex-col gap-5">
          <p className="tp-7 text-neutral-600">
            I’m on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I’m not at my desk, you’ll
            find me reading, hiking through the mountains, or challenging myself
            on rock-climbing walls.
          </p>
          <p className="tp-7 textnut600">
            I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who’s learning to
            code. Welcome to my corner of the internet, and thanks for stopping
            by!
          </p>
        </article>
        <FollowMe title="" />
      </div>
      <Divider />
    </>
  );
}
