"use strict";
exports.__esModule = true;
function egeszOsztoE(szam, oszto) {
    var eredmeny = szam % oszto;
    if (eredmeny == 0) {
        return true;
    }
    else {
        return false;
    }
}
