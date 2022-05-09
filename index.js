const ratingResult = document.querySelector('.rating-result');

const ratingSelected = document
  .querySelectorAll('.rating-btn')
  .forEach((rating) => {
    rating.addEventListener('click', () => {
      const buttonId = rating.id;
      ratingResult.innerHTML = buttonId;
    });
  });

const onSubmit = document
  .querySelector('.submit-btn')
  .addEventListener('click', () => {
    const thankYouCard = document.querySelector('.thank-you-card');
    thankYouCard.style.display = 'flex';
    const ratingCard = document.querySelector('.rating-card');
    ratingCard.style.display = 'none';
  });
