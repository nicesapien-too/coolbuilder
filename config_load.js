const getName = document.getElementsByClassName("nam");
const justName = document.getElementsByClassName("nami");
const constHowGuy = document.getElementsByClassName("howGuy");
const contactElem = document.getElementById("contact");
for (let countit = 0; countit < constHowGuy.length; countit++) {
  constHowGuy[countit].innerHTML = guyType;
}
for (let count = 0; count < justName.length; count++) {
  justName[count].innerHTML = name;
}
for (let counting = 0; counting < getName.length; counting++) {
  getName[counting].innerHTML = name + "The" + '<b class="grade">'+guyType+"</b>";
}
// SET PAGE TITLE
let title_el = document.querySelector("title");
if (title_el) {
  title_el.innerHTML = name + "The" + guyType;
}
function configContact() {
  if (!contact_email == "") {
    contactElem.href = 'mailto:' + contact_email;
  } else {
  contactElem.style.display = 'none';
}}