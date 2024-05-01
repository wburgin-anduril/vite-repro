import { vertexShader, fragmentShader } from "@monorepo/foo-lib";
const vertexShaderEl = document.createElement("pre");
vertexShaderEl.innerText = vertexShader;
document.body.appendChild(vertexShaderEl);
document.body.appendChild(document.createElement("hr"));
const fragmentShaderEl = document.createElement("pre");
fragmentShaderEl.innerText = fragmentShader;
document.body.appendChild(fragmentShaderEl);
