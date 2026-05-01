function openTip(card) {
  document.querySelectorAll('.tip-card').forEach(el => {
    if (el !== card) el.classList.remove('active');
  });

  card.classList.toggle('active');
}
<script>
function filterTools(type) {
  const cards = document.querySelectorAll('.tool-card');

  cards.forEach(card => {

    const match = card.getAttribute('data-type') === type || type === 'all';

    if (match) {
      card.style.display = 'block';
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';

      setTimeout(() => {
        card.style.transition = '0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 50);

    } else {
      card.style.display = 'none';
    }

  });
}
</script>