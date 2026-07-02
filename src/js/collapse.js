//Collapse

const reviewTexts = document.querySelectorAll(".review-card__text");
const LIMIT = 309;

reviewTexts.forEach((el) => {
  const text = el.textContent.trim();

  if (text.length <= LIMIT) return;

  const shortText = text.slice(0, LIMIT) + "...";
  el.textContent = shortText;

  const btn = document.createElement("span");
  btn.className = "review-card__more";
  btn.textContent = "далее...";

  el.after(btn);

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isShort = el.textContent === shortText;
    el.textContent = isShort ? text : shortText;
    btn.textContent = isShort ? "свернуть" : "далее...";
  });
});
