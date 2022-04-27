export { };

function parosLetrehoz(alsoHatar: number, felsoHatar: number): number {
    let megvan: boolean = false;
    let generaltSzam: number = 0;
    while (megvan == false) {
        generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        if (generaltSzam % 2 == 0) {
            megvan = true;
        }
    }
    return generaltSzam;
}