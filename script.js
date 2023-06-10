console.log(`jackpot`);
const startMenu = document.getElementById('start');
const body = document.getElementById('body');

const html = `<div class="desktop" style="position: absolute;
                    z-index: 417047847385;
                    left: 0%;
                    top: 0%;
                    background-color: var(--hovColor);
                    height: 100vh;
                    width: 100%;
                    backdrop-filter: blur(5px);
                    ">
                    <div class="boxMsg" style="position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 10%;
                    width: 25%;
                    background-color: rgba(38, 38, 38, 0.866);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    color: var(--textColor);">
                        <p>They don't work yet</p>
                    </div>
                    </div>
                            `;

const desktop = document.getElementById('desktop');

startMenu.addEventListener('click', function () {
    document.querySelector('.popup').classList.toggle("popActive");
    document.querySelector('.clicked').classList.toggle("hovActive");
})

const search = document.getElementById('search-box');
search.addEventListener('input', function () {
    let searched = search.value;
    let apps = document.getElementsByClassName('appImg');
    Array.from(apps).forEach(function (button) {
        let appName = button.getElementsByClassName('recAppName')[0].innerText;
        if (appName.toLowerCase().includes(searched.toLowerCase())) {
            button.style.display = "flex";
        }
        else {
            button.style.display = "none";
        }
    })
})

let notApps = document.querySelectorAll('.easyDoesIt');
notApps.forEach(function(el){
    el.addEventListener('click', function () {
        
        desktop.innerHTML = html;
    
        body.appendChild(desktop);
    
        setTimeout(() => {
            desktop.innerHTML = "";
        }, 2000);
    })
})

let powerBtn = document.getElementById('p-btn');
powerBtn.addEventListener('click', function(){
    document.querySelector('.power-menu').classList.toggle("power-menu-vis");
})

let nada = document.querySelectorAll('.nada');
nada.forEach(function(el){
    el.addEventListener('click', function () {
        
        myNewShit.innerHTML = `<div class="desktop" style="position: absolute;
        z-index: 417047847385;
        left: 0%;
        top: 0%;
        background-color: var(--hovColor);
        height: 100vh;
        width: 100%;
        backdrop-filter: blur(5px);
        ">
        <div class="boxMsg" style="position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 10%;
        width: 25%;
        background-color: rgba(38, 38, 38, 0.866);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: var(--textColor);">
            <p>Ab yeh to kisi kitab me nhi likha!</p>
        </div>
        </div>
                `;
    
        body.appendChild(myNewShit);
    
        setTimeout(() => {
            myNewShit.innerHTML = "";
        }, 1500);
    })
})



const setDate = function () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()
    const year = date.getFullYear();
    const taskDate = document.querySelector(`#taskDate`);
    taskDate.innerHTML = `${day}/${(month+1).toLocaleString(`en-US`,{minimumIntegerDigits:2})}/${year}`;
}

const setTime = function(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes().toLocaleString(`en-US`,{minimumIntegerDigits:2});
    const seconds = date.getSeconds();
    const taskTime = document.querySelector(`#taskTime`);
    taskTime.innerHTML = `${hour.toLocaleString(`en-US`,{minimumIntegerDigits:2})} : ${(minute).toLocaleString(`en-US`,{minimumIntegerDigits:2})} : ${seconds.toLocaleString(`en-US`,{minimumIntegerDigits:2})}`; //to make the format look better
}
const refresh = 1000;  //this will fetch the time every one second
setInterval(setDate, refresh);
setInterval(setTime, refresh);
