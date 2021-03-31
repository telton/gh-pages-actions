import { getLastDeployTime } from "./last-deploy";
console.log("hello!");

function init() {
  const lastDeployEl = document.getElementById("last-deploy");
  const lastDeployTime = getLastDeployTime();
  if (lastDeployEl) {
    lastDeployEl.innerText = lastDeployTime;
  }
}

init();
