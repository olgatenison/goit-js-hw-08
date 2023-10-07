import throttle from 'lodash.throttle';

const FFS = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Функція, яка зберігає стан форми у локальному сховищі
const saveFormState = () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(FFS, JSON.stringify(formData));
};

form.addEventListener('input', throttle(saveFormState, 500));

// Функція, яка встановлює значення полів форми під час завантаження сторінки
const restoreFormState = () => {
  const savedData = JSON.parse(localStorage.getItem(FFS));

  if (savedData) {
    emailInput.value = savedData.email;
    messageTextarea.value = savedData.message;
  } else {
    emailInput.value = '';
    messageTextarea.value = '';
  }
};

// Відновлюємо значення полів форми під час завантаження сторінки
restoreFormState();

// Під час сабміту форми очищуємо локальне сховище і виводимо дані в консоль
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  //показує що видаляємо
  console.log('Form data submitted:', {
    email: form.email.value,
    message: form.message.value,
  });

  localStorage.removeItem(FFS);
  form.reset();

  //показує що чисто
  console.log('Form data cleaned:', {
    email: form.email.value,
    message: form.message.value,
  });
}
