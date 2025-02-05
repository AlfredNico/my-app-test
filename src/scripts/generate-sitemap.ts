import path from "path";
import fs from "fs";
import Sitemap from 'react-router-sitemap';

const paths = ["/", "/projets", "/contact"];

new Sitemap({ path: "/", routes: paths })
  .build("https://app-test-nico-shop.vercel.app")
  .save(path.join(__dirname, "../public/sitemap.xml"));
