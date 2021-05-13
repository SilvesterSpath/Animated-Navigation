const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList != 'active') {
    delayClose();
  }
  if (nav.classList == 'active') {
    delayOpen();
  }
});

function delayClose() {
  li.forEach((i) => {
    i.style.transitionDelay = '0s';
  });
  nav.style.transitionDelay = '0.6s';
  ul.style.transitionDelay = '0.6s';
}

function delayOpen() {
  li.forEach((i) => {
    i.style.transitionDelay = '0.6s';
  });
  nav.style.transitionDelay = '0s';
  ul.style.transitionDelay = '0s';
}
