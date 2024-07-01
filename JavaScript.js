let boxColor = ["brown","purple","yellowgreen","blueviolet"];

let user = [];
let Simon = [];

let level = 0;
let key = false;

let body = document.querySelector("body");
body.addEventListener("keydown",function(){
    if(key == false)
        {
            startChange();
            key = true;
        }
})

function randChangeColor(rand)
{
    rand.classList.add("color");
    setTimeout(() => {
        rand.classList.remove("color");
    },1000);
}

function ColorChanges(){
   let button = this;
   console.log(this);
   let color = this.getAttribute("id");
//    console.log(color);
   randChangeColor(button);

    user.push(color);
    console.log(user);

    check(user.length-1);
}

function check(index){
    if(user[index] == Simon[index])
        {
            if(user.length == Simon.length)
                {
                    startChange();
                }
            
        }else
        {
            let h2 = document.querySelector("h2");
            h2.innerHTML = `Game over! Your score is <b>${level}<b> <br>Press any key! To start the Game`;
            reset();
        }
}

function startChange(){
    user = [];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `Level ${level}`;

    let index = Math.floor(Math.random() * 4);
    let randomColor = boxColor[index];
    let box_choice = document.querySelector(`.${randomColor}`);

    randChangeColor(box_choice);

    Simon.push(randomColor);
    console.log(Simon);

    let box_containers = document.querySelectorAll(".box");
    for(box of box_containers)
        {
            box.addEventListener("click", ColorChanges);
        }
 }

function reset(){
    level = 0;
    user = [];
    Simon = [];
    key = false;
}