const jmeno = prompt("Zadej jméno bez diakritiky!")
const prijmeni = prompt("Zadej příjmení bez diakritiky")

const jmenoinicialy = jmeno.slice(0,3).toLowerCase().trim()
const prijminicialy = prijmeni.slice(0,4).toLowerCase().trim()

const email = prijminicialy + jmenoinicialy +"@fit.cvut.cz"

document.body.innerHTML = email