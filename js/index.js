const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
console.log(cards);
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (cards) => {
      cards.forEach((card) => {
        card.target.classList.add("show");
        if (card.isIntersecting) {
          observer.unobserve(card.target);
        }
      });
    },
    {
      rootMargin: "500px",
    },
  );

  cards.forEach((card) => {
    observer.observe(card);
  });

  function makeCard() {
    for (let i = 0; i < 20; i++) {
      const card = document.createElement("div");
      card.className = "card";
      observer.observe(card);
      container.append(card);
    }
  }
} else {
  console.log("Ваш браузер не підтримує");
}
