function openTip(card) {
  document.querySelectorAll('.tip-card').forEach(el => {
    if (el !== card) el.classList.remove('active');
  });

  card.classList.toggle('active');
}