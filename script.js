window.addEventListener('scroll', () => {
  document.querySelector('header').style.background = window.scrollY > 50 ? '#084298' : '#0d6efd';
});
