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

// const easyParents = ["wolf", "cat", "dog", "bear", "fox", "hen", "lion", "tiger"];
// const easyCubs = ["kitten", "tigercub", "puppy", "lioncub", "wolfcub", "foxcub", "bearcub", "chicken"];

// const midParents = ["snake", "bird", "cow", "rabbit", "goose", "butterfly", "sheep", "swine", "fish", "deer", "horse"];
// const midKids = ["gosling", "fry", "bunny", "lamb", "nestling", "gosling", "snakelet", "calf", "caterpillar", "fawn", "piglet" ];

// const diffImage = [];
// for (i = 1; i < 9; i++ ) {
//     diffImage.push(`animal${i}`);
// }

// const diffAnimal = ["mole", "otter", "lynx", "raccoon", "sloth", "viper", "rhino"];

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
    const createBlock = document.getElementById(`${level}-${idContainer}`);

    picsArray.forEach(image => createBlock.appendChild(makePic(image, isParent, level )));
}

PIC_STORAGE.map(elem => {
    const {level, picNames, isParent} = elem;
    addPics(level, picNames, isParent);
});

// addPics("easy", easyParents, true);
// addPics("easy", easyCubs, false);
// addPics("mid", midParents, true);
// addPics("mid", midCubs, false);
// addPics("diff", diffImage, true);
// addPics("diff", diffAnimal, false);


