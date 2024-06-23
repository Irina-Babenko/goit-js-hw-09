document.addEventListener('DOMContentLoaded', function () {
  const formData = {
    email: '',
    message: '',
  };

  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }

  form.addEventListener('input', function (e) {
    if (e.target.matches('input[name="email"]')) {
      formData.email = e.target.value.trim();
    } else if (e.target.matches('textarea[name="message"]')) {
      formData.message = e.target.value.trim();
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (formData.email && formData.message) {
      console.log(formData);

      localStorage.removeItem('feedback-form-state');
      formData.email = '';
      formData.message = '';
      emailInput.value = '';
      messageInput.value = '';

      alert('Form submitted successfully!');
    } else {
      alert('Fill please all fields.');
    }
  });
});
