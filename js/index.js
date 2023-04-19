document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
    setInterval(updateTimer, 1000);
    updateUserAuthState();
    loadTodoList();
    printRandomQuote();
    loadRandomImage();
    setInterval(loadRandomImage, 30 * 1000);
    loadWeather();
});