const jmeno = prompt("Zadej jméno bez diakritiky:")
const prijmeni = prompt("Zadej příjmení bez diakritiky:")

const jmenoinicialy = jmeno.trim().slice(0,3).toLowerCase()
const prijmenicialy = prijmeni.trim().slice(0,4).toLowerCase()

const email = prijmenicialy + jmenoinicialy +"@fit.cvut.cz"

document.body.innerHTML = email