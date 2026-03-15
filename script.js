
let lang="de"
let page="about"

const data={

de:{
about:"Über mich",
services:"Leistungen",
contact:"Kontakt",
aboutTitle:"Über mich",
aboutText1:"Psychologin MSc Psychotherapeutin mit CBT-Schwerpunkt mit Erfahrung in Depression, Angst und Trauma bei Kindern und Erwachsenen.",
aboutText2:"Individuelle psychologische Unterstützung für Kinder, Erwachsene und Paare.",
servicesTitle:"Leistungen",
s1:"Psychologische Beratung",
s2:"Paartherapie",
s3:"Interkulturelle Beratung",
contactTitle:"Kontakt",
contactText:"Eugen-Martin-Strasse 21a<br>79106 Freiburg<br><br>gerbercristina@gmail.com<br>+49 157 30305796"
},

en:{
about:"About",
services:"Services",
contact:"Contact",
aboutTitle:"About me",
aboutText1:"Psychologist MSc Psychotherapist with a CBT concentration with experience in depression, anxiety and trauma in children and adults.",
aboutText2:"Individual psychological support for children, adults and couples.",
servicesTitle:"Services",
s1:"Psychological counselling",
s2:"Couples therapy",
s3:"Intercultural counselling",
contactTitle:"Contact",
contactText:"Eugen-Martin-Strasse 21a<br>79106 Freiburg<br><br>gerbercristina@gmail.com<br>+49 157 30305796"
},

es:{
about:"Sobre mí",
services:"Servicios",
contact:"Contacto",
aboutTitle:"Sobre mí",
aboutText1:"Psicóloga y psicoterapeuta MSc con enfoque en TCC con experiencia en depresión, ansiedad y trauma en niños y adultos.",
aboutText2:"Apoyo psicológico individual para niños, adultos y parejas.",
servicesTitle:"Servicios",
s1:"Asesoramiento psicológico",
s2:"Terapia de pareja",
s3:"Asesoramiento intercultural",
contactTitle:"Contacto",
contactText:"Eugen-Martin-Strasse 21a<br>79106 Freiburg<br><br>gerbercristina@gmail.com<br>+49 157 30305796"
}

}

function setLang(l){
lang=l
render()
}

function setPage(p){
page=p
render()
}

function render(){

document.querySelector('[data-i18n="about"]').innerText=data[lang].about
document.querySelector('[data-i18n="services"]').innerText=data[lang].services
document.querySelector('[data-i18n="contact"]').innerText=data[lang].contact

const title=document.getElementById("title")
const p1=document.getElementById("p1")
const p2=document.getElementById("p2")
const services=document.getElementById("servicesBlock")
const contact=document.getElementById("contactBlock")

services.innerHTML=""
contact.innerHTML=""

if(page==="about"){
title.innerText=data[lang].aboutTitle
p1.innerText=data[lang].aboutText1
p2.innerText=data[lang].aboutText2
}

if(page==="services"){
title.innerText=data[lang].servicesTitle
p1.innerHTML=""
p2.innerHTML=""
services.innerHTML=`
<div class="service">${data[lang].s1}</div>
<div class="service">${data[lang].s2}</div>
<div class="service">${data[lang].s3}</div>`
}

if(page==="contact"){
title.innerText=data[lang].contactTitle
p1.innerHTML=""
p2.innerHTML=""
contact.innerHTML=`<div class="contact">${data[lang].contactText}</div>`
}

}

render()
