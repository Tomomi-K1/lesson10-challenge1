const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function(name, species){
    const pet = {
        name : name,
        species : species,
        isTired : 5,
        sleep : function(){
            console.log(`${this.name} needs a nap.Zzz...`);
            this.isTired = 1;
        },
        play : function(){
            if(this.isTired === 10){
                console.log("Too tired to play.");
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play!`);
                this.isTired += 1;
            }
        }
    }
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

console.log (sora, clover, baxter, cleo,francine);

clover.sleep();
//console.log(clover);

baxter.play();
//console.log(baxter);

clover.isTired = 8;
francine.isTired = 9;

//console.log(clover, francine);

//create an array to put all pet object
const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

//display pets in the browser
const showPets = function(petArray){
    pets.innerHTML = ""; //clearing the list before update it with fresh info
    for (let pet of allPets){
        let status = "ready to play!";
        if (pet.isTired >= 7){
            status = "sleeping";
        }
        let li = document.createElement("li");
        li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
        pets.append(li);
    }
};

statusButton.addEventListener("click", showPets(allPets));

