//////Sticky Navigation//////

const sectionHeroEL = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector(".main-header").classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.querySelector(".main-header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(sectionHeroEL);
