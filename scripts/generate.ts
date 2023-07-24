import { namespaceIcons } from "./iconList";
import { intro, quote, end } from "../data/text";

const fs = require("fs");

const readmeFile = "README.md";
const readmeContent = intro + namespaceIcons + quote + end;

if (readmeContent) {
  fs.writeFile(readmeFile, readmeContent, (err) => {
    console.error(err);
  });
}
