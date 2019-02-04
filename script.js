// Игра найди клад
// Получить случайное число от 0 до size - 1
let getRandomNumber = (size) => {
    return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (targrt)
let getDistance = (event, target) => {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}
// Получить для рассояния строку подсказки
let getDistanceHit = (distance) => {
    if (distance < 10) {
        return "Обожжешься";
    } else if (distance < 20) {
        return "Оень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 450) {
        return "Жуть как холодно!";
    } else {
        return "Замерзнешь!";
    }
};
// Создаем переменные
let width = 600;
let height = 600;
let clicks = 0;
// Случайная позиция клада
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
// Добавляем элементу img обработчик клика
$("#map").click((event) => {
    clicks++;
    // Получаем расстояние от места клика до клада
    let distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    let distanceHit = getDistanceHit(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHit);
    // Создаем переменную с подсказкой, сколько кликов осталось
    let willBe = 13 - clicks;
    // Записываем в элемент #willBe сколько осталось хордов
    $("#willBe").text("У вас осталось " + willBe + " ходов!");
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 5) {
        alert("Поздравляем с победой! Вам понадобилось " + clicks + " кликов!");
    } if (clicks > 12) {
        alert("Вы проиграли!");
        window.location.reload(); 
    }
});
