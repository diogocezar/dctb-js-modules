export const MyMath = {
	pi : 3.14159265359,
	calcCircumference : (radius) => {
		return 2 * radius * MyMath.pi;
	}
};

export const Utils = {
	log: (msg) => {
		console.log(msg);
	}
};

export function MyFoo(){
	console.log("Foo");
}