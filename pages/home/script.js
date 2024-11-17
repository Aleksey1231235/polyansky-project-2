const homeMainImg = document.getElementById('homeMainImg');
const homeMainImgTitle = document.getElementById('homeMainImgTitle');
const homeMainImgDate = document.getElementById('homeMainImgDate');
const homeMainImges = [
    {
        url: 'bimKab1.png',
        title: {
            text: 'ЦИМ-КАБИНЕТ МОГЭ СТАЛ ВАЖНЫМ ИНСТРУМЕНТОМ ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ЭКСПЕРТИЗЫ ЦИФРОВЫХ МОДЕЛЕЙ',
            date: '24.01.2024'
        }
    },
    {
        url: 'bimKab2.png',
        title: {
            text: 'МОГЭ КООРДИНИРУЕТ ПЕРЕХОД НА РИМ',
            date: '06.12.2023'
        }
    },
    {
        url: 'bimKab3.png',
        title: {
            text: 'Проект МКД  по программе расселения аварийного фонда в Шатурском г.о.',
            date: '24.01.2024'
        }
    },
]
const speedReplace = 3000; // каждые 3 сек заменять картинку

let indexhomeMainImg = 0;
setInterval(() => {
    const indexhomeMainImgAfter = indexhomeMainImg + 1;
    if (indexhomeMainImgAfter < homeMainImges.length) {
        indexhomeMainImg++
    } else {
        indexhomeMainImg = 0;
    }

    homeMainImg.src = `../../assets/images/home/${homeMainImges[indexhomeMainImg].url}`;
    homeMainImgTitle.innerHTML = homeMainImges[indexhomeMainImg].title.text;
    homeMainImgDate.innerHTML = homeMainImges[indexhomeMainImg].title.date;
}, speedReplace);