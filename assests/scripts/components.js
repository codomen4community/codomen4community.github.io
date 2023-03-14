import { navbar } from "./navbar.js";
import { navScroll } from "./script.js";

let nav = document.createElement("nav");
let body = document.body;
nav.id = "codomen";

nav.innerHTML = navbar();

body.insertBefore(nav, body.firstElementChild);

navScroll();
