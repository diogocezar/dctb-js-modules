'use strict';

System.register(['./libs/libs.js', './libs/default.js'], function (_export, _context) {
	"use strict";

	var M, U, F, MyDefault, Main;
	return {
		setters: [function (_libsLibsJs) {
			M = _libsLibsJs.MyMath;
			U = _libsLibsJs.Utils;
			F = _libsLibsJs.MyFoo;
		}, function (_libsDefaultJs) {
			MyDefault = _libsDefaultJs.default;
		}],
		execute: function () {
			Main = {
				init: function init() {
					var radius = 200;
					console.log(M.calcCircumference(radius));
					Main.log();
					Main.default();
					Main.diag();
				},
				log: function log() {
					U.log("Foo Bar");
					F();
				},
				default: function _default() {
					MyDefault();
				},
				diag: function (_diag) {
					function diag() {
						return _diag.apply(this, arguments);
					}

					diag.toString = function () {
						return _diag.toString();
					};

					return diag;
				}(function () {
					console.log(diag(4, 3));
				})
			};


			Main.init();
		}
	};
});