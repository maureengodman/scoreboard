let count = 0


function homePlus1(){
   document.getElementById("score").textContent= count + 1 
   count++
}

function homePlus2(){
    document.getElementById("score").textContent = count += 2
}
function homePlus3(){
    document.getElementById("score").textContent = count += 3
}

function guestPlus1(){
    document.getElementById("score2").textContent = count + 1
    count++
}
function guestPlus2(){
    document.getElementById("score2").textContent = count += 2
   
}
function guestPlus3(){
    document.getElementById("score2").textContent = count += 3
   
}