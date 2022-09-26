let serviceMenuBlock = document.querySelector('.service-menu');

let serviceMenuList = document.querySelectorAll('.service-menu-item');
let serviceImg = document.querySelectorAll('.service-img');
let serviceText = document.querySelectorAll('.service-text');







serviceMenuBlock.addEventListener('click', function (event) {
    let target = event.target.closest('li');
    if (target) {
        for (let i = 0; i < serviceMenuList.length; i++) {
            serviceMenuList[i].classList.add('close');
            serviceMenuList[i].style.background = '#F8FCFE';
            serviceMenuList[i].querySelector('.menu-item-text').style.color = '#717171';
            serviceMenuList[i].querySelector('.swich-pointer').style.display = 'none';


            serviceImg[i].classList.add('close');
            serviceText[i].classList.add('close');

            serviceMenuList[i].setAttribute('data-item', `${i}`);
            serviceImg[i].setAttribute('data-item', `${i}`);
            serviceText[i].setAttribute('data-item', `${i}`);
        }

        target.classList.remove('close');

        serviceImg[target.getAttribute('data-item')].classList.remove('close');

        serviceText[target.getAttribute('data-item')].classList.remove('close');

        target.style.background = '#18CFAB';
        target.querySelector('.menu-item-text').style.color = '#FFFFFF';
        target.querySelector('.swich-pointer').style.display = 'block';

        
        
    }

    
})    

