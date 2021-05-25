import './stylesheets/style.css';
import './stylesheets/mystyles.css';

// eslint-disable-next-line no-console
console.log('WebPack funcionando');

// default parameters

const show = (m = 'hola') => {
  // eslint-disable-next-line no-alert
  alert(m);
};

show();

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolve');
    }, 2000);
  });
}

async function asyncCall() {
  // eslint-disable-next-line no-console
  console.log('Calling an async function');
  const result = await resolveAfter2Seconds();
  // eslint-disable-next-line no-console
  console.log(result);
}
asyncCall();
