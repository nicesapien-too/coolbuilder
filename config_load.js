const getName = document.getElementsByClassName("nam");
const justName = document.getElementsByClassName("nami");
const constHowGuy = document.getElementsByClassName("howGuy");
const relation = document.getElementsByClassName("relation");
const Middleware = document.getElementsByClassName("MiddleWord");
const contactElem = document.getElementById("contact");

for (let countit = 0; countit < constHowGuy.length; countit++) {
  constHowGuy[countit].innerHTML = guyType;
}
for (let count = 0; count < justName.length; count++) {
  justName[count].innerHTML = name;
}
for (let counted = 0; counted < relation.length; counted++) {
  relation[counted].innerHTML = relationship;
}
for (let counting = 0; counting < getName.length; counting++) {
  getName[counting].innerHTML = name + MiddleWord + '<b class="grade">'+guyType+"</b>";
}
// SET THE PAGE DESCRIPTION
document.getElementById("description").innerHTML = description;
// SET PAGE TITLE
let title_el = document.querySelector("title");
if (title_el) {
  title_el.innerHTML = name + "The" + guyType;
}
function configContact() {
  if (!contact_email == "") {
    contactElem.href = 'mailto:' + contact_email;
  } else {
    document.getElementById("contact").style.display = 'none';
  }}
