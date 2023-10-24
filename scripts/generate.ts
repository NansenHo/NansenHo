import { namespaceIcons } from "./iconList";
import { intro, quote, end } from "../data/text";

const fs = require("fs/promises");

const readmeFile = "README.md";
const readmeContent = intro + namespaceIcons + quote + end;

if (readmeContent) {
  fs.writeFile(readmeFile, readmeContent, {
    encoding: "utf-8",
  })
    .then((res) => {
      console.log("generated successfully!");
    })
    .catch((error) => {
      console.log(`failed! error: ${error}.`);
    });
}
