// Contact form handler (used in contact.html)
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!this.checkValidity()) {
    this.reportValidity();
    return;
  }
  alert(`Thank you, ${this.name.value}! Your message has been sent.`);
  this.reset();
});

// Portfolio Filter
function filterPortfolio(category) {
  const items = document.querySelectorAll('.portfolio-item');
  items.forEach(item => {
    item.style.display = (category === 'all' || item.dataset.category === category) ? 'block' : 'none';
  });
}

// Activate buttons
document.querySelectorAll('.portfolio-categories button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    filterPortfolio(category);
    // Highlight active button
    document.querySelectorAll('.portfolio-categories button').forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });
  });
});

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('portfolio-grid')) {
    setupPortfolioFilter();
  }
});