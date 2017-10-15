"use strict";

System.register([], function (_export, _context) {
	"use strict";

	var MyMath, Utils;
	function MyFoo() {
		console.log("Foo");
	}

	_export("MyFoo", MyFoo);

	return {
		setters: [],
		execute: function () {
			_export("MyMath", MyMath = {
				pi: 3.14159265359,
				calcCircumference: function calcCircumference(radius) {
					return 2 * radius * MyMath.pi;
				}
			});

			_export("MyMath", MyMath);

			_export("Utils", Utils = {
				log: function log(msg) {
					console.log(msg);
				}
			});

			_export("Utils", Utils);
		}
	};
});