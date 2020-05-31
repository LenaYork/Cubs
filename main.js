const diffImage = [];
for (i = 1; i < 9; i++ ) {
    diffImage.push(`animal${i}`);
}

const easyParents =  {
    level: "easy", 
    picNames: ["wolf", "cat", "dog", "bear", "fox", "hen", "lion", "tiger"],
    isParent: true,
};
const easyCubs =  {
    level: "easy", 
    picNames: ["kitten", "tigercub", "puppy", "lioncub", "wolfcub", "foxcub", "bearcub", "chicken"],
    isParent: false,
};
const midParents = {
    level: "mid", 
    picNames: ["snake", "bird", "cow", "rabbit", "goose", "butterfly", "sheep", "swine", "fish", "deer", "horse"],
    isParent: true,
};
const midKids = {
    level: "mid", 
    picNames: ["gosling", "fry", "bunny", "lamb", "nestling", "fawn", "snakelet", "calf", "caterpillar", "foal", "piglet" ],
    isParent: false,
};
const diffParents =  {
    level: "diff", 
    picNames: diffImage,
    isParent: true,
};
const diffCubs =  {
    level: "diff", 
    picNames: ["mole", "otter", "lynx", "raccoon", "sloth", "viper", "rhino", "chipmunk"],
    isParent: false,
};

const PIC_STORAGE = [easyParents, easyCubs, midParents, midKids, diffParents, diffCubs];

function makePic(name, isParent, level) {
    const pic = document.createElement("img");
    pic.setAttribute("id",name);
    const className = isParent ? "animal" : "kids";
    const type = (level === "diff" && className === "animal" ) ? "jpg" : "png";
    pic.setAttribute("class", className);
    pic.setAttribute("src", `images/${level}/${name}.${type}`)
    return pic;
}

function addPics(level, picsArray, isParent) {
    const idContainer = isParent ? "parent" : "child";
    const createBlock = document.getElementById(`${level}-${idContainer}`); //form id name
//random mix
    picsArray.forEach(image => createBlock.appendChild(makePic(image, isParent, level )));
}

let rightAnswersCounter = 0;

function showCorrect(parent, child) {
    document.getElementById(parent).classList.add("right-picture");
    // document.getElementById(parent).classList.remove("ui-droppable");
    // $('div.foo').draggable( "disable" );
    $(`#${parent}`).droppable( "disable" );
    $(`#${child}`).draggable( "disable" );
    // document.getElementById(child).classList.remove("ui-draggable");
    rightAnswersCounter +=1;
    // alert(rightAnswersCounter);
}

PIC_STORAGE.map(elem => {
    const {level, picNames, isParent} = elem;
    addPics(level, picNames, isParent);
    // picNames.forEach(name => {
    //     $("#dog").droppable({
    //         accept: "#puppy", 
    //         drop: function( event, ui ) {
    //             // applause();
    //             showCorrect("dog", "puppy");
    //         }
    //     })
    // })
});


// console.log(PIC_STORAGE);

// in case you'd want a sound effect (applause)
// function applause() {
//     let myAudio = new Audio;
//     myAudio.src = "audio/applause.wav";
//     myAudio.play();
// }

    
    $("#accordion").accordion({
        heightStyle: "content"
    });
    
    $(".kids").draggable();
    
     $("#dog").droppable({
        accept: "#puppy", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("dog", "puppy");
        }
    })
    
    $("#cat").droppable({
        accept: "#kitten", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("cat", "kitten");
        }
    })
    
    $("#hen").droppable({
        accept: "#chicken", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("hen", "chicken");
        }
    })
    
    $("#tiger").droppable({
        accept: "#tigercub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("tiger", "tigetcub");
        }
    })
    
    $("#lion").droppable({
        accept: "#lioncub", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("lion", "lioncub");
        }
    })
    
    $("#bear").droppable({
        accept: "#bearcub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("bear", "bearcub");
        }
    })
    
    $("#fox").droppable({
        accept: "#foxcub", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("fox", "foxcub");
        }
    })
    
    $("#wolf").droppable({
        accept: "#wolfcub", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("wolf", "wolfcub");
        }
    })
    
    //level2
    $("#swine").droppable({
        accept: "#piglet", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("swine", "piglet");
        }
    })
    
    $("#sheep").droppable({
        accept: "#lamb", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("sheep", "lamb");
        }
    })
    
    $("#snake").droppable({
        accept: "#snakelet", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("snake", "snakelet");
        }
    })
    
    $("#rabbit").droppable({
        accept: "#bunny", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("rabbit", "bunny");
        }
    })
    
    //level 2
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