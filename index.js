let hou = document.getElementsByClassName("h")
// let minsq = document.getElementById("mins")
// let secsw = document.getElementById("secs")
let AM = document.getElementsByClassName('AM')
let GM = document.getElementsByClassName("GM")
let button = document.getElementById("party")

// function clock() {
//     let date = new Date()
//    let hours = date.getHours()
//     let mins = date.getMinutes()
//    let secs =  date.getSeconds()

//    if(hours > 12){
//             hours= hours - 12
//             AM[0].innerText ='PM'
//         }   
//         else{
//             AM[0].innerHTML= 'AM'
//         }

// hou[0].innerText = hours;
// hou[1].innerText = mins;
// hou[2].innerText = secs;

//     console.log(hours,mins,secs);
// }
// setInterval(() => {
//     clock()
// },1000);

let party = document.getElementById('party')

party.addEventListener('mouseover',()=>{
    party.innerText='Party Time!'
   
})

party.addEventListener('mouseout',()=>{
    party.innerText='Set Alarm'
    
})





function callme(){
    let time = new Date()
    let hours= time.getHours()
    let mins = time.getMinutes()
    let secs= time.getSeconds()

    if(hours > 12){
        hours= hours - 12
        AM[0].innerText ='PM'
    }   
    else{
        AM[0].innerHTML= 'AM'
    }


    let timezone = ` ${hours} Hours `
    let timezone1 = ` ${mins} Mins`
    let timezone2 =` ${secs} Secs`
    // console.log(hours, mins, secs);
    hou[0].innerText = timezone
    hou[1].innerText = timezone1
    hou[2].innerText = timezone2


    if (hours>=12 && hours<4){
            GM.innerHTML = "GOOD AFTERNOON !!"
        }
    if(hours>=4 && hours<8){
            GM.innerHTML = "GOOD EVENING !!"
        }
    if(hours>=8 && hours<11){
            GM.innerHTML = "GOOD NIGHT !!"
        }
        else{
            GM.innerHTML = "Good morning"
        }
        

}

setInterval(()=>{
callme()
},1000);

let time = new Date();
let hours = time.getHours()
console.log(hours)


let gmm = document.getElementById('gmm');
console.log(gmm,"gmm")

if (hours>=12 && hours<16){
    gmm.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP"
}
if(hours>=16 && hours<20){
    gmm.innerHTML = "GOOD EVENING !! TAKE TEA"
}
if(hours>=20 && hours<23){
    gmm.innerHTML = "GOOD NIGHT !! SWEET DREAM'S"
}



button.addEventListener("click",()=>{
    let time = new Date()
    let hours = time.getHours()
    let wakeup = document.getElementById("change1")
    let lunch = document.getElementById("change2")
    let nap = document.getElementById("change3")
    let night = document.getElementById("change4")

    
    if(parseInt(wakeup.value) === hours){
        document.getElementById("bre").innerHTML = "GRAB SOME HEALTHY BREAKFAST!";
        document.getElementById("morningimage").style.backgroundImage="url('./Component 30 – 1.svg')"
       

        
    }
    if(parseInt(lunch.value) === hours){
        document.getElementById("bre").innerHTML = "GO AND PLAY PUBG GAME";
        document.getElementById("morningimage").style.backgroundImage="url('./PUBG .SRC.webp')"
        
    }
    if(parseInt(nap.value) === hours){
        document.getElementById("bre").innerHTML = "GO AND READ SOME BOOK'S";
        document.getElementById("morningimage").style.backgroundImage="url('./glasses-1052023_1280.jpg')"
    }

    if(parseInt(night.value) === hours){
        document.getElementById("bre").innerHTML = "GOOD NIGHT AND SWEET DREAM'S";
        document.getElementById("morningimage").style.backgroundImage="url('./sleep-5580199_1280.webp')"
    }
})




function settalarm(){
let wakeTime =
document.getElementById("change1").options[
document.getElementById("change1").selectedIndex
].text;
let lunchTime =
document.getElementById("change2").options[
document.getElementById("change2").selectedIndex
].text;
let napTime =
document.getElementById("change3").options[
document.getElementById("change3").selectedIndex
].text;
let nightTime =
document.getElementById("change4").options[
document.getElementById("change4").selectedIndex].text;

// Update the text content of the guide div
document.getElementById("wakeTime").textContent = wakeTime;
document.getElementById("lunchTime").textContent = lunchTime;
document.getElementById("napTime").textContent = napTime;
document.getElementById("nightTime").textContent = nightTime;

}
