export const resources = {
    wood: 0,
    ores: 0,
    food: 0,
    gold: 0
};

export function addResource(resource, amount) {
    if (resources[resource] !== undefined) {
        resources[resource] += amount;
    }
}