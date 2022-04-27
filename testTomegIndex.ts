export { };

function testTomegIndex(suly: number, magassag: number): string {
    let ttiSzam: number = suly / (magassag * magassag);
    if (ttiSzam < 16) {
        return "sulyosSovanysag";
    }
    else if (ttiSzam < 17) {
        return "mersekeltSovanysag";
    }
    else if (ttiSzam < 18.5) {
        return "enyheSovanysag";
    }
    else if (ttiSzam < 25) {
        return "normalisTestsuly";
    }
    else if (ttiSzam < 30) {
        return "tulsulyos";
    }
    else if (ttiSzam < 35) {
        return "IfokuElhizas";
    }
    else if (ttiSzam < 40) {
        return "IIfokuElhizas";
    }
    else {
        return "IIIfokuSulyosElhizas";
    }
}