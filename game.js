const { select } = require("@inquirer/prompts");

const random = Math.random();
let result = "";
let playerChoice = "";

const game = async () => {
    const selectGame = await select({
        message: "Which one you will choose?",
        choices: [
            {
                name: "Rock",
                value: "rock",
            },
            {
                name: "Paper",
                value: "paper",
            },
            {
                name: "Scissors",
                value: "scissors",
            },
        ],
    });
    let playerChoice = "";
    switch (selectGame) {
        case "rock":
            playerChoice = "rock";
            await difficult(playerChoice);
            break;
        case "paper":
            playerChoice = "paper";
            await difficult(playerChoice);
            break;
        case "scissors":
            playerChoice = "scissors";
            await difficult(playerChoice);
            break;
    }
};

const difficult = async (playerChoice) => {
    const selectDifficult = await select({
        message: "Choose a Difficult!",
        choices: [
            // {
            //     name: "Easy(100%)",
            //     value: "e",
            // },
            // {
            //     name: "Normal(50%)",
            //     value: "n",
            // },
            {
                name: "Hard(30%)",
                value: "h",
            },
            {
                name: "Insane(1%!!!)",
                value: "i",
            },
        ],
    });
    switch (selectDifficult) {
        case "e":
            await easy(playerChoice);
            break;
        case "n":
            await normal(playerChoice);
            break;
        case "h":
            await hard(playerChoice);
            break;
        case "insane":
            await noWay(playerChoice);
            break;
    }
};
const easy = async (playerChoice) => {
    console.clear();
    console.log("mode set: KID");
    console.log("YOU - " + "COMPUTER");

    if (playerChoice == "rock") {
        console.log("ROCK - SCISSORS");
    }
    if (playerChoice == "paper") {
        console.log("PAPER - ROCK");
    }
    if (playerChoice == "scissors") {
        console.log("SCISSORS - PAPER");
    }
    console.log("YOU WIN!!(aways in easy)");
    //  console.log("times winned: " + easyVictory);
    const endGame = await select({
        message: "Wanna Play Again?",
        choices: [
            {
                name: "Play Again!",
                value: "pA",
            },
            {
                name: "Exit",
                value: "e",
            },
        ],
    });

    switch (endGame) {
        case "pA":
            await game();
            break;
        case "e":
            console.log("Goodbye!");
            process.exit(0);
    }
};
const normal = async (playerChoice) => {
    console.clear();
    console.log("mode set: NORMAL ");
    console.log("YOU - " + "COMPUTER ");

    if (playerChoice == "rock") {
        if (random >= 0 && random <= 1 / 2) {
            result = "PAPER";
            console.log("ROCK - " + result);
            console.log("YOU LOSE :(");
        } else if (random >= 1 / 2 && random <= 1) {
            result = "SCISSORS";
            console.log("ROCK - " + result);
            console.log("YOU WIN!!");
        }
    }
    if (playerChoice == "paper") {
        if (random >= 0 && random <= 1 / 2) {
            result = "ROCK";
            console.log("PAPER - " + result);
            console.log("YOU WIN!!");
        } else if (random >= 1 / 2 && random <= 1) {
            result = "SCISSORS";
            console.log("PAPER - " + result);
            console.log("YOU LOSE :( ");
        }
    }
    if (playerChoice == "scissors") {
        if (random >= 0 && random <= 1 / 2) {
            result = "PAPER";
            console.log("SCISSORS - " + result);
            console.log("YOU WIN!!");
        } else if (random >= 1 / 2 && random <= 1) {
            result = "ROCK";
            console.log("SCISSORS - " + result);
            console.log("YOU LOSE :(");
        }
    }
    const endGame = await select({
        message: "Wanna Play Again?",
        choices: [
            {
                name: "Play Again!",
                value: "pA",
            },
            {
                name: "Exit",
                value: "e",
            },
        ],
    });

    switch (endGame) {
        case "pA":
            await game();
            break;
        case "e":
            console.log("Goodbye!");
            process.exit(0);
    }
};
const hard = async (playerChoice) => {
    let ramdom30 = Math.floor(Math.random() * 10 + 1);
    console.clear();
    console.log("mode set: HARD! ");
    console.log("YOU - " + "COMPUTER ");

    if (playerChoice == "rock") {
        if (ramdom30 >= 3) {
            result = "SCISSORS";
            console.log("ROCK - " + result);
            console.log("YOU LOSE!!");
        } else {
            console.log("ROCK - PAPER");
            console.log("YOU WIN!!");
        }
    }
    //PAREI AQUI, FALTA FAZER OS OUTROS HARD E O MODO INSANE. DEPOIS A OPÇÃO DE SALVAR A QUANTIDADE DE TENTATIVAS FEITAS (W/L)

    const endGame = await select({
        message: "Wanna Play Again?",
        choices: [
            {
                name: "Play Again!",
                value: "pA",
            },
            {
                name: "Exit",
                value: "e",
            },
        ],
    });

    switch (endGame) {
        case "pA":
            await game();
            break;
        case "e":
            console.log("Goodbye!");
            process.exit(0);
    }
};
const startGame = async () => {
    while (true) {
        const option = await select({
            message: "Welcome to Classic Rock Paper Scissors Game!",
            choices: [
                {
                    name: "Start!",
                    value: "startGame",
                },
                {
                    name: "Exit",
                    value: "exit",
                },
            ],
        });
        switch (option) {
            case "startGame":
                await game();
                break;
            case "exit":
                console.log("Goodbye!");
                process.exit(0);

            default:
        }
    }
};
startGame();
