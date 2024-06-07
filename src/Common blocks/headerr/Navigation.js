// Получаем все ссылки с атрибутом data-value
const links = document.querySelectorAll('nav a[data-value]');

// Перебираем ссылки и получаем значения
links.forEach(link => {
  link.addEventListener('click', () => {
    const value = link.getAttribute('data-value');
    const general = document.getElementById('general');
    const forum = document.getElementById('forum');
    const profil = document.getElementById('profil');
    const registration = document.getElementById('registration');

    if (value === 'main') {
      general.style.display = 'block';
      forum.style.display = 'none';
      profil.style.display = 'none';
      registration.style.display = 'none';
    } else if (value === 'forum') {
      general.style.display = 'none';
      forum.style.display = 'block';
      profil.style.display = 'none';
      registration.style.display = 'none';
    } else if (value === 'profil') {
      general.style.display = 'none';
      forum.style.display = 'none';
      profil.style.display = 'block';
      registration.style.display = 'none';
    } else if (value === 'REG') {
      general.style.display = 'none';
      forum.style.display = 'none';
      profil.style.display = 'none';
      registration.style.display = 'block';
    }
  });
});