let oLastModif = new Date(document.lastModified)
let day = oLastModif.getDate()
let month = oLastModif.getMonth()
let year = oLastModif.getFullYear()
let sec = oLastModif.getSeconds()
let min = oLastModif.getMinutes()
let hour = oLastModif.getHours()
document.querySelector('.update').textContent = "Last Updated: " + month + "/" + day + "/" + year + " " + hour + ":" + min + ":" + sec