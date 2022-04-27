"use strict";
exports.__esModule = true;
function parosLetrehoz(alsoHatar, felsoHatar) {
    var megvan = false;
    var generaltSzam = 0;
    while (megvan == false) {
        generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        if (generaltSzam % 2 == 0) {
            megvan = true;
        }
    }
    return generaltSzam;
}
