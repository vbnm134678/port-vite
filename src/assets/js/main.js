import {menu} from "./menu";
import {port} from "./port";
import {link} from "./link";
import {smooth} from "./smooth"

window.addEventListener("load", function() {
    menu();
    link();
    menu();
    port();
});