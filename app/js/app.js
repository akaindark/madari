const btn = document.getElementById('open-menu');
const menu = document.getElementById('menu');

const closeBtn = document.querySelector('.close-btn');

btn.onclick = () => {
  menu.classList.add('active');

  closeBtn.addEventListener('click', closemenu);

  function closemenu() {
    menu.classList.remove('active');
    closeBtn.removeEventListener('click', closemenu);
  };
};
