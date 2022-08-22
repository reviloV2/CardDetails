const formName = document.getElementById('cardholderform');
const cardName = document.getElementById('cardholder');

const formNumber = document.getElementById('formnumber');
const cardNumber = document.getElementById('cardnum');

const formExp = document.getElementById('expdate');
const formExp2 = document.getElementById('expdates');
const cardExp = document.getElementById('expcard');

const formCvc = document.getElementById('cvcform');
const cardCvc = document.getElementById('cvc');

formName.addEventListener('keyup', e => {
    cardName.innerHTML = e.target.value.toUpperCase();
  });

  formNumber.addEventListener('keyup', e => {
    cardNumber.innerHTML = e.target.value;
  });

  formExp.addEventListener('keyup', e => {
    cardExp.innerHTML = e.target.value;
  });

  formExp2.addEventListener('keyup', e => {
    cardExp.innerHTML += e.target.value;
  });

  formExp2.addEventListener('keyup', e => {
    cardExp.innerHTML += e.target.value;
  });

  formCvc.addEventListener('keyup', e => {
    cardCvc.innerHTML = e.target.value;
  });

