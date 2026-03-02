const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let index = 0;
const visible = 3;
const cardWidth = 344; // العرض + gap

function update() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* next */
next.onclick = () => {
  if (index >= cards.length - visible) {
    index = 0; // رجوع للبداية
  } else {
    index++;
  }
  update();
};

/* prev */
prev.onclick = () => {
  if (index <= 0) {
    index = cards.length - visible; // رجوع للآخر
  } else {
    index--;
  }
  update();
};
// showmore - new arrivals
   const btn = document.getElementById("toggleBtn");
  const items = document.querySelectorAll("#items .product-card");

  let showAll = false;
  const limit = 4;

  function updateView() {
    items.forEach((item, index) => {
      item.style.display =
        !showAll && index >= limit ? "none" : "block";
    });

    btn.textContent = showAll ? "View Less" : "View All";
  }

  // أول تحميل: عرض 4 بس
  updateView();

  btn.addEventListener("click", () => {
    showAll = !showAll;
    updateView();
  });
 


  // top-selling
     const butn = document.getElementById("tooggleBtn");
  const itema = document.querySelectorAll("#itema .product--card");

  let shoowAll = false;
  const liimit = 4;

  function updatesView() {
    itema.forEach((item, index) => {
      item.style.display =
        !shoowAll && index >= liimit ? "none" : "block";
    });

    butn.textContent = shoowAll ? "View Less" : "View All";
  }

  // أول تحميل: عرض 4 بس
  updatesView();

  butn.addEventListener("click", () => {
    shoowAll = !shoowAll;
    updatesView();
  });
 
 

