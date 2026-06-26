const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const form = document.querySelector('[data-quote-form]');
const statusEl = document.querySelector('[data-form-status]');

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu?.classList.toggle('is-open') ?? false;
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.matches('a')) {
    navMenu.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navMenu?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

function setError(field, message) {
  const errorEl = document.querySelector(`[data-error-for="${field.name}"]`);
  if (errorEl) errorEl.textContent = message;
  field.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function validateForm() {
  if (!form) return false;
  let isValid = true;
  const fields = Array.from(form.querySelectorAll('input, textarea, select'));

  fields.forEach((field) => {
    let message = '';
    const value = field.value.trim();

    if (field.required && !value) {
      message = 'Please fill out this field.';
    } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = 'Please enter a valid email address.';
    } else if (field.minLength > 0 && value.length < field.minLength) {
      message = `Please enter at least ${field.minLength} characters.`;
    }

    if (message) isValid = false;
    setError(field, message);
  });

  return isValid;
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!statusEl) return;
  statusEl.textContent = '';

  if (!validateForm()) {
    statusEl.textContent = 'Please fix the highlighted fields before submitting.';
    return;
  }

  statusEl.textContent = 'Request reviewed. This demo does not send data yet. Connect the form to a secure form service or backend before publishing.';
  form.reset();
});
