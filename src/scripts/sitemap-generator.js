// require("babel-register")({
//     presets: ["es2015", "react"]
//   });
// //   const router = require("./router");
//   const router = ["/", "/projets", "/contact"];
//   const Sitemap = require("react-router-sitemap").default;
//   function generateSitemap() {
//     return (
//       new Sitemap(router)
//           .build("https://www.example.com")
//           .save("./public/sitemap.xml")
//     );
//   }
//   generateSitemap();


const path = require("path");
const fs = require("fs");
const Sitemap = require('react-router-sitemap').default;
// const { Sitemap } = require('react-router-sitemap');

const paths = ["/", "/projets", "/contact"];


// const publicDir = path.join(__dirname, "../../public");

// if (!fs.existsSync(publicDir)) {
//   fs.mkdirSync(publicDir, { recursive: true });
// }


console.log(Sitemap);

new Sitemap({ path: "/", routes: paths })
  .build("https://app-test-nico-shop.vercel.app")
  .save(path.join(__dirname, "../../public/sitemap.xml"));