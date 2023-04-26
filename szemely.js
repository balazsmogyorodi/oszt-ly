class Szemely {
    #szuletesiNev

    constructor(nev, szulDatum, szuloELEM) {
        this.nev = nev;
        this.szulDatum = szulDatum;
        this.#szuletesiNev = this.setSzuletesinev(nev);

        szuloELEM.append(`<div class="szemely">
            <h3>${this.#szuletesiNev}</h3>
            <p>${this.kor()}</p>
        </div>
        `);

        this.szemelyELEM=$(".szemely:last-child");
        console.log(this);

        this.szemelyELEM.on("click", function(){
            console.log(this);


        });



    }
    getSzuletesiNev() {
        return this.#szuletesiNev;
    }
    setSzuletesinev(ujnev) {
        this.#szuletesiNev = ujnev;
    }


    kor() {
        const d = new Date();
        let year = d.getFullYear();
        let aktualisKor = year - this.szulDatum;
        return aktualisKor
    }

}

export default Szemely;