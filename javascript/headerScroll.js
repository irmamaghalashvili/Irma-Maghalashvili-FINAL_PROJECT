let lastScrollTop = 0;
const header = document.getElementById('myHeader');

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', handleScroll);