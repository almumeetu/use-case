const items = document.querySelectorAll('.timeline-item');

function activateOnScroll() {
  let triggerBottom = window.innerHeight / 1.3;

  items.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activateOnScroll);
window.addEventListener('load', activateOnScroll);
