import { Nav } from "../components/nav/index";
import { Footer } from "../components/common";
import { SingleBlogPost } from "../components/blog";

export default function BlogPost() {
  return (
    <>
      <Nav />
      <div className="mx-5 lg:max-w-[780px] lg:mx-auto max-w-full">
        <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
          <SingleBlogPost />
          <Footer />
        </div>
      </div>
    </>
  );
}
