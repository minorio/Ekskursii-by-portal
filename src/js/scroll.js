//Scroll to schedule

const scheduleSection = document.getElementById("schedule");
const scrollButtons = document.querySelectorAll(".hero__btn, .js-scroll-to");

if (scheduleSection && scrollButtons.length > 0) {
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const topOffset = scheduleSection.offsetTop;

      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    });
  });
}
