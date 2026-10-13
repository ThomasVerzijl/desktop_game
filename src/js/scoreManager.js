import { getWorkers } from './hireManager.js';

export const resources = {
    wood: 0,
    ores: 0,
    food: 0,
    gold: 0
};

export function gameTick(deltaTime) {
    const currentWorkers = getWorkers();

    currentWorkers.forEach(worker => {
        if (worker.assignedJob !== null) {
            addResource(worker.assignedJob, worker.skills[worker.assignedJob] * deltaTime);
        }
    });
}

export function addResource(resource, amount) {
    if (resources[resource] !== undefined) {
        resources[resource] += amount;
    }
}