// 0 is passive
// 1 is neutral
// 2 is hostile

const creatures = [
    gunkfish = {
        names: ["backwater gunkfish", "goon fish"],
        health: 5,
        power_level: 1,
        max_spawn: 6,
        favorite_moon: "march",
        state: 0,
        location: "indoor"
    },

    barber = {
        names: ["barber"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 1,
        favorite_moon: "embrion",
        state: 2,
        location: "indoor"
    },

    bracken = { 
        names: ["bracken", "flowerman"],
        health: 5,
        power_level: 3,
        max_spawn: 1,
        favorite_moon: "vow",
        state: 2,
        location: "indoor"
    },

    spider = {
        names: ["bunker spider", "spunker bider"],
        health: 5,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "experimentation",
        state: 1,
        location: "indoor"
    },

    butler = {
        names: ["butler"],
        health: 8,
        power_level: 2,
        max_spawn: 7,
        favorite_moon: "dine",
        state: 2,
        location: "indoor"
    },

    cadaver = {
        names: ["cadaver growths", "cadavers"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "adamance",
        state: 1,
        location: "indoor"
    },

    cadaverBloom = {
        names: ["cadaver bloom"],
        health: 4,
        power_level: 3,
        max_spawn: 8,
        favorite_moon: "adamance",
        state: 2,
        location: "indoor/outdoor"
    },

    coil = {
        names: ["coilhead", "coil head"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 5,
        favorite_moon: "offense",
        state: 2,
        location: "indoor"
    },

    girl = {
        names: ["ghost girl"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "rend",
        state: 2,
        location: "indoor/outdoor"
    },

    lootBug = {
        names: ["hoarding bug", "loot bug", "lootbug", "boot lug", "bootlug"],
        health: 3,
        power_level: 1,
        max_spawn: 8,
        favorite_moon: "embrion",
        state: 1,
        location: "indoor"
    },

    slime = {
        names: ["slime", "blob", "hygrodere"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 2,
        favorite_moon: "offense",
        state: 2,
        location: "indoor"
    },

    jester = {
        names: ["jester", "jack in the box"],
        health: Number.NaN,
        power_level: 3,
        max_spawn: 1,
        favorite_moon: "rend",
        state: 2,
        location: "indoor"
    },

    maneater = {
        names: ["maneater", "baby"],
        health: 5,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "vow",
        state: 1,
        location: "indoor/outdoor"
    },

    masked = {
        names: ["masked", "mimic"],
        health: 4,
        power_level: 1,
        max_spawn: 10,
        favorite_moon: "artifice",
        state: 2,
        location: "indoor/outdoor"
    },

    nutcracker = {
        names: ["nutcracker", "toy soilder", "crutknacker", "crut knacker"],
        health: 5,
        power_level: 1,
        max_spawn: 10,
        favorite_moon: "rend",
        state: 2,
        location: "indoor"
    },
    
    spore = {
        names: ["spore lizard", "lore spizard"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 2,
        favorite_moon: "embrion",
        state: 1,
        location: "indoor"
    },

    thumper = {
        names: ["thumper"],
        health: 4,
        power_level: 3,
        max_spawn: 4,
        favorite_moon: "offense",
        state: 2,
        location: "indoor"
    },

    baboonHawk = {
        names: ["baboon hawk", "opps", "ababa", "ops"],
        health: 4,
        power_level: 0.5,
        max_spawn: 15,
        favorite_moon: "adamance",
        state: 2,
        location: "outdoor"
    },

    worm = {
        names: ["earth leviathan", "worm", "sand worm"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 3,
        favorite_moon: "assurance",
        state: 2,
        location: "outdoor"
    },

    dogs = {
        names: ["dog", "mouthdog", "eyeless dog"],
        health: 12,
        power_level: 2,
        max_spawn: 8,
        favorite_moon: "titan",
        state: 2,
        location: "outdoor"
    },

    feiopar = {
        names: ["feiopar", "fazbear"],
        health: 4,
        power_level: 2,
        max_spawn: 6,
        favorite_moon: "vow",
        state: 2,
        location: "outdoor"
    },

    giant = {
        names: ["forrest keeper", "giant"],
        health: 38,
        power_level: 3,
        max_spawn: 3,
        favorite_moon: "dine",
        state: 2,
        location: "outdoor"
    },

    bees = {
        names: ["bees", "circuit bees"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 6,
        favorite_moon: "march",
        state: 1,
        location: "outdoor"
    },

    bird = {
        names: ["bird", "giant sapsucker"],
        health: 28,
        power_level: 4,
        max_spawn: 1,
        favorite_moon: "vow",
        state: 1,
        location: "outdoor"
    },

    fox = {
        names: ["kidnapper fox"],
        health: 7,
        power_level: 1,
        max_spawn: 1,
        favorite_moon: "none",
        state: 1,
        location: "outdoor"
    },

    manticoil = {
        names: ["manticoil"],
        health: 2,
        power_level: 1,
        max_spawn: 16,
        favorite_moon: "offense",
        state: 0,
        location: "outdoor"
    },

    locusts = {
        names: ["roaming locusts"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 5,
        favorite_moon: "experimentation",
        state: 0,
        location: "outdoor"
    },

    tulipSnakes = {
        names: ["tulip snakes"],
        health: 1,
        power_level: 0.5,
        max_spawn: 12,
        favorite_moon: "adamance",
        state: 0,
        location: "indoor/outdoor"
    },

    vainShroud = {
        names: ["vain shroud"],
        health: Number.NaN,
        power_level: 0,
        max_spawn: 20,
        favorite_moon: "none",
        state: 0,
        location: "outdoor"
    },

    // AT BOTTOM TO GIVE PRIORITY TO BEES, WORM AND SAPSUCKER

    butlerBees = {
        names: ["butler bees", "mask hornets"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 7,
        favorite_moon: "dine",
        state: 2,
        location: "indoor"
    },

    oldBird = {
        names: ["radmech", "old bird", "bold ird"],
        health: Number.NaN,
        power_level: 3,
        max_spawn: 20,
        favorite_moon: "embrion",
        state: 2,
        location: "outdoor"
    },

    snare = {
        names: ["snare flea", "head worm", "flare snea"],
        health: 3,
        power_level: 1,
        max_spawn: 4,
        favorite_moon: "assurance",
        state: 2,
        location: "indoor"
    },
]


let goal = creatures[Math.floor(Math.random() * creatures.length)];
let pastGuesses = [];
let credits = 60;
let win = false;

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("user-in").focus();

    document.getElementById("screen").addEventListener("click", () => {
        document.getElementById("user-in").focus();
    })

    const userInput = document.getElementById("user-in");

    userInput.addEventListener("keypress", (event) => {

        if (event.key == "Enter") {

            if (userInput.value.toLowerCase() === "help") {
                displayHelpMessage();
            } else if (userInput.value.toLowerCase() === "again" || userInput.value.toLowerCase() === "try again") {
                if (credits === 0 || win) {
                    pastGuesses = [];
                    win = false;
                    updateCreditCount(60);
                    goal = creatures[Math.floor(Math.random() * creatures.length)];
                    clearDisplays();
                }
            } else {

                let guess = checkInput(userInput.value.toLowerCase());

                if (credits > 0 && guess !== null) {
                    updateCreditCount(credits - 10);
                    displayCreatureData(guess)

                    if (goal.names.includes(guess.name)) {
                        displayMessage("Congratulations! You got it!");
                        userInput.value = "";
                        win = true;
                        return;
                    }

                } else {
                    console.log("Invalid Guess")

                }

                if (credits === 0) {
                    displayMessage(`Sorry, the correct answer was ${goal.names[0].toUpperCase()}`)
                }

            }

            userInput.value = "";
        }
    });
});

function updateCreditCount(newCount) {
    credits = newCount;
    document.getElementById("credits-value").innerText = credits.toString();
}

function clearDisplays() {

    const feedbackElem = document.getElementById("feedback");

    while(feedbackElem.hasChildNodes()) {
        feedbackElem.removeChild(feedbackElem.firstChild);
    }
}

function checkInput(user_in) {
    for (creature of creatures) {
        if (!alreadyGuessed(creature)) {
            for (c_name of creature.names) {
                if (c_name.search(user_in) !== -1) {
                    pastGuesses.push(creature);
                    return {
                        name: c_name,
                        health: creature.health,
                        power_level: creature.power_level,
                        max_spawn: creature.max_spawn,
                        favorite_moon: creature.favorite_moon,
                        state: creature.state,
                        location: creature.location
                    };
                }
            }
        }
    }

    return null;
}

function alreadyGuessed(creature) {
    for (pastGuess of pastGuesses) {
        if (pastGuess === creature) {
            return true;
        }
    }
    return false;
}

function displayHelpMessage() {

    let wrapper = document.createElement("span");
    wrapper.style.marginTop = "1.5rem";

    let incorrect = document.createElement("span");
    incorrect.textContent = "Incorrect is gray; ";
    incorrect.classList.add("incorrect")

    let correct = document.createElement("span");
    correct.textContent = "Correct is green; ";
    correct.classList.add("correct")

    let partial = document.createElement("span");
    partial.textContent = "Partially Correct is yellow; ";
    partial.classList.add("partial")

    let high = document.createElement("span");
    high.textContent = "Too high is teal; ";
    high.classList.add("higher")

    let low = document.createElement("span");
    low.textContent = "Too low is red; ";
    low.classList.add("lower")

    wrapper.appendChild(correct);
    wrapper.appendChild(incorrect);
    wrapper.appendChild(partial);
    wrapper.appendChild(high);
    wrapper.appendChild(low);


    document.getElementById("feedback").appendChild(wrapper);
}

function displayMessage(message) {

    messageElem = document.createElement("span");
    messageElem.textContent = message;
    messageElem.classList.add("correct");
    messageElem.style.marginTop = "1.5rem"

    document.getElementById("feedback").appendChild(messageElem);

}

function displayCreatureData(guess) {

    // <span>
    //     <span>Creature Name: </span>
    //     <span>xhp, </span>
    //     <span>x power, </span>
    //     <span>Max x spawns, </span>
    //     <span>Moon, </span>
    //     <span>hostility, </span>
    //     <span>location  </span>
    // </span>

    const wrapper = document.createElement("span");

    const name = document.createElement("span");
    name.textContent = `${guess.name.toLocaleUpperCase()}: `;
    if (goal.names.includes(guess.name)) {
        name.classList.add("correct");
    }

    const hp = document.createElement("span");
    hp.innerText = `${Number.isNaN(guess.health) ? "INVINCIBLE" : `${guess.health}hp`}, `;
    if (guess.health === goal.health || (Number.isNaN(guess.health) && Number.isNaN(goal.health))) {
        hp.classList.add("correct");
    } else if (guess.health < goal.health || Number.isNaN(goal.health)) {
        hp.classList.add("lower");
    } else if (guess.health > goal.health || Number.isNaN(guess.health)) {
        hp.classList.add("higher")
    }

    const power = document.createElement("span");
    power.innerText = `${guess.power_level} power, `;
    if (guess.power_level === goal.power_level) {
        power.classList.add("correct");
    } else if (guess.power_level < goal.power_level) {
        power.classList.add("lower");
    } else if (guess.power_level > goal.power_level) {
        power.classList.add("higher")
    }

    const spawns = document.createElement("span");
    spawns.innerText = `Max ${guess.max_spawn} ${guess.max_spawn === 1 ? "spawn" : "spawns"}, `
    if (guess.max_spawn === goal.max_spawn) {
        spawns.classList.add("correct");
    } else if (guess.max_spawn < goal.max_spawn) {
        spawns.classList.add("lower");
    } else if (guess.max_spawn > goal.max_spawn) {
        spawns.classList.add("higher")
    }

    const moon = document.createElement("span");
    moon.innerText = `${guess.favorite_moon.toLocaleUpperCase()}, `
    if (guess.favorite_moon === goal.favorite_moon) {
        moon.classList.add("correct");
    }

    const hostility = document.createElement("span");
    hostility.innerText = `${getHostility(guess.state)}, `
    if (guess.state === goal.state) {
        hostility.classList.add("correct");
    } else if (goal.state === 1) {
        hostility.classList.add("partial");
    }

    const location = document.createElement("span");
    location.innerText = `${guess.location.toLocaleUpperCase()}`;
    if (guess.location === goal.location) {
        location.classList.add("correct");
    } else if (goal.location === "indoor/outdoor") {
        location.classList.add("partial");
    }

    wrapper.appendChild(name);
    wrapper.appendChild(hp);
    wrapper.appendChild(power);
    wrapper.appendChild(spawns);
    wrapper.appendChild(moon);
    wrapper.appendChild(hostility);
    wrapper.appendChild(location);

    wrapper.classList.add("guess");

    document.getElementById("feedback").appendChild(wrapper);


}

function getHostility(value) {
    switch(value) {
        case 0:
            return "PASSIVE";
        case 1:
            return "NEUTRAL";
        case 2:
            return "HOSTILE";
    }
}
