import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Press() {
  return (
    <div>
      <HeadObject />
      <Nav />
      <main>
        <section className="bg-gradient-to-t from-purple-600 to-purple-100 dark:from-purple-900 dark:to-purple-500 -mx-6 md:-mx-14 lg:-mx-32 xl:-mx-52 pb-24 pt-48 -mt-36">
          <div>
            <h1 className="font-poppins font-bold text-gray-100 text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-2 text-shadow-lg text-center">
              Press
            </h1>
          </div>
        </section>
        <section>
          <div>hi</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
