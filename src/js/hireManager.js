const workers = [];

let maxLevel = 1000000;
let luckLevel = 5;

const maxLuckLevel = 5;
const baseRarity = 4;
const maxLuckEffect = 0.5;


// ==============================
// RANDOM SKILL
// ==============================

function randomSkill() {
    const random = Math.random();

    const luckEffect =
        ((luckLevel - 1) / (maxLuckLevel - 1)) * maxLuckEffect;

    const rarity = baseRarity * (1 - luckEffect);

    const percentage = random ** rarity;

    const skill = Math.floor(percentage * maxLevel) + 1;

    return Math.min(skill, maxLevel);
}


// ==============================
// CREATE WORKER
// ==============================

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


// ==============================
// TEST SETTINGS
// ==============================

const testAmount = 1000000;


// ==============================
// SKILL RESULTS
// ==============================

const skillResults = {};

for (let level = 1; level <= maxLevel; level++) {
    skillResults[level] = 0;
}


// ==============================
// GENERATE TEST WORKERS
// ==============================

for (let i = 1; i <= testAmount; i++) {
    const worker = createWorker(i);

    skillResults[worker.skills.wood]++;
    skillResults[worker.skills.ores]++;
    skillResults[worker.skills.food]++;
    console.log(`Worker ${worker.id} created with skills: Wood: ${worker.skills.wood}, Ores: ${worker.skills.ores}, Food: ${worker.skills.food}`);
}


// ==============================
// SHOW RESULTS
// ==============================

const totalSkills = testAmount * 3;

const results = [];

for (let level = 1; level <= maxLevel; level++) {

    const amount = skillResults[level];

    const percentage = (amount / totalSkills) * 100;

    results.push({
        level: level,
        amount: amount,
        percentage: `${percentage.toFixed(2)}%`
    });
}


console.log("==============================");
console.log("WORKER SKILL TEST");
console.log("==============================");

console.log(`Max level: ${maxLevel}`);
console.log(`Luck level: ${luckLevel}`);
console.log(`Workers: ${testAmount}`);
console.log(`Total skill rolls: ${totalSkills}`);

console.table(results);


// ==============================
// NORMAL HIRE
// ==============================

export function hireWorker() {

    const id = workers.length + 1;

    const worker = createWorker(id);

    workers.push(worker);

    console.table(workers);
}