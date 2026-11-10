const search = document.getElementById('search');
const cards = [...document.querySelectorAll('.car-card')];
search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  cards.forEach(card => {
    card.hidden = !card.dataset.search.includes(query);
  });
});

document.getElementById('listing-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-message').textContent =
    'Mulțumim! Acesta este un formular demonstrativ; anunțul nu a fost publicat online.';
  event.target.reset();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
