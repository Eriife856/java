const Aboutme = document.getElementById("Aboutme")
const Mycontact = document.getElementById("Mycontact")
const Myskill = document.getElementById("Myskills")
const about = document.getElementById("about")
const contact= document.getElementById("contact")
const skills = document.getElementById("skills")

Aboutme.onclick= function(){
    about.style.display="block"
    contact.style.display="none"
    skills.style.display="none"
}

Mycontact.onclick= function(){
    about.style.display="none"
    contact.style.display="block"
    skills.style.display="none"
}

Myskill.onclick= function(){
    about.style.display="none"
    contact.style.display="none"
    skills.style.display="block"
}