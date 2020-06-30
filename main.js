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

const LEVEL_TITLES = [ //массивчик уровней для отрисовки по start
    '#easy-parent',
    '#easy-child',
    '#mid-parent', 
    '#mid-child', 
    '#diff-parent',
    '#diff-child'
];

function showCorrect(pic) {
    document.getElementById(pic).classList.add("right-picture");
}
    
    $("#accordion").accordion({
        heightStyle: "content"
    });
    
    $(".kids").draggable();
    
     $("#dog").droppable({
        accept: "#puppy", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("dog");
        }
    })
    
    $("#cat").droppable({
        accept: "#kitten", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("cat");
        }
    })
    
    $("#hen").droppable({
        accept: "#chicken", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("hen");
        }
    })
    
    $("#tiger").droppable({
        accept: "#tigercub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("tiger");
        }
    })
    
    $("#lion").droppable({
        accept: "#lioncub", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("lion");
        }
    })
    
    $("#bear").droppable({
        accept: "#bearcub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("bear");
        }
    })
    
    $("#fox").droppable({
        accept: "#foxcub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("fox");
        }
    })
    
    $("#wolf").droppable({
        accept: "#wolfcub", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("wolf");
        }
    })
    
    //level2
    $("#swine").droppable({
        accept: "#piglet", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("swine");
        }
    })
    
    $("#sheep").droppable({
        accept: "#lamb", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("sheep");
        }
    })
    
    $("#snake").droppable({
        accept: "#snakelet", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("snake");
        }
    })
    
    $("#rabbit").droppable({
        accept: "#bunny", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("rabbit");
        }
    })
    
    $("#deer").droppable({
        accept: "#fawn", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("deer");
        }
    })
    
    $("#goose").droppable({
        accept: "#gosling", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("goose");
        }
    })
    
    $("#horse").droppable({
        accept: "#foal", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("horse");
        }
    })
    
    
    $("#cow").droppable({
        accept: "#calf", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("cow");
        }
    })
    
    $("#bird").droppable({
        accept: "#nestling", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("bird");
        }
    })
    
    $("#butterfly").droppable({
        accept: "#caterpillar", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("butterfly");
        }
    })
    
    $("#fish").droppable({
        accept: "#fry", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("fish");
        }
    })
    
    //level3
    $("#animal1").droppable({
        accept: "#raccoon", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("animal1");
        }
    })

    $("#animal2").droppable({
        accept: "#mole", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("animal2");
        }
    })
    
    $("#animal3").droppable({
        accept: "#lynx", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("animal3");
        }
    })
    
    $("#animal4").droppable({
        accept: "#rhino", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("animal4");
           
        }
    })
    
    $("#animal5").droppable({
        accept: "#viper", 
        drop: function( event, ui ) {
            // applause();
           showCorrect("animal5");
        }
    })
    
    $("#animal6").droppable({
        accept: "#chipmunk", 
        drop: function( event, ui ) {
            // applause();
           showCorrect("animal6");
        }
    })
    
    $("#animal7").droppable({
        accept: "#sloth", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("animal7");
        }
    })
    
    $("#animal8").droppable({
        accept: "#otter", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("animal8");
        }
    })