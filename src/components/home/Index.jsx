import Footer from "../common/Footer";
import Nav from "../nav/Nav";
import Header from "./Header";
import LatestArticle from "./LatestArticle";

export default function Index() {
  return (
    <>
      <Nav />
      <div className="border-l border-r border-neutral-200 px-3 bg-neutral-0 ">
        <Header />
        <LatestArticle />
        <Footer />
      </div>
    </>
  );
}
