function getTelegramInitData() {
    // Проверяем, доступен ли объект Telegram.WebApp
    if (window.Telegram && window.Telegram.WebApp) {
        return window.Telegram.WebApp.initData;
    } else {
        console.error("Telegram WebApp API недоступен");
        return null;
    }
}

// Функция для передачи initData в Unity
function sendInitDataToUnity() {
    const initData = getTelegramInitData();
    if (initData) {
        // Вызываем функцию Unity, передавая initData
        SendMessage('TelegramManager', 'OnReceiveInitData', initData);
    } else {
        console.error("Не удалось получить initData");
        SendMessage('TelegramManager', 'OnReceiveInitData', "Error");
    }
}
