import { Nav } from "../components/nav/index";
import { AboutPageContent } from "../components/about/index";
import { Footer } from "../components/common";

export default function About() {
  return (
    <>
      <Nav />
      <div className="mx-5 lg:max-w-[780px] lg:mx-auto max-w-full">
        <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
          <AboutPageContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
