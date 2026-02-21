const validationForm = () => {
    const form1 = document.getElementById('form1')
    const form1Name = document.getElementById('form1-name')
    const form1Email = document.getElementById('form1-email')
    const form1Phone = document.getElementById('form1-phone')

    const form2Name = document.getElementById('form2-name')
    const form2Email = document.getElementById('form2-email')
    const form2Phone = document.getElementById('form2-phone')

    const form3Name = document.getElementById('form3-name')
    const form3Email = document.getElementById('form3-email')
    const form3Phone = document.getElementById('form3-phone')

    form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ -]/gi, '')
    })

    form2Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ -]/gi, '')
    })

    form3Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ -]/gi, '')
    })

    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/([^a-zA-Z0-9\-\_\!\~\*\'\.]+)(@)([^a-zA-Z0-9\.]+)$/gi, '')
    })

    form2Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/([^a-zA-Z0-9\-\_\!\~\*\'\.]+)(@)([^a-zA-Z0-9\.]+)$/gi, '')
    })

    form3Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/([^a-zA-Z0-9\-\_\!\~\*\'\.]+)(@)([^a-zA-Z0-9\.]+)$/gi, '')
    })

    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]/g, '')
    })

    form2Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]/g, '')
    })

    form3Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]/g, '')
    })
}

export default validationForm