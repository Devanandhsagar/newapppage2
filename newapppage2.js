function enter() {
    let bodys = document.getElementById("solutioninput");
    let checking=document.getElementById("enterQuestioages");
    if (checking.value==="1"){
        let input1 = document.createElement("input");
        input1.type = "text"
        input1.setAttribute("placeholder", "enter ratio a1 age")
        let input2 = document.createElement("input");
        input2.type = "text"
        input2.setAttribute("placeholder", "enter ratio a2 age")
        let input3 = document.createElement("input");
        input3.type = "text"
        input3.setAttribute("placeholder", "enter n1 years ago")
        let input4 = document.createElement("input");
        input4.type = "text"
        input4.setAttribute("placeholder", "enter ratio b1 age")
        let input5 = document.createElement("input");
        input5.type = "text"
        input5.setAttribute("placeholder", "enter ratio b2 age");
        bodys.appendChild(input1);
        bodys.appendChild(input2);
        bodys.appendChild(input3);
        bodys.appendChild(input4);
        bodys.appendChild(input5);
    } 
    else if (checking.value==="2"){
         
    }
    let answerbutton = document.getElementById("answerbutton");
    answerbutton.onclick = function() {
        let questionNumber = document.getElementById("enterQuestioages");
        if (questionNumber.value === "1") {
            let solutionpage = document.getElementById("solution");
            
            let textarea1 = document.createElement("p");
            let textarea2 = document.createElement("p");
            let textarea3 = document.createElement("p");
            let textarea4 = document.createElement("p");
            textarea1.textContent = "convert equation =    b2(a1*x - n1) = b1(a2*x-n1) ";
            textarea2.textContent = input5.value+"("+inputt1.value+"*x -" + input3.value+" = "+input4.value+"( x -"+input3.value+")"
            textarea3.textContent ="x value = "
            solutionpage.appendChild(textarea1);
        }
        if (questionNumber.value === "2") {
            let bodyss = document.getElementById("solution");
            let solutionpage = document.getElementById("solutioninput");
            let textarea = document.createElement("textarea");
            textarea.setAttribute("id", "textbox")
            textarea.textContent = "a= b+c = " + (parseInt(input2.value) + parseInt(input1.value))

            solutionpage.appendChild(textarea);
        }
let clearbutton = document.getElementById("cleardata");
clearbutton.onclick = function() {
    let removefrom = document.getElementById("solutionbutton")
    let clear = document.getElementById("solutioninput");
    removefrom.removeChild(clear)
    let create = document.createElement("div");
    create.setAttribute("id", "solutioninput");
    removefrom.appendChild(create);
}
    }






}
