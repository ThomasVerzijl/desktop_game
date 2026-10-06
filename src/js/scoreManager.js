import { updateUI } from '../main.js'
export const resources = {
    wood: 0,
    ores: 0,
    food: 0
};
let productionRates = {
    wood: 1,  // Voegt 5 hout per seconde toe
    ores: 2,
    food: 0.5
};
let lastUpdate = Date.now();

const productionPerSecond = 5;

setInterval(() => {
    const now = Date.now();
    const deltaTime = (now - lastUpdate) / 1000;
    lastUpdate = now;



    Object.keys(resources).forEach(resource => {
        const gained = productionRates[resource] * deltaTime;
        addResource(resource, gained);

    });


}, 100);

export function addResource(type, amount) {
    if (type in resources) {
        resources[type] += amount
        console.log("added " + type + " +" + amount + " to your resources")
        updateUI()
    }
    else {
        console.log("the item is not in the resources" + type)
    }
}