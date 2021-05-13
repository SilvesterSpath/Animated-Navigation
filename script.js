const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const li = document.querySelectorAll('li');
const ul = document.querySelector('ul');

console.log(li);
console.log(ul);
console.log(nav.classList);

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList != 'active') {
    console.log('!active');
    delayClose();
  }
  if (nav.classList == 'active') {
    console.log('active');
    delayOpen();
  }
});

function delayClose() {
  console.log('close');
  li.forEach((i) => {
    i.style.transitionDelay = '0s';
  });
  nav.style.transitionDelay = '0.6s';
  ul.style.transitionDelay = '0.6s';
}

function delayOpen() {
  console.log('open');
  li.forEach((i) => {
    i.style.transitionDelay = '0.6s';
  });
  nav.style.transitionDelay = '0s';
  ul.style.transitionDelay = '0s';
}
