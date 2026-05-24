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
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if(!name || !email || !message){
    alert("Заповни всі поля");
    return;
  }

  successMsg.style.display = "block";

  form.reset();

  setTimeout(() => {
    successMsg.style.display = "none";
  }, 3000);
});
let currentBtn = document.querySelector(".btn.active");

function filter(type, btn){

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = (type === "all" || card.dataset.type === type)
      ? "block"
      : "none";
  });

  // ACTIVE STATE
  if(btn){

    if(currentBtn){
      currentBtn.classList.remove("active");
    }

    btn.classList.add("active");
    currentBtn = btn;
  }

  closeDrawer();
}

/* DRAWER */
function openDrawer(){
  document.getElementById("drawer").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeDrawer(){
  document.getElementById("drawer").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}
<script>

window.onload = function(){

  const images = document.querySelectorAll(".tutorial-card img");

  const titles = [
    "Відкрий Blender",
    "Обертання сцени",
    "Масштабування",
    "Матеріал",
    "Рендер",
    "Збереження"
  ];

  const desc = [
    "Після запуску Blender ти побачиш стандартний куб у сцені.",
    "Затисни середню кнопку миші для обертання.",
    "Натисни S для масштабування об'єкта.",
    "Вибери матеріал і колір.",
    "Натисни F12 для рендера.",
    "Збережи проект через File → Save As."
  ];

  images.forEach((img, i) => {
    img.addEventListener("click", function(){
      document.getElementById("modal").classList.add("active");
      document.getElementById("modalImg").src = this.src;
      document.getElementById("modalTitle").innerText = titles[i];
      document.getElementById("modalDesc").innerText = desc[i];
    });
  });

};

function closeModal(){
  document.getElementById("modal").classList.remove("active");
}

</script>
<script>

document.querySelectorAll(".tutorial-card img").forEach(img => {
  img.addEventListener("click", function(){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = this.src;
  });
});

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

</script>
