// Логика переключения вкладок
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.getAttribute('data-tab');
    document.getElementById(targetId).classList.add('active');
  });
});

// Логика темной темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверка сохраненной темы
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Сохранение выбора пользователя
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Логика переключения подвкладок (внутри Математических парадоксов)
const subTabs = document.querySelectorAll('.sub-tab');
const subContents = document.querySelectorAll('.sub-content');

subTabs.forEach(subTab => {
  subTab.addEventListener('click', () => {
    // Убираем активный класс у всех подвкладок и их контента
    subTabs.forEach(st => st.classList.remove('active'));
    subContents.forEach(sc => sc.classList.remove('active'));

    // Активируем нужную подвкладку
    subTab.classList.add('active');
    const targetSubId = subTab.getAttribute('data-subtab');
    document.getElementById(targetSubId).classList.add('active');
  });
});