const workers = [];

let maxLevel = 10;
let luckLevel = 1;

const maxLuckLevel = 5;
const baseRarity = 4;
const maxLuckEffect = 0.5;



function randomSkill() {
    const random = Math.random();

    const luckEffect =
        ((luckLevel - 1) / (maxLuckLevel - 1)) * maxLuckEffect;

    const rarity = baseRarity * (1 - luckEffect);

    const percentage = random ** rarity;

    const skill = Math.floor(percentage * maxLevel) + 1;

    return Math.min(skill, maxLevel);
}



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




export function hireWorker() {
    const id = workers.length + 1;

    const worker = createWorker(id);

    workers.push(worker);

    console.table(workers);
}