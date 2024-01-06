let div = document.getElementById('div');
function calculator(value) {
    if (value == "AC") {
        div.innerHTML = "";
        return;

    }
    if (value == "C") {
        div.innerHTML =  div.innerHTML.slice(0, -1);
          return
    }
    else if (value == "=") {

        if (div.innerHTML == "") {
            return
        }
        let result = eval(div.innerHTML);
        div.innerHTML = result;
        return
    }

    else {
        let lstindex = div.innerHTML.length - 1;
        if (div.innerHTML[lstindex] == "+" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "-" && value == "+") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "+") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "%") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "*") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "/") {
            return
        }
        if (div.innerHTML[lstindex] == "-" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "-" && value == "*") {
            return
        }
        if (div.innerHTML[lstindex] == "-" && value == "%") {
            return
        }
        if (div.innerHTML[lstindex] == "-" && value == "/") {
            return
        }
        if (div.innerHTML[lstindex] == "%" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "%" && value == "+") {
            return
        }
        if (div.innerHTML[lstindex] == "%" && value == "%") {
            return
        }
        if (div.innerHTML[lstindex] == "%" && value == "/") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "%") {
            return
        }
        if (div.innerHTML[lstindex] == "%" && value == "*") {
            return
        }
        if (div.innerHTML[lstindex] == "+" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "*") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "-") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "+") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "/") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "%") {
            return
        }
        if (div.innerHTML[lstindex] == "*" && value == "*") {
            return
        }
        if (div.innerHTML[lstindex] == "/" && value == "/") {
            return
        }
    }

    div.innerHTML = div.innerHTML + value;
}

function myFunction() {
    let element1 = document.getElementById("Button1");
    let element2 = document.getElementById("Button2");
    let element3 = document.getElementById("Button3");
    let element4 = document.getElementById("Button4");
    let element5 = document.getElementById("Button5");
    let element6 = document.getElementById("Button6");
    let element7 = document.getElementById("Button7");
    let element8 = document.getElementById("Button8");
    let element9 = document.getElementById("Button9");
    let element10 = document.getElementById("Button10");
    let element11 = document.getElementById("Button11");
    let element12 = document.getElementById("Button12");
    let element13 = document.getElementById("Button13");
    let element14 = document.getElementById("Button14");
    let element15 = document.getElementById("Button15");
    let element16 = document.getElementById("Button16");
    let element17 = document.getElementById("Button17");
    let element18 = document.getElementById("Button18");
    let element19 = document.getElementById("Button19");
    let element20 = document.getElementById("Button20");
    let element21 = document.getElementById("div");
    
    
    

    element1.classList.add("button-light");
    element2.classList.add("button-light");
    element3.classList.add("button-light");
    element4.classList.add("button-light");
    element5.classList.add("button-light");
    element6.classList.add("button-light");
    element7.classList.add("button-light");
    element8.classList.add("button-light");
    element9.classList.add("button-light");
    element10.classList.add("button-light");
    element11.classList.add("button-light");
    element12.classList.add("button-light");
    element13.classList.add("button-light");
    element14.classList.add("button-light");
    element15.classList.add("button-light");
    element16.classList.add("button-light");
    element17.classList.add("button-light");
    element18.classList.add("button-light");
    element19.classList.add("button-light");
    element20.classList.add("button-light");
    element21.classList.add("text-white");
    document.body.style.backgroundColor = "white";
   
    

    
    
    element1.classList.remove("button-dark");
    element2.classList.remove("button-dark");
    element3.classList.remove("button-dark");
    element4.classList.remove("button-dark");
    element5.classList.remove("button-dark");
    element6.classList.remove("button-dark");
    element7.classList.remove("button-dark");
    element8.classList.remove("button-dark");
    element9.classList.remove("button-dark");
    element10.classList.remove("button-dark");
    element11.classList.remove("button-dark");
    element12.classList.remove("button-dark");
    element13.classList.remove("button-dark");
    element14.classList.remove("button-dark");
    element15.classList.remove("button-dark");
    element16.classList.remove("button-dark");
    element17.classList.remove("button-dark");
    element18.classList.remove("button-dark");
    element19.classList.remove("button-dark");
    element20.classList.remove("button-dark");
    element21.classList.remove("button-dark");
    element22.classList.remove("div");
    
//comment 

  }
  

















