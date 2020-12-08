/*var tab1 = ['Saliman', 'Eméryle', 'AGONHE', 122]
tab1.forEach(function(valeur, index){ console.log('l\'index '+index+' porte la valeur '+valeur+'\n')})

var Utilisaeur = function (nom, prenom, tel) {
    this.nom = nom
    this.prenom = prenom
    this.tel = tel
}

Utilisaeur.prototype.sePresenter = function(){
    console.log('Salut tout le monde !! Je m\'appelle '+this.prenom+' '+this.nom+' \nJe suis joignable au '+this.tel+' \nMerci !')
}

var sal = new Utilisaeur("AGONHE", "Saliman", "+229 66 89 94 62")
var caro = new Utilisaeur("AGONHE", "Carole", "+229 94 45 35 05")

var elmt = window.document.getElementsByTagName("p")

console.log(elmt)

var lis = document.querySelector('ul').children
console.log(lis)
for (var i = 0; i<lis.length; i++){
    console.log(lis[i])
    lis[i].classList.add("transiter")
    lis[i].addEventListener("click", function(e){
        this.classList.toggle("coul-rouge")
        console.log(e)
    })
}

var timeInter1 = window.setInterval(function(){
    elmt[0].classList.toggle("coul-vert")
}, 2000)

var timeInter2 = window.setInterval(function(){
    elmt[1].classList.toggle("taille-2")
}, 1000)

window.setTimeout(function(){
    window.clearInterval(timeInter1)
    window.clearInterval(timeInter2)
}, 11000)*/

//*******************       AJAX        ***************************/

var getHttpRequest = function (){
            // ancien code de compatibilité, aujourd’hui inutile
        var httpRequest
        if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+...
            httpRequest = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) { // IE 6 et antérieurs
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return httpRequest
}


var httpRequest = getHttpRequest()
httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4){
        var resultat = JSON.parse(httpRequest.responseText)
        console.log(resultat)
    }
}
httpRequest.open("GET", "http://127.0.0.1:8080/employees", true)
httpRequest.send()
console.log(httpRequest)
