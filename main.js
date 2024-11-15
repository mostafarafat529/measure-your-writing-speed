
// array of the words 
const words = [
"hello",
"mostafa",
"html",
"java",
"script",
"python",
"c++",
"c#",
"programming",
"console",
"itiratore",
"function",
"object",
"array",
"string",
"methods" ,
"import" ,
"export" ,
"prompt" ,
"fetch" ,
"pick" ,
"boundle" ,
"boolean" ,
"char" ,
];

const lvls = {
"easy" : 5 , 
"normal" : 3 , 
"hard" : 2 
} ;

let defaultlvlname = "normal" ;

let defaultlvlseconds = lvls[defaultlvlname]

// prompt the element 

let startbtn = document.querySelector(".start")
let lvlnamespan = document.querySelector(".message .lvl")
let secondsspan = document.querySelector(".message .seconds")
let theword = document.querySelector(".the-word")
let upcomingwords = document.querySelector(".upcoming-words")
let input = document.querySelector(".input")
let timeleftspan = document.querySelector(".time span")
let scoregot = document.querySelector(".score .got")
let scoretotal = document.querySelector(".score .total")
let finish = document.querySelector(".finish")


lvlnamespan.innerHTML = defaultlvlname
secondsspan.innerHTML = defaultlvlseconds
timeleftspan.innerHTML =defaultlvlseconds
scoretotal.innerHTML =words.length

// forbidden from coping   

input.onpaste = function(){
    return false ;
}
startbtn.onclick = function(){
this.remove() ;

input.focus();
genwords()

}
function genwords(){
    let randomwords = words[Math.floor(Math.random() * words.length)] ;
    let wordindex = words.indexOf(randomwords)
    words.splice(wordindex , 1) ;
    theword.innerHTML = randomwords ;
    upcomingwords.innerHTML ="" ;

    for(let i = 0 ; i< words.length ; i++){
        let div = document.createElement("div") ;
        let txt = document.createTextNode(words[i]) ;
        div.appendChild(txt) ;
        upcomingwords.appendChild(div)
    }
    startpaly() ;
} 



function startpaly(){
    timeleftspan.innerHTML = defaultlvlseconds ;

    let start = setInterval(function(){
        timeleftspan.innerHTML-- ;
        if(timeleftspan.innerHTML === "0"){
            clearInterval(start) ;
            if(theword.innerHTML === input.value){
                input.value = "" ;
                scoregot.innerHTML++ ;

                if(words.length > 0){
                    genwords() ;
                }else{
                    let span = document.createElement("span") ;
                    span.className  = "good" ;
                    let txtspan = document.createTextNode("congratulation") ;
                    span.appendChild(txtspan);
                    finish.appendChild(span)
                    upcomingwords.remove() ;
                }
            }else{
            let span = document.createElement("span") ;
            span.className  = "bad" ;
            let txtspan = document.createTextNode("game over") ;
            span.appendChild(txtspan);
            finish.appendChild(span)
            }
        }
    } , 1000)
}
window.onload =function(){
    input.value = "" ;
}