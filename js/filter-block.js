let filterMenuBlock = document.querySelector('.filter-menu');
let gridItemList = document.querySelectorAll('.grid-items');
let loadMoreButton = document.querySelector('.load-button-filter-block');


loadMoreButton.addEventListener('click', function (event) {
    

    let target = event.target.closest('button');
    if (target === 'null') return;
    if (!target) return;

    if (target) {
    document.querySelector('.load-button').style.display = 'none';
    document.querySelector('.loading-block').style.display = 'block';
    setTimeout(function () {
        for (const item of gridItemList) {
            item.classList.remove('additional-grid-item')
        }
        document.querySelector('.loading-block').style.display = 'none';

    }, 3000)

    }
})




filterMenuBlock.addEventListener('click', function (event) {
    let target = event.target.closest('li');

    if (target) {
        for (let item of gridItemList) {
            item.classList.add('close');
            if (target.getAttribute('data-type') === 'all') {
                item.classList.remove('close')
            } 

            if (item.classList.contains(`${target.getAttribute('data-type')}`)) {
                item.classList.remove('close')
            } 
        }    
    }
})