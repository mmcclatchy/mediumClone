const responseTextArea = document.querySelector('.form-content__text-area--sm');
const responseHeader = document.getElementById('new-response__header');
const responseFormBtn = document.getElementById('new-response-form__buttons');
const responseBackground = document.getElementById('responses-background');
const responsePanel = document.getElementById('responses-container')

//*************************************************************/

const showCompactResponseForm = () => {
    console.log('Compact Click')
    responseTextArea.classList.add('form-content__text-area--sm'); 
    responseTextArea.classList.remove('form-content__text-area--lg'); 
    responseHeader.classList.add('hidden');
    responseFormBtn.classList.add('hidden');        
}
 
const showFullResponseForm = () => {
    console.log('Full Click')
    responseTextArea.classList.remove('form-content__text-area--sm'); 
    responseTextArea.classList.add('form-content__text-area--lg');        
    responseHeader.classList.remove('hidden');
    responseFormBtn.classList.remove('hidden');
}

const showResponsePanel = () => {    
    responseBackground.classList.remove('hidden');
    responsePanel.classList.add('slide-left');
}

const hideResponsePanel = () => {
    showCompactResponseForm();
    responseBackground.classList.add('hidden');
    responsePanel.classList.remove('slide-left');
}

//*************************************************************/

document.addEventListener('scroll', () => {
    const leftSidePanel = document.querySelector('.main__left-side-panel');
    
    if (window.pageYOffset > 300) {
        leftSidePanel.style.opacity = 1;
    }
    else {
        leftSidePanel.style.opacity = 0;
    }
});

document
    .querySelector('.responses__icon')
    .addEventListener('click', () => {
        showResponsePanel()
})

document
    .querySelector('.form-container__new-response-form')
    .addEventListener('click', () => {
        console.log(responseTextArea.classList.value)
        if (responseTextArea.classList.value === 'form-content__text-area--sm') {
            showFullResponseForm();
        }
})

document
    .querySelector('.buttons__cancel')
    .addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        showCompactResponseForm();
})

document
    .getElementById('responses-background')
    .addEventListener('click', (event) => {
        event.stopPropagation();
        
        const targetId = event.target.id
        console.log("targetId", targetId)
        
        if (targetId === 'responses-background' ||
            targetId === 'responses-close-btn' ||
            targetId === 'responses-close-icon'
            ) {
                
                console.log('CLOSE CLICK')
                hideResponsePanel()
            }
})

