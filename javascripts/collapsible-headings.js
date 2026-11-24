document.addEventListener("DOMContentLoaded", function () {
  // Target H2 headings in the content area
  const headings = document.querySelectorAll(".md-content h2, article h2, main h2");

  headings.forEach(heading => {
    heading.classList.add("collapsible-h2");

    // Gather all siblings between this H2 and the next H1 or H2
    let nextElement = heading.nextElementSibling;
    const sectionElements = [];

    while (nextElement && !["H1", "H2"].includes(nextElement.tagName)) {
      sectionElements.push(nextElement);
      nextElement = nextElement.nextElementSibling;
    }

    // Create a wrapper container for the content
    const wrapper = document.createElement("div");
    wrapper.classList.add("h2-collapsible-wrapper");

    // Insert wrapper after the H2 heading and move the content inside it
    heading.parentNode.insertBefore(wrapper, heading.nextSibling);
    sectionElements.forEach(el => wrapper.appendChild(el));

    // Optional: Collapse sections by default (uncomment the line below if desired)
    // wrapper.style.display = "none"; heading.classList.add("collapsed");

    // Add toggle behavior on click
    heading.addEventListener("click", function () {
      heading.classList.toggle("collapsed");
      if (wrapper.style.display === "none") {
        wrapper.style.display = "block";
      } else {
        wrapper.style.display = "none";
      }
    });
  });
});
