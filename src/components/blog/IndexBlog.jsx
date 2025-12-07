import Footer from "../common/Footer";
import Header from "../home/Header";
import Nav from "../nav/Nav";
import MyArticles from "./MyArticles";

export default function IndexBlog() {
  return (
    <>
      <Nav />
      <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
        <MyArticles />
        <Footer />
      </div>
    </>
  );
}
