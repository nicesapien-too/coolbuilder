      const getName = document.getElementsByClassName("nam");
      const justName = document.getElementsByClassName("nami");
      const constHowGuy = document.getElementsByClassName("howGuy");
      for (let countit = 0; countit < constHowGuy.length; countit++) {
        constHowGuy[countit].innerHTML = guyType;
      }
      for (let count = 0; count < justName.length; count++) {
        justName[count].innerHTML = name;
      }
      for (let counting = 0; counting < getName.length; counting++) {
        getName[counting].innerHTML = name + "The" + guyType;
      }
      // SET PAGE TITLE
      let title_el = document.querySelector("title");
      if (title_el) {
        title_el.innerHTML = name + "The" + guyType;
      }
