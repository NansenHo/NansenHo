import { iconList, IconList } from "../data/iconList";
import { newlines } from "../data/text";

function generateIconList(icons: string[]) {
  return icons
    .map((icon) => {
      let imgElement = `<img height="20" src="assets/svgs/${icon}.svg" alt="${icon}"/>`;
      return `<code>${imgElement}</code>`;
    })
    .join("\n");
}

let namespace_icons;
function generateNamespaceIcons(iconList: IconList) {
  return iconList
    .map((list) => {
      namespace_icons =
        `#### ${list.namespace}` + newlines + generateIconList(list.icons);
      return namespace_icons;
    })
    .join(newlines);
}

export const namespaceIcons = generateNamespaceIcons(iconList);
