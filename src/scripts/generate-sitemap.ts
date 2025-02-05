import path from "path";
import fs from "fs";
import Sitemap from 'react-router-sitemap';

const paths = ["/", "/projets", "/contact"];

new Sitemap({ path: "/", routes: paths })
  .build("https://my-app-test.vercel.app")
  .save(path.join(__dirname, "../public/sitemap.xml"));
