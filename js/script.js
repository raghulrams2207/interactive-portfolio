'use strict';

// Mark the document as JS-enabled so CSS only collapses the menu when it can be reopened.
document.documentElement.classList.add('js');

/* ---------- Mobile navigation ---------- */
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

function setMenuOpen(isOpen) {
  navToggle.setAttribute('aria-expanded', String(isOpen)); // state announced by screen readers
  primaryNav.classList.toggle('is-open', isOpen);
}

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  // Escape closes the menu and returns focus to the toggle button.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      setMenuOpen(false);
      navToggle.focus();
    }
  });
}

/* ---------- Contact form validation ---------- */
const form = document.getElementById('contact-form');

if (form) {
  const errorSummary = document.getElementById('error-summary');
  const errorList = document.getElementById('error-list');
  const statusBox = document.getElementById('form-status');
  const labels = { name: 'Full name', email: 'Email address', subject: 'Subject', message: 'Message' };

  // Returns an error message, or '' when the field is valid.
  function getErrorMessage(field) {
    const label = labels[field.name];
    if (!field.value.trim()) return `${label} is required.`;
    if (field.validity.typeMismatch) return 'Enter an email address like name@example.com.';
    if (field.validity.tooShort) return `${label} must be at least ${field.minLength} characters.`;
    return '';
  }

  function showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.id}-error`);
    errorElement.textContent = message;
    errorElement.hidden = !message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  // Check a field when the user leaves it, so feedback is timely but not intrusive.
  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value) showFieldError(field, getErrorMessage(field));
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusBox.hidden = true;
    errorList.replaceChildren();

    form.querySelectorAll('input, textarea').forEach((field) => {
      const message = getErrorMessage(field);
      showFieldError(field, message);
      if (message) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${field.id}`;
        link.textContent = message;
        item.append(link);
        errorList.append(item);
      }
    });

    if (errorList.children.length > 0) {
      errorSummary.hidden = false;
      errorSummary.focus(); // moving focus makes screen readers announce the summary
      return;
    }
    errorSummary.hidden = true;

    /* BACKEND PLACEHOLDER ---------------------------------------------------
       Replace this demo block with a real request, for example:
       fetch('https://YOUR-FORM-SERVICE-ENDPOINT', { method: 'POST', body: new FormData(form) })
       and show the success message only after a successful response.
       Until then the message is NOT sent anywhere. */
    statusBox.textContent = 'Demo mode: your message passed validation but was not sent, because no backend is connected yet. Please email me directly.';
    statusBox.hidden = false;
    form.reset();
  });
}
