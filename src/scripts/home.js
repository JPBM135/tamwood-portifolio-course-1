const ANIMATION_CLASS = "animations__fade-in";

const element = document.querySelector("#home-cards");

if (!element) {
  throw new Error("Element not found");
}

const children = element.children;

console.log(children);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isIntersecting) {
          child.classList.add(ANIMATION_CLASS);
        } else {
          child.classList.remove(ANIMATION_CLASS);
        }
      }
    });
  },
  { threshold: 0.01 }
);

observer.observe(element);
