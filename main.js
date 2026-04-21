// 0 is passive
// 1 is neutral
// 2 is hostile

const creatures = [
    gunkfish = {
        names: ["backwater+gunkfish", "goon+fish"],
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

    spider = {
        names: ["bunker+spider", "spunker+bider"],
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
        names: ["cadaver+growths", "cadavers"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "adamance",
        state: 1,
        location: "indoor"
    },

    cadaverBloom = {
        names: ["cadaver+bloom"],
        health: 4,
        power_level: 3,
        max_spawn: 8,
        favorite_moon: "adamance",
        state: 2,
        location: "indoor/outdoor"
    },

    coil = {
        names: ["coilhead", "coil+head"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 5,
        favorite_moon: "offense",
        state: 2,
        location: "indoor"
    },

    girl = {
        names: ["ghost+girl", "girl"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 1,
        favorite_moon: "rend",
        state: 2,
        location: "indoor/outdoor"
    },

    lootBug = {
        names: ["hoarding+bug", "loot+bug", "lootbug", "boot+lug", "bootlug"],
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
        names: ["jester", "jack+in+the+box"],
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
        names: ["nutcracker", "toy+soilder", "crutknacker", "crut+knacker", "crutnacker", "crut+nacker"],
        health: 5,
        power_level: 1,
        max_spawn: 10,
        favorite_moon: "rend",
        state: 2,
        location: "indoor"
    },
    
    spore = {
        names: ["spore+lizard", "lore+spizard"],
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
        names: ["baboon+hawk", "opps", "ababa", "ops"],
        health: 4,
        power_level: 0.5,
        max_spawn: 15,
        favorite_moon: "adamance",
        state: 2,
        location: "outdoor"
    },

    worm = {
        names: ["earth+leviathan", "worm", "sand+worm"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 3,
        favorite_moon: "assurance",
        state: 2,
        location: "outdoor"
    },

    dogs = {
        names: ["dog", "mouthdog", "eyeless+dog"],
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
        names: ["forrest+keeper", "giant"],
        health: 38,
        power_level: 3,
        max_spawn: 3,
        favorite_moon: "dine",
        state: 2,
        location: "outdoor"
    },

    bees = {
        names: ["bees", "circuit+bees"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 6,
        favorite_moon: "march",
        state: 1,
        location: "outdoor"
    },

    bird = {
        names: ["bird", "giant+sapsucker"],
        health: 28,
        power_level: 4,
        max_spawn: 1,
        favorite_moon: "vow",
        state: 1,
        location: "outdoor"
    },

    fox = {
        names: ["kidnapper+fox"],
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
        names: ["roaming+locusts", "locusts"],
        health: Number.NaN,
        power_level: 1,
        max_spawn: 5,
        favorite_moon: "experimentation",
        state: 0,
        location: "outdoor"
    },

    tulipSnakes = {
        names: ["tulip+snakes"],
        health: 1,
        power_level: 0.5,
        max_spawn: 12,
        favorite_moon: "adamance",
        state: 0,
        location: "indoor/outdoor"
    },

    vainShroud = {
        names: ["vain+shroud"],
        health: Number.NaN,
        power_level: 0,
        max_spawn: 20,
        favorite_moon: "none",
        state: 0,
        location: "outdoor"
    },

    // AT BOTTOM TO GIVE PRIORITY TO BEES, WORM, MANEATER AND SAPSUCKER

    bracken = { 
        names: ["bracken", "flowerman"],
        health: 5,
        power_level: 3,
        max_spawn: 1,
        favorite_moon: "vow",
        state: 2,
        location: "indoor"
    },

    butlerBees = {
        names: ["butler+bees", "mask+hornets"],
        health: Number.NaN,
        power_level: 2,
        max_spawn: 7,
        favorite_moon: "dine",
        state: 2,
        location: "indoor"
    },

    oldBird = {
        names: ["radmech", "old+bird", "bold+ird", "oldbird", "boldird"],
        health: Number.NaN,
        power_level: 3,
        max_spawn: 20,
        favorite_moon: "embrion",
        state: 2,
        location: "outdoor"
    },

    snare = {
        names: ["snare+flea", "head+worm", "flare+snea"],
        health: 3,
        power_level: 1,
        max_spawn: 4,
        favorite_moon: "assurance",
        state: 2,
        location: "indoor"
    },
]


const moons = [

    experimentation = {
        names: ["41+experimentation", "experimentation"],
        nighttime: 8,
        indoor: 4,
        indoor_enemy: "bunker spider",
        outdoor_enemy: "eyeless dog",
        scrap: "v-type",
        interior: "factory",
        size: 1.00
    },

    assurance = {
        names: ["220+assurance", "assurance"],
        nighttime: 6,
        indoor: 8,
        indoor_enemy: "snare flea",
        outdoor_enemy: "earth leviathan",
        scrap: "bottles",
        interior: "factory",
        size: 1.00
    },

    vow = {
        names: ["56+vow", "vow"],
        nighttime: 6,
        indoor: 7,
        indoor_enemy: "bracken",
        outdoor_enemy: "forest keeper",
        scrap: "egg beater",
        interior: "factory",
        size: 1.15
    },

    march = {
        names: ["61+march", "march"],
        nighttime: 12,
        indoor: 14,
        indoor_enemy: "thumper",
        outdoor_enemy: "forest keeper",
        scrap: "big bolt",
        interior: "factory",
        size: 1.75
    },

    offense = {
        names: ["21+offense", "offense"],
        nighttime: 8,
        indoor: 12,
        indoor_enemy: "thumper",
        outdoor_enemy: "eyeless dog",
        scrap: "large axle",
        interior: "mineshaft",
        size: 1.25
    },

    adamance = {
        names: ["20+adamance", "adamance"],
        nighttime: 11,
        indoor: 13,
        indoor_enemy: "cadaver growths",
        outdoor_enemy: "baboon hawk",
        scrap: "bottles",
        interior: "factory",
        size: 1.18
    },

    rend = {
        names: ["85+rend", "rend"],
        nighttime: 6,
        indoor: 10,
        indoor_enemy: "nutcracker",
        outdoor_enemy: "eyeless dog",
        scrap: "easter egg",
        interior: "mansion",
        size: 1.80
    },

    dine = {
        names: ["7+dine", "dine"],
        nighttime: 9,
        indoor: 10,
        indoor_enemy: "butler",
        outdoor_enemy: "forest keeper",
        scrap: "foot",
        interior: "mansion",
        size: 1.80
    },

    titan = {
        names: ["8+titan", "titan"],
        nighttime: 7,
        indoor: 18,
        indoor_enemy: "jester",
        outdoor_enemy: "eyeless dog",
        scrap: "big bolt",
        interior: "factory",
        size: 2.20
    },

    artifice = {
        names: ["68+artifice", "artifice"],
        nighttime: 13,
        indoor: 13,
        indoor_enemy: "bunker spider",
        outdoor_enemy: "old bird",
        scrap: "robot toy",
        interior: "mineshaft",
        size: 1.80
    },

    embrion = {
        names: ["5+embrion", "embrion"],
        nighttime: 70,
        indoor: 8,
        indoor_enemy: "hoarding bug",
        outdoor_enemy: "old bird",
        scrap: "tattered metal sheet",
        interior: "factory",
        size: 1.10
    },

    gordian = {
        names: ["71+gordian", "gordian", "company"],
        nighttime: 0,
        indoor: 0,
        indoor_enemy: "n/a",
        outdoor_enemy: "n/a",
        scrap: "n/a",
        interior: "n/a",
        size: 1.00
    },

    liquidation = {
        names: ["44+liquidation", "liquidation"],
        nighttime: 13,
        indoor: 13,
        indoor_enemy: "n/a",
        outdoor_enemy: "n/a",
        scrap: "n/a",
        interior: "mansion",
        size: 1.60
    },

];


let gameMode = "";
let goal = null;
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
            console.log(pastGuesses);

            if (document.getElementById("intro") !== null) {
                clearDisplays()
            }

            if (userInput.value.toLowerCase() === "help") {
                displayHelpMessage();
            } else if (gameMode === "" && "moons".search(userInput.value.toLowerCase()) === 0) {

                gameMode = "m";
                goal = moons[Math.floor(Math.random() * moons.length)];

            } else if (gameMode === "" && "creatures".search(userInput.value.toLowerCase()) === 0) {

                gameMode = "c";
                goal = creatures[Math.floor(Math.random() * creatures.length)];

            } /*else if ("scraps".search(userInput.value.toLowerCase()) === 0 || "items".search(userInput.value.toLowerCase()) === 0) {

                gameMode = "s";

            }*/ else if (userInput.value.toLowerCase() === "again" || userInput.value.toLowerCase() === "try again") {
                if (credits === 0 || win) {
                    pastGuesses = [];
                    win = false;
                    updateCreditCount(60);
                    goal = "";
                    gameMode = "";
                    clearDisplays();
                }
            } else {

                let guess = checkInput(userInput.value.toLowerCase());

                if (credits > 0 && guess !== null) {
                    updateCreditCount(credits - 10);
                    displayGuessData(guess)

                }

                if (guess !== null && goal.names.includes(guess.names.replaceAll("-", " "))) {
                    displayMessage("Congratulations! You got it!");
                    pastGuesses = [];
                    userInput.value = "";
                    win = true;
                    goal = "";
                    gameMode = "";
                    document.getElementById("feedback").scrollTo(0, document.getElementById("feedback").scrollHeight);
                    return;
                } else if (credits === 0) {
                    displayMessage(`Sorry, the correct answer was ${goal.names[0].toUpperCase()}`);
                    goal = "";
                    gameMode = "";
                    pastGuesses = [];
                    userInput.value = "";
                }

            }

            document.getElementById("feedback").scrollTo(0, document.getElementById("feedback").scrollHeight);

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

    user_in = user_in.replaceAll("-"," ");
    user_in = user_in.replaceAll("_"," ");
    user_in = user_in.replaceAll("."," ");
    user_in = user_in.replaceAll(" ", "+");

    if (gameMode === "c") {

        return checkForMatch(user_in, creatures);

    } else if (gameMode === "m") {

        return checkForMatch(user_in, moons);
    
    }

    if (gameMode === "") {
        c_match = checkForMatch(user_in, creatures);
        m_match = checkForMatch(user_in, moons);

        if (c_match !== null) {
            gameMode = "c";
            goal = creatures[Math.floor(Math.random() * creatures.length)];
            return c_match;
        } else if (m_match !== null) {
            gameMode = "m";
            goal = moons[Math.floor(Math.random() * moons.length)];
            return m_match;
        }
    }

    return null;
}

function checkForMatch(user_in, collection) {
    for (obj of collection) {
        if (!alreadyGuessed(obj)) {
            for (nameCollection of obj.names) {
                for (nameOption of nameCollection.split(" ")) {
                    if (nameOption.search(user_in) === 0 || nameOption === user_in) {
                        pastGuesses.push(obj);
                        
                        if (Object.hasOwn(obj, "size")) { // Moon
                            return {
                                names: nameCollection.replaceAll("+", "-"),
                                nighttime: obj.nighttime,
                                indoor: obj.indoor,
                                indoor_enemy: obj.indoor_enemy,
                                outdoor_enemy: obj.outdoor_enemy,
                                scrap: obj.scrap,
                                interior: obj.interior,
                                size: obj.size
                            };
                        } else if (Object.hasOwn(obj, "health")) { // Creature
                            return {
                                names: nameCollection.replaceAll("+", " "),
                                health: obj.health,
                                power_level: obj.power_level,
                                max_spawn: obj.max_spawn,
                                favorite_moon: obj.favorite_moon,
                                state: obj.state,
                                location: obj.location
                            };
                        }
                    }
                }
            }
        } else {
            console.log("aready guessed");
        }
    }

    return null
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
    document.getElementById("feedback").appendChild(document.createElement("br"));
}

function displayMessage(message) {

    messageElem = document.createElement("span");
    messageElem.textContent = message;
    messageElem.classList.add("correct");
    messageElem.style.marginTop = "1.5rem"

    document.getElementById("feedback").appendChild(messageElem);

}

function displayGuessData(guess) {
    if (gameMode === "m") {
        displayMoonData(guess);
    } else if (gameMode === "c") {
        displayCreatureData(guess);
    }
}

function displayMoonData(guess) {

    // <span>
    //     <span>Moon Name: </span>
    //     <span>interior, </span>
    //     <span>scrap, </span>
    //     <span>1.00x, </span>
    //     <span>Indoor Power: x , </span>
    //     <span>Outdoor Power: x, </span>
    //     <span>Indoor Enemy,  </span>
    //     <span>Outdoor Enemy  </span>
    // </span>

    const wrapper = document.createElement("span");

    const name = document.createElement("span");
    name.textContent = `${guess.names.toLocaleUpperCase()}: `;
    if (goal.names.includes(guess.names.replaceAll("-", "+"))) {
        name.classList.add("correct");
    }

    const interior = document.createElement("span");
    interior.innerText = `${guess.interior.toUpperCase()}, `;
    if (guess.interior === goal.interior) {
        interior.classList.add("correct");
    }

    const scrap = document.createElement("span");
    scrap.innerText = `${guess.scrap.toUpperCase()}, `;
    if (guess.scrap === goal.scrap) {
        scrap.classList.add("correct");
    }

    const size = document.createElement("span");
    size.innerText = `${guess.size}x, `;
    if (guess.size === goal.size) {
        size.classList.add("correct");
    } else if (guess.size < goal.size) {
        size.classList.add("lower");
    } else if (guess.size > goal.size) {
        size.classList.add("higher")
    }

    const i_power = document.createElement("span");
    i_power.innerText = `Indoor Power: ${guess.indoor}, `;
    if (guess.indoor === goal.indoor) {
        i_power.classList.add("correct");
    } else if (guess.indoor < goal.indoor) {
        i_power.classList.add("lower");
    } else if (guess.indoor > goal.indoor) {
        i_power.classList.add("higher")
    }

    const e_power = document.createElement("span");
    e_power.innerText = `Outdoor Power: ${guess.nighttime}, `;
    if (guess.nighttime === goal.nighttime) {
        e_power.classList.add("correct");
    } else if (guess.nighttime < goal.nighttime) {
        e_power.classList.add("lower");
    } else if (guess.nighttime > goal.nighttime) {
        e_power.classList.add("higher")
    }

    const i_enemy = document.createElement("span");
    i_enemy.innerText = `${guess.indoor_enemy.toUpperCase()}, `;
    if (guess.indoor_enemy === goal.indoor_enemy) {
        i_enemy.classList.add("correct");
    }

    const e_enemy = document.createElement("span");
    e_enemy.innerText = `${guess.outdoor_enemy.toUpperCase()}, `;
    if (guess.outdoor_enemy === goal.outdoor_enemy) {
        e_enemy.classList.add("correct");
    }

    wrapper.appendChild(name);
    wrapper.appendChild(interior);
    wrapper.appendChild(scrap);
    wrapper.appendChild(size);
    wrapper.appendChild(i_power);
    wrapper.appendChild(e_power);
    wrapper.appendChild(i_enemy);
    wrapper.appendChild(e_enemy);

    wrapper.classList.add("guess");

    document.getElementById("feedback").appendChild(wrapper);

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
    name.textContent = `${guess.names.toUpperCase()}: `;
    if (goal.names.includes(guess.names)) {
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
