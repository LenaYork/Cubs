
   const PIC_PAIR_STORAGE = [ //новый массив объектов
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

const LEVEL_TITLES = [ //массивчик уровней для отрисовки по start
    '#easy-parent',
    '#easy-child',
    '#mid-parent', 
    '#mid-child', 
    '#diff-parent',
    '#diff-child'
];

function makePic(name, level, isParent) {   // создает фотку
    const pic = document.createElement("img");   // создать тег img
    pic.setAttribute("id",name);   // добавить ей айдишку по name
    const className = isParent ? "animal" : "kids";   // создать класс родитель или деть
    const type = (level === "diff" && className === "animal" ) ? "jpg" : "png"; //если Level diff и класс animal то тип фотки - jpg byfxt png
    pic.setAttribute("class", className); //фотке добавить класс (родитель-деть)
    pic.setAttribute("src", `images/${level}/${name}.${type}`) //добавить ссыль уровень/имя/тип фотки
    return pic; 
}

const mixArray = (array) => {
    //random mix
    return array.sort(() => Math.random() - 0.5); //перемешать массив 
}

function addPics(level, picNames, isParent) { //добавляет фотку в ДОМ 
    // const idContainer = isParent ? "parent" : "child"; //  создать айдишку по isParent //если picNames[x, 0] то parent если picNames[x, 1] то child
    const parentBlock = document.getElementById(`${level}-parent`);
    const childBlock = document.getElementById(`${level}-child`);
    //найти в доме див по айдишке
   
    //разбить 
    const parentsNames = mixArray(Object.keys(picNames)); //массив ключей пэрентов и сразу микс
    const childrenNames = mixArray(Object.values(picNames)); //массив значение кидзов

    
    parentsNames.forEach(image => parentBlock.appendChild(makePic(image, level, true )));
    childrenNames.forEach(image => childBlock.appendChild(makePic(image, level, false ))); 
    // в див добавить makepic 

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
let rightAnswersCounter = 0;


function showCorrect(parent, child) {
document.getElementById(parent).classList.add("right-picture");

$(`#${parent}`).droppable( "disable" );
$(`#${child}`).draggable( "disable" );

rightAnswersCounter +=1;
totalUserScore.innerHTML = rightAnswersCounter;
// alert(rightAnswersCounter);

}


// in case you'd want a sound effect (applause)
// function applause() {
//     let myAudio = new Audio;
//     myAudio.src = "audio/applause.wav";
//     myAudio.play();
// }
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
   
    //начать таймер
    setTimer();
    setTimeout(stopGame, 60000) //60 и 000 мс
    $("#userTotalResult").addClass('hidden');
    //построить дом
    //вернуть контейер
    $(".gamefield").removeClass("hidden");

    const diffImage = [];
    for (i = 1; i < 9; i++ ) {
        diffImage.push(`animal${i}`);
    }  //создаем массив картинок с животными сложного уровня


    PIC_PAIR_STORAGE.map(elem => {
        const {level, picNames} = elem;  
                                                
        addPics(level, picNames);  
    })

    $("#accordion").accordion({
        heightStyle: "content"
    });
     
    $(".kids").draggable();

    //заменить кнопку start на stop (уже в обработчике)
  
        //обнулить прав ответы
    rightAnswersCounter = 0;
    totalUserScore.innerHTML = 0;

 }

 function stopGame() {
    stopTimer();

    //снять подвижность pics
    $(".animal").droppable( "disable" );
    $(".kids").draggable( "disable" );
    
    //сообщение с итогами
    document.querySelector("#userTotalResult").innerHTML = `Time is up! You managed to get ${rightAnswersCounter} point(s) out of 27`;
    // alert(`Time is up! You managed to get ${rightAnswersCounter} point(s) out of 27`);
    $("#userTotalResult").removeClass("hidden");

    //кнопка должна снова стать start
    gameControlButton.innerHTML = 'START';
    
    LEVEL_TITLES.map( elem => $(elem).html(""));

    //очистить предыдущие значения
    // $('#easy-parent').html("");
    // $('#easy-child').html("");
    // $('#mid-parent').html("");
    // $('#mid-child').html("");
    // $('#diff-parent').html("");
    // $('#diff-child').html("");
    
    //снова сделать заголовки невидимыми
    // $(".level-title").addClass("hidden");
    $(".gamefield").addClass("hidden");
}

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

gameControlButton.addEventListener('click', toggleButtonName);
// gameControlButton.addEventListener('dblclick', false);