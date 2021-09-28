const inquirer = require("inquirer");
let ui = new inquirer.ui.BottomBar();
const chalk = require("chalk");
let animalName = "";
let deathStatus = false;

const questions = [
    {
        type: "input",
        name: "animalName",
        message: chalk.yellow("What is the name of your pet?")
    }
]

const questions2 = [
    {
        type: "rawlist",
        name: "health",
        message: chalk.yellow("What would you like to do?"),
        choices: ["Pet", "Feed", "Water"]
    }
]

const gameLoop = () => {
    ui.log.write(chalk.blue(`Name: ${theAnimal.name.toUpperCase()} | Hunger: ${theAnimal.hunger} | Thirst: ${theAnimal.thirst} | Mood: ${theAnimal.mood}`));
    healthD();
    if (theAnimal.hunger == 0 || theAnimal.thirst == 0) {
        deathStatus = true;
        console.log(chalk.cyan(`${animal.name.toUpperCase()} died :(`));
        return;
    }

    inquirer.prompt(questions2)
        .then((answers) => {
            if (answers.health == "Feed") {
                hungerUp();
            } else if (answers.health == "Give Water") {
                thirstUp();
            } else {
                moodUp();
            }
        })
        .then(() => gameLoop())
        .catch((err) => { console.log(err) })

}

inquirer.prompt(questions)
    .then((answers) => {
        theAnimal = new Health(answers.animalName);
    })
    .then(() => gameLoop())
    .catch((err) => { console.log(err) })

const healthD = () => {
    theAnimal.hungerDown();
    theAnimal.thirstDown();
    theAnimal.moodDown();
}
const hungerUp = () => {
    theAnimal.hungerUp();
};

const thirstUp = () => {
    theAnimal.thirstUp();
};

const moodUp = () => {
    theAnimal.moodUp();
};

class Animal {
    constructor(name) {
        this._name = name;
    }
    get name () {
        return this._name;
    }
}
class Health extends Animal {
    constructor(name) {
        super(name)
        this._hunger = 10;
        this._thirst = 10;
        this._mood = 10; 
    }
    get hunger () {
        return this._hunger;
    }
    get thirst () {
        return this._thirst;
    }
    get mood () {
        return this._mood;
    }
    hungerUp() {
        this._hunger += 2;
    }
    hungerDown() {
        this._hunger--;
    }
    thirstUp() {
        this._thirst += 2;
    }
    thirstDown() {
        this._thirst--;
    }
    moodUp() {
        this._mood += 2;
    }
    moodDown() {
        this._mood--;
    }
}