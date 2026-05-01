document.querySelectorAll('.content-shell section').forEach((section) => {
  const heading = section.querySelector('h2');
  if (heading && /faq/i.test(heading.textContent)) {
    section.id = 'faq';
  }
});
