"use strict";

const totalTasks = 20;
const completedTasks = 11;

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
} else if (totalTasks === 0 && completedTasks === 0) {
  console.log("Задач пока нет");
} else {
  const remainingTasks = totalTasks - completedTasks;
  const progressPercent = completedTasks / totalTasks * 100;
  let taskStatus;

  if (completedTasks === 0) {
    taskStatus = "Не начато";
  } else if (completedTasks === totalTasks) {
    taskStatus = "Завершено";
  } else {
    taskStatus = "В работе";
  }

  console.log(`Всего задач: ${totalTasks}`);
  console.log(`Выполнено: ${completedTasks}`);
  console.log(`Осталось: ${remainingTasks}`);
  console.log(`Прогресс: ${progressPercent.toFixed(1)}%`);
  console.log(`Статус: ${taskStatus}`);
}
