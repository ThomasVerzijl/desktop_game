import { addResource, resources } from './js/scoreManager.js';
import { hireWorker } from './js/hireManager.js';
import './js/quitgame.js';

export function updateUI() {
  for (const key in resources) {
    const element = document.querySelector(`#${key}`);

    if (element) {
      element.textContent = Math.floor(resources[key] * 10) / 10;
    }
  }
}

document.querySelectorAll('.harvest-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const resourceType = e.target.dataset.resource;
    const amount = Number(e.target.dataset.amount);

    addResource(resourceType, amount);
    updateUI();
  });
});

document.querySelector('.hire-btn').addEventListener('click', () => {
  hireWorker();
});