"use strict";

{
  const totalTasks = 20;
  const completedTasks = 11;
  const dailyLimit = 6;

  if (typeof totalTasks !== "number" || typeof completedTasks !== "number") {
    console.log("Ошибка: количество задач должно быть числом.");
  } else if (totalTasks % 1 !== 0 || completedTasks % 1 !== 0) {
    console.log("Ошибка: количество задач должно быть целым.");
  } else if (totalTasks < 0 || completedTasks < 0) {
    console.log("Ошибка: количество задач не может быть отрицательным.");
  } else if (totalTasks > 1000) {
    console.log("Ошибка: общее количество задач не должно превышать 1000.");
  } else if (completedTasks > totalTasks) {
    console.log("Ошибка: выполнено больше задач, чем существует.");
  } else if (typeof dailyLimit !== "number") {
    console.log("Ошибка: дневная норма должна быть числом.");
  } else if (dailyLimit % 1 !== 0) {
    console.log("Ошибка: дневная норма должна быть целым числом.");
  } else if (dailyLimit < 1 || dailyLimit > 1000) {
    console.log("Ошибка: дневная норма должна быть от 1 до 1000.");
  } else {
    let remainingTasks = totalTasks - completedTasks;
    let day = 0;

    if (remainingTasks === 0) {
      console.log("Все задачи уже выполнены.");
    } else {
      console.log(`Осталось задач: ${remainingTasks}`);
    }

    while (remainingTasks > 0) {
      day++;
      let tasksToday = dailyLimit;
      if (tasksToday > remainingTasks) {
        tasksToday = remainingTasks;
      }
      remainingTasks -= tasksToday;
      console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
    }

    console.log(`Потребуется дней: ${day}`);
  }
}
