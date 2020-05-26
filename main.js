// in case you'd want a sound effect (applause)
// function applause() {
//     let myAudio = new Audio;
//     myAudio.src = "audio/applause.wav";
//     myAudio.play();
// }

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
    $("#raccoonPic").droppable({
        accept: "#raccoon", 
        drop: function( event, ui ) {
           // applause();
           showCorrect("raccoonPic");
        }
    })

    $("#slothPic").droppable({
        accept: "#sloth", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#viperPic").droppable({
        accept: "#viper", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#lynxPic").droppable({
        accept: "#lynx", 
        drop: function( event, ui ) {
            // applause();
            showCorrect("lynxPic");
           
        }
    })
    
    $("#otterPic").droppable({
        accept: "#otter", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#rhinoPic").droppable({
        accept: "#rhino", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#molePic").droppable({
        accept: "#mole", 
        drop: function( event, ui ) {
            applause();
        }
    })
    
    $("#chipmunkPic").droppable({
        accept: "#chipmunk", 
        drop: function( event, ui ) {
            applause();
        }
    })