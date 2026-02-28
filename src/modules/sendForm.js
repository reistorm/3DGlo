const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Наш менеджер свяжется с Вами!'

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            input.style.border = ''
            if (input.value.trim() === '') {
                success = false
                input.style.border = '2px solid red';
            }

            if (input.name === 'user_name') {
                if (!/^[а-яё\s]+$/gi.test(input.value) && input.value !== '') {
                    success = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '';
                }
            }

            if (input.name === 'user_phone') {
                if (!/^[\d\+\(\)\-\s]+$/g.test(input.value) && input.value !== '') {
                    success = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '';
                }
            }

            if (input.name === 'user_message') {
                if (!/^[а-яё\d\s\.,!?;:\-]+$/gi.test(input.value) && input.value !== '') {
                    success = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = '';
                }
            }

            if (input.hasAttribute('required') && input.value.trim() === '') {
                success = false;
                input.style.border = '2px solid red';
            }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusBlock.remove()
                    }, 3000);
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!')
        }
    }
    try {
        if (!form) {
            throw new Error('Выбрана не форма!')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}


export default sendForm