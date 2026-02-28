import timer from './modules/timer.js'
import menu from './modules/menu.js'
import modal from './modules/modal.js';
import scroll from './modules/scroll.js'
import validationCalc from './modules/validationCalc.js';
import validationForm from './modules/validationForm.js';
import tabs from './modules/tabs.js';
import slider from './modules/slider.js';
import sliderCarousel from './modules/sliderCarousel.js';
import calc from './modules/calc.js';
import sendForm from './modules/sendForm.js';


timer('22 march 2026');
menu()
modal()
scroll()
validationCalc()
validationForm()
tabs()
slider()
sliderCarousel()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})

sendForm({
    formId: 'form3',
    someElem: [{
        type: 'block',
        id: 'total'
    }]
})

sendForm({
    formId: 'form2',
    someElem: []
})


