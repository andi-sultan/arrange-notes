import "./scss/main.scss";
import Logo from "./assets/images/logo-on-white-bg.png";

const bodyText = document.createElement("h1");
bodyText.textContent = "Hello World!";
document.body.appendChild(bodyText);
const myLogo = new Image();
myLogo.style.width = "400px";
myLogo.src = Logo;
document.body.appendChild(myLogo);
