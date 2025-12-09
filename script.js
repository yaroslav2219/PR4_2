document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const prevbutton = document.querySelector('#prev');
    const nextbutton = document.querySelector('#next');

    const questions = [
        {
            question: 'Якого кольору бургер ви хочете?',
            answers: [
                { title: 'Стандарт', url: './image/burger.png' },
                { title: 'Чорний', url: './image/burgerBlack.png' }
            ]
        },
        {
            question: 'З якого мʼяса ви хочете котлету?',
            answers: [
                { title: 'Яловичина', url: './image/beefMeat.png' },
                { title: 'Курка', url: './image/chickenMeat.png' },
                { title: 'Свинина', url: './image/porkMeat.png' }
            ]
        },
        {
            question: 'Додаткові інгредієнти?',
            answers: [
                { title: 'Огірок', url: './image/cucumber.png' },
                { title: 'Салат', url: './image/salad.png' },
                { title: 'Помідор', url: './image/tomato.png' },
                { title: 'Цибуля', url: './image/onion.png' }
            ]
        },
        {
            question: 'Додати соус?',
            answers: [
                { title: 'Часничний', url: './image/sauce1.png' },
                { title: 'Томатний', url: './image/sauce2.png' },
                { title: 'Гірчичний', url: './image/sauce3.png' }
            ]
        }
    ];

    let currentQuestion = 0; 

    const renderQuestion = () => {
        const q = questions[currentQuestion];
        questionTitle.textContent = q.question;
        formAnswers.innerHTML = '';

        q.answers.forEach((item, index) => {
            const answerItem = document.createElement('div');
            answerItem.classList.add('answers-item', 'd-flex', 'flex-column');

            answerItem.innerHTML = `
                <input type="radio" id="answerItem${currentQuestion}_${index}" 
                    name="answer${currentQuestion}" class="d-none">

                <label for="answerItem${currentQuestion}_${index}" 
                    class="d-flex flex-column justify-content-between">

                    <img class="answerImg" src="${item.url}" alt="img">
                    <span>${item.title}</span>
                </label>
            `;

            formAnswers.appendChild(answerItem);
        });

        prevbutton.style.display = currentQuestion === 0 ? "none" : "inline-block";
        nextbutton.style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
    };

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        currentQuestion = 0;   
        renderQuestion();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    nextbutton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion();
        }
    });

    prevbutton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    });

});

