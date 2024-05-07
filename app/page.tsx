import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Learn & Discuss <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Discussions</span>
      </h1>

      <p className="desc text-center">
        Discusstopia is an open-source artificial intelligence application that
        helps people in the modern world find, start, and share original
        conversations.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
