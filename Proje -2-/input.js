let kullaniciAdi = prompt("Adınızı Girin: ")
let merhaba = document.querySelector("#merhaba")
merhaba.innerHTML = `${merhaba.innerHTML} <small>${kullaniciAdi}</small>`