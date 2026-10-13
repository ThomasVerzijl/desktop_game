const workers = [];

let maxLevel = 10;

const container = document.querySelector('.workers-container');


function randomSkill() {

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

    const workerCard = document.createElement("div");
    workerCard.className = "worker-card";

    // Stats Display
    const statsText = document.createElement("p");
    statsText.textContent =
        `${worker.name} | ` +
        `Wood: ${worker.skills.wood} | ` +
        `Food: ${worker.skills.food} | ` +
        `Ores: ${worker.skills.ores}`;
    workerCard.appendChild(statsText);


    const statusText = document.createElement("p");
    statusText.textContent = "Assigned Job: None";
    workerCard.appendChild(statusText);

    const jobs = ["wood", "food", "ores"];

    jobs.forEach(job => {
        const btn = document.createElement("button");
        btn.textContent = `Assign ${job.toUpperCase()}`;


        btn.addEventListener("click", () => {

            worker.assignedJob = job;

            statusText.textContent = `Assigned Job: ${job.toUpperCase()}`;

            console.log(`${worker.name} is now working on ${job}`);
        });

        workerCard.appendChild(btn);
    });

    container.appendChild(workerCard);

    return worker;
}

export function getWorkers() {

    return workers;
}
