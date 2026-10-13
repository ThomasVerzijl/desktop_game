const workers = [];

let maxLevel = 10000; // Pas dit aan naar 100, 150, 200, etc.

const container = document.querySelector('.workers-container');

// RANDOM SKILL FORMULE (Schaalt zeldzaamheid direct met maxLevel)
function randomSkill() {
    // Verhoog de basis naar 6.0 om waarden boven 50/70/90 veel zeldzamer te maken
    const rarity = 4;

    const roll = Math.pow(Math.random(), rarity);

    return Math.floor(roll * maxLevel) + 1;
}

// CREATE WORKER
function createWorker(id) {
    return {
        id: id,
        name: `Worker ${id}`,
        skills: {
            wood: randomSkill(),
            ores: randomSkill(),
            food: randomSkill()
        },
        assignedJob: null
    };
}

// HIRE WORKER
export function hireWorker() {
    const id = workers.length + 1;
    const worker = createWorker(id);
    workers.push(worker);

    const workerDiv = document.createElement("div");
    workerDiv.textContent =
        `${worker.name} | ` +
        `Wood: ${worker.skills.wood} | ` +
        `Food: ${worker.skills.food} | ` +
        `Ores: ${worker.skills.ores}`;

    container.appendChild(workerDiv);

    return worker;
}

export function getWorkers() {
    return workers;
}