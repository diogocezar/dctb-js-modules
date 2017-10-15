import {MyMath as M} from './libs/libs.js';
import {Utils as U} from './libs/libs.js';
import {MyFoo as F} from './libs/libs.js';
import MyDefault from './libs/default.js';

const Main = {
	init: () => {
		let radius = 200;
		console.log(M.calcCircumference(radius));
		Main.log();
		Main.default();
		Main.diag();
	},
	log: () => {
		U.log("Foo Bar");
		F();
	},
	default: () => {
		MyDefault();
	},
	diag: () => {
		console.log(diag(4,3));
	}
}

Main.init();