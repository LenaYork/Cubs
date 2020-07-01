// in case you'd want a sound effect (applause)
// function applause() {
//     let myAudio = new Audio;
//     myAudio.src = "audio/applause.wav";
//     myAudio.play();
// }

const PIC_PAIR_STORAGE = [ 
    {
        level: "easy",
        picNames: {
            wolf: "wolfcub",
            tiger: "tigercub",
            cat: "kitten",
            dog: "puppy",
            bear: "bearcub",
            fox: "foxcub",
            hen: "chicken",
            lion: "lioncub",
        },
    },
    {
        level: "mid",
        picNames: { 
            snake: "snakelet",
            bird: "nestling",
            cow: "calf",
            rabbit: "bunny",
            goose: "gosling",
            butterfly: "caterpillar",
            sheep: "lamb",
            swine: "piglet",
            fish: "fry",
            deer: "fawn",
            horse: "foal",
        },
    },
    {
        level: "diff",
        picNames: {
            animal1: "raccoon",
            animal2: "mole",
            animal3: "lynx",
            animal4: "rhino",
            animal5: "viper",
            animal6: "chipmunk",
            animal7: "sloth",
            animal8: "otter",
        },
    }
];

const LEVEL_TITLES = [ 
    '#easy-parent',
    '#easy-child',
    '#mid-parent', 
    '#mid-child', 
    '#diff-parent',
    '#diff-child'
];


let rightAnswersCounter = 0;

let totalUserScore = document.querySelector("#userScore");
 totalUserScore.innerHTML = rightAnswersCounter;

 let  gameControlButton = document.querySelector(".start-button");
 function toggleButtonName() {
    
     if (gameControlButton.innerHTML === 'START'){
         gameControlButton.innerHTML = 'STOP',
         startGame();
    } 
    else {
        gameControlButton.innerHTML = 'START',
        stopGame();
    };
     
}

function makePic(name, level, isParent) {   
    const pic = document.createElement("img");  
    pic.setAttribute("id",name);   
    const className = isParent ? "animal" : "kids";   
    const type = (level === "diff" && className === "animal" ) ? "jpg" : "png"; 
    pic.setAttribute("class", className); 
    pic.setAttribute("src", `images/${level}/${name}.${type}`) 
    return pic; 
}

const mixArray = (array) => {
    //random mix
    return array.sort(() => Math.random() - 0.5); 
}

function addPics(level, picNames, isParent) {
    const parentBlock = document.getElementById(`${level}-parent`);
    const childBlock = document.getElementById(`${level}-child`);
       
    const parentsNames = mixArray(Object.keys(picNames)); 
    const childrenNames = mixArray(Object.values(picNames)); 

    parentsNames.forEach(image => parentBlock.appendChild(makePic(image, level, true )));
    childrenNames.forEach(image => childBlock.appendChild(makePic(image, level, false ))); 
    
    parentsNames.forEach(parent => {
        const child = picNames[parent];
        $(`#${parent}`).droppable({
            accept: `#${child}`, 
            drop: function( event, ui ) {
                // applause();
                showCorrect(parent, child);
            }
        })
    })

}


function showCorrect(parent, child) {
    document.getElementById(parent).classList.add("right-picture");

    $(`#${parent}`).droppable( "disable" );
    $(`#${child}`).draggable( "disable" );
   
    rightAnswersCounter +=1;
    totalUserScore.innerHTML = rightAnswersCounter;
}

let userTime = document.querySelector("#timeLeft");
userTime.innerHTML = '0:00';

let userTimer;
let sec;


function displayResult() {
    userTime.innerHTML = '0:60';
    sec--;
    userTime.innerHTML = (`0:${sec < 10 ? '0' : '' }${sec} `);
    console.log(sec);
};

function setTimer() {
    sec = 60;
    userTimer = setInterval(displayResult, 1000);
}

function stopTimer() {
    clearInterval(userTimer);
}

function startGame() {
   
    setTimer();
    setTimeout(stopGame, 60000) //60sec
    $("#userTotalResult").addClass('hidden');

    $(".gamefield").removeClass("hidden");

    const diffImage = [];
    for (i = 1; i < 9; i++ ) {
        diffImage.push(`animal${i}`);
    }  //create an array of pic with diff level animals 


    PIC_PAIR_STORAGE.map(elem => {
        const {level, picNames} = elem;  
                                                
        addPics(level, picNames);  
    })

    $("#accordion").accordion({
        heightStyle: "content"
    });
     
    $(".kids").draggable();
 
    srightAnswersCounter = 0;
    totalUserScore.innerHTML = 0;

 }

 function stopGame() {
    stopTimer();

    $(".animal").droppable( "disable" );
    $(".kids").draggable( "disable" );
    
    
    // document.querySelector("#userTotalResult").innerHTML = `Time is up! You managed to get ${rightAnswersCounter} point(s) out of 27`;
    document.querySelector("#userTotalResult").innerHTML = 'Time is up! But you can try again';
    $("#userTotalResult").removeClass("hidden");

    gameControlButton.innerHTML = 'START';
    
    LEVEL_TITLES.map( elem => $(elem).html(""));

    $(".gamefield").addClass("hidden");
}
    
gameControlButton.addEventListener('click', toggleButtonName);
  