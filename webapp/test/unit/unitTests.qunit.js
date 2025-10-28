/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00comsaptrainingfullscreenapp/fullscreenapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
