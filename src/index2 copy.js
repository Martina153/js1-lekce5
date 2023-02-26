console.log('funguju!');

/*const jmeno = prompt("Zadej svoje jmeno: ")
const vek = Number(prompt("Zadej svoj vek: "))
const heslo = prompt("Zadej svoje heslo: ")
const dlzka = heslo.length
if (vek >=65) {
    alert("Věk v pořádku")
} else {
    alert ("Nízký věk")
}

if (dlzka < 8) {
    alert("Slabé heslo")
}*/

let plnaCena=12
const vek = Number(prompt("Zadej svoj vek: "))

if (vek <6) {
    alert("Vstup zdarma")
} if (6 <= vek <=26) {
    cena1=round(plnaCena*0.65,1)
    alert("Cena listka je:",cena1)
} if (27<=vek<=64) {
    alert("Cena listka je:",plnaCena)
} if(vek>64) {
    cena2=round(plnaCena*0.50,1)
    alert("Cena listka je:", cena2)
}

