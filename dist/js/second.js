//  Вывести текущий день и время на страницу в таком формате
// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время: 12:05:15 PM
// До нового года осталось 175 дней


function updateInfo() {
    const now = new Date();

    const hour = now.getUTCHours();
    let greetingText = '';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Доброе утро';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Добрый день';
    } else if (hour >= 18 && hour < 23) {
        greetingText = 'Добрый вечер';
    } else {
        greetingText = 'Доброй ночи';
    }

    document.getElementById('greeting').textContent = greetingText;

    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const weekdayName = weekdays[now.getUTCDay()];
    document.getElementById('weekday').textContent = weekdayName;

    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} UTC`;
    document.getElementById('current-time').textContent = timeString;

    const nextYear = now.getUTCFullYear() + 1;
    const janFirstNextYear = new Date(Date.UTC(nextYear, 0, 1));
    const diffTime = janFirstNextYear - now; // разница в миллисекундах
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days-to-newyear').textContent = daysLeft;
}

// Обновляем сразу и далее каждую минуту
updateInfo();
setInterval(updateInfo, 60000);