const tasks = {
  waterFlowers: {
    description: "Help the goat water flowers",
    action: () => {
      console.log("Watering...");
      completeTask("waterFlowers");
    }
  }
};

function completeTask(taskId) {
  if (!gameState.tasksCompleted.includes(taskId)) {
    gameState.tasksCompleted.push(taskId);
    saveProgress();
    console.log("Task completed:", taskId);
  }
}
