"use strict";

{
  const totalText = "20";
  const completedText = "11";

  if (typeof totalText !== "string" || typeof completedText !== "string") {
    console.log("Ошибка: входные значения должны быть строками.");
  } else {
    const trimmedTotal = totalText.trim();
    const trimmedCompleted = completedText.trim();

    if (trimmedTotal === "" || trimmedCompleted === "") {
      console.log("Ошибка: ввод не должен быть пустым.");
    } else {
      const totalTasks = Number(trimmedTotal);
      const completedTasks = Number(trimmedCompleted);

      if (totalTasks % 1 !== 0 || completedTasks % 1 !== 0) {
        console.log("Ошибка: количество задач должно быть целым числом.");
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
    }
  }
}
