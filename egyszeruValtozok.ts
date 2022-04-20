//hatáskör valtozoNev :típus = érték;
var szam: number = 5;
var szoveg: string = "Szeretem a programozást";
var logikai: boolean = false;

//Speciális változók

//:any

var barmi: any = "alma";
barmi = 5;
barmi = true;
document.write(barmi);

var ismeretlen: unknown = "alma";
ismeretlen = 5;
ismeretlen = true;
document.write(String(ismeretlen));


var szovegesTomb1: string[] = ["alma", "körte", "szilva"];
var szovegesTomb2: Array<string> = ["fps", "tps", "rts", "szimulátor"];
var szamTomb: Array<number> = [3, 7, 13, 21, 42];

