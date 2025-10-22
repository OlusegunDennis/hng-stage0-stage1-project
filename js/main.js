// Core JS for profile time and contact form validation.
// No external libs. Keep code clear and modular.

/* ===== Profile time ===== */
(function profileTime() {
  const el = document.getElementById('time');
  if (!el) return;
  // Set initial timestamp (ms)
  function setNow() {
    el.textContent = String(Date.now());
  }
  setNow();
  // Update every second to keep it current (acceptable for Stage 0)
  setInterval(setNow, 1000);
})();

/* ===== Contact form validation ===== */
(function contactFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    fullName: {
      el: form.querySelector('#fullName'),
      errorEl: document.getElementById('error-fullName'),
      testId: 'test-contact-error-fullName'
    },
    email: {
      el: form.querySelector('#email'),
      errorEl: document.getElementById('error-email'),
      testId: 'test-contact-error-email'
    },
    subject: {
      el: form.querySelector('#subject'),
      errorEl: document.getElementById('error-subject'),
      testId: 'test-contact-error-subject'
    },
    message: {
      el: form.querySelector('#message'),
      errorEl: document.getElementById('error-message'),
      testId: 'test-contact-error-message'
    }
  };

  const successEl = document.getElementById('formSuccess');

  function clearErrors() {
    Object.values(fields).forEach(f => {
      if (f.errorEl) f.errorEl.textContent = '';
      if (f.el) f.el.removeAttribute('aria-invalid');
    });
    if (successEl) {
      successEl.hidden = true;
      successEl.textContent = '';
    }
  }

  function showError(fieldKey, message) {
    const f = fields[fieldKey];
    if (!f) return;
    if (f.errorEl) f.errorEl.textContent = message;
    if (f.el) f.el.setAttribute('aria-invalid', 'true');
  }

  function isEmailValid(value) {
    // Basic but reliable email pattern (sufficient for client-side validation)
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(value).toLowerCase());
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const values = {
      fullName: fields.fullName.el.value.trim(),
      email: fields.email.el.value.trim(),
      subject: fields.subject.el.value.trim(),
      message: fields.message.el.value.trim()
    };

    let valid = true;

    // Full name required
    if (!values.fullName) {
      showError('fullName', 'Full name is required.');
      valid = false;
    }

    // Email required + pattern
    if (!values.email) {
      showError('email', 'Email is required.');
      valid = false;
    } else if (!isEmailValid(values.email)) {
      showError('email', 'Please enter a valid email (name@example.com).');
      valid = false;
    }

    // Subject required
    if (!values.subject) {
      showError('subject', 'Subject is required.');
      valid = false;
    }

    // Message required + length >= 10
    if (!values.message) {
      showError('message', 'Message is required.');
      valid = false;
    } else if (values.message.length < 10) {
      showError('message', 'Message must be at least 10 characters.');
      valid = false;
    }

    if (!valid) {
      // Move focus to first invalid field for accessibility
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate success (no backend). Show confirmation message.
    if (successEl) {
      successEl.hidden = false;
      successEl.textContent = 'Thanks, your message was sent.';
    }
    form.reset();
    // keep success visible and focus it
    if (successEl) successEl.focus();
  });

  // Basic keyboard accessibility: pressing Enter on submit button handled by browser.
})();
