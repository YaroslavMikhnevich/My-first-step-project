$(document).ready(function () {

  $('.grid').masonry({
    itemSelector: '.grid-item',
    horizontalOrder: false,
    fitWidth: true,

  });

})


let gridBlock = document.querySelector('.grid-masonly');
let gridItemsList = gridBlock.querySelectorAll('.grid-item');
let loadButton = document.querySelector('.load-gallery');


loadButton.addEventListener('click', function (event) {
  let target = event.target.closest('button');

  if (target) {
    document.querySelector('.load-gallery').style.display = 'none';
    document.querySelector('.loading-gallery').style.display = 'block';
    setTimeout(() => {
      for (let item of gridItemsList) {
        item.classList.remove('close');
      }
      document.querySelector('.loading-gallery').style.display = 'none';
      gridBlock.querySelector('.sub-grid').style.display = 'none';
      gridBlock.querySelector('.second-sub-grid').style.display = 'none';

      $('.grid').masonry({
        itemSelector: '.grid-item',
        horizontalOrder: false,
        fitWidth: true,

      });
    }, 3000);

  }
})


