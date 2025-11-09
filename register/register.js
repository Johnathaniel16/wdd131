
import { participantTemplate, successTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const participantsFieldset = document.querySelector('fieldset.participants');
  const addBtn = document.getElementById('add');
  const summary = document.getElementById('summary');

 
  participantsFieldset.dataset.count = '1';


  addBtn.addEventListener('click', () => {
    const current = Number(participantsFieldset.dataset.count);
    const next = current + 1;
    participantsFieldset.dataset.count = String(next);

    const html = participantTemplate(next);
    addBtn.insertAdjacentHTML('beforebegin', html);
  });


  form.addEventListener('submit', (event) => {
    event.preventDefault();

   
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const total = totalFees();
    const participantCount =
      participantsFieldset.querySelectorAll('section.participant').length;
    const adultName = (document.getElementById('adult_name').value || '').trim() || 'N/A';

    const message = successTemplate({
      name: adultName,
      count: participantCount,
      total: total
    });

    form.classList.add('hide');
    summary.classList.remove('hide');
    summary.textContent = message;
  });
});


function totalFees() {
  let feeElements = document.querySelectorAll('[id^=fee]');
  feeElements = [...feeElements];
  return feeElements.reduce((sum, el) => {
    const v = Number(el.value);
    return sum + (isNaN(v) ? 0 : v);
  }, 0);
}
