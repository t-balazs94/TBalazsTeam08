export { };

function egeszOsztoE(szam: number, oszto: number): boolean {
    let eredmeny: number = szam % oszto;
    if (eredmeny == 0) {
        return true;
    }
    else {
        return false;
    }
}