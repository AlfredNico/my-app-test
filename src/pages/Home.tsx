import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio de Alfred Nico | Développeur Fullstack</title>
        <meta name="description" content="Découvrez mes projets en React, Angular, et Symfony..." />
        <meta name="keywords" content="React, TypeScript, Fullstack, Développeur, Portfolio" />
        <meta name="author" content="Alfred Nico" />
      </Helmet>
      <h1>Bienvenue sur mon Portfolio</h1>
    </>
  );
};

export default Home;
