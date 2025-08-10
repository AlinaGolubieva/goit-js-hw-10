import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  console.log('delay:', delay, 'state:', state);

  if (!delay || delay <= 0) {
    iziToast.warning({
      title: '⚠ Caution',
      message: 'Please enter a delay value',
      position: 'topRight',
      icon: '',
    });
    return;
  }

  if (!state) {
    iziToast.warning({
      title: '⚠ Caution',
      message: 'Select a promise state',
      position: 'topRight',
      icon: '',
    });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '✅',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        icon: '',
      });
    })

    .catch(delay => {
      iziToast.error({
        title: '❌',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        icon: '',
      });
    });
});
