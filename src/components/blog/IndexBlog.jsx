import Nav from "../nav/Nav";
import { MyArticlesContent } from "./index";
import { Footer } from "../common/index";

export default function IndexBlog() {
  return (
    <>
      <Nav />
      <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
        <MyArticlesContent />
        <Footer />
      </div>
    </>
  );
}
