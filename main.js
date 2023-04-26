import Szemely from "./szemely.js"
$(function () {
    const valtozo = $(".tarolo");
    console.log("hello");
    const szemely1 = new Szemely("Béla",1996, valtozo);
    console.log(szemely1);
    console.log(szemely1.nev);
    console.log(szemely1.szulDatum);
    szemely1.pontszam = 12;
    console.log(szemely1);



    const szemely2 = new Szemely("Mucika",1973, valtozo);
    szemely2.nev ="Jolán"
    szemely2.setSzuletesinev("Péter");
    console.log(szemely2.getSzuletesiNev());
    console.log(szemely2.kor())

});