const items = document.querySelectorAll('.timeline-item');

function activateOnScroll() {
  // 👉 trigger 90% from top instead of waiting for full visibility
  let triggerBottom = window.innerHeight * 0.7;

  items.forEach((item) => {
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