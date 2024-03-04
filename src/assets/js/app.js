/**
 * @file This is the main entry point for the application. It imports and initializes all the modules and components including AlpineJS
 */
import { initTheme } from "./modules/vgsThemeSwitcher.js";

initTheme("light");

console.log(initTheme);
const test = "test";
console.log(
	`That's one small step for man, and one giant leap for mankind with a ${test}`,
);
