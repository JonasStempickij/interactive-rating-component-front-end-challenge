const ratingResult = document.querySelector('.rating-result'); // user input showing in thank you card

const ratingSelected = document
  .querySelectorAll('input[type=radio]')
  .forEach((rating) => {
    rating.addEventListener('click', () => {
      ratingResult.innerHTML = rating.id;
    });
  });

/* if rating provided on submit hide rating card and show thank you card 
else show error with 5000ms timeout
*/
const onSubmit = document
  .querySelector('.submit-btn')
  .addEventListener('click', () => {
    if (ratingResult.innerHTML) {
      const thankYouCard = document.querySelector('.thank-you-card');
      thankYouCard.style.display = 'flex';
      const ratingCard = document.querySelector('.rating-card');
      ratingCard.style.display = 'none';
    } else {
      const error = document.querySelector('.error');
      error.style.display = 'block';
      setTimeout(() => {
        error.style.display = 'none';
      }, '5000');
    }
  });
