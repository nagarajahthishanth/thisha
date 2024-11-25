// Example JavaScript to dynamically change content
window.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#about");
  const projectsSection = document.querySelector("#projects");
  const achievementsSection = document.querySelector("#achievements");
  // Change text color dynamically when sections are in view
  window.addEventListener("scroll", () => {
    if (isElementInViewport(aboutSection)) {
      aboutSection.style.color = "blue";
    }
    if (isElementInViewport(projectsSection)) {
      projectsSection.style.color = "red";
    }
    if (isElementInViewport(achievementsSection)) {
      achievementsSection.style.color = "purple";
    }
  });

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
