import { baseUrl, parametersMap } from "../data/stats";

let parameters = "";
export const statsImg = (function githubStatsCard() {
  for (const [key, value] of parametersMap) {
    parameters = parameters + `${key}=${value}&`;
  }
  return `<div><img src="${baseUrl + parameters}" width="70%"></div>`;
})();
