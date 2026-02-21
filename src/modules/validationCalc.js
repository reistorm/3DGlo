const validationCalc = () => {
    const inputCalcSquare = document.querySelector('.calc-item.calc-square')
    const inputCalcCount = document.querySelector('.calc-item.calc-count')
    const inputCalcDay = document.querySelector('.calc-item.calc-day')

    inputCalcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    inputCalcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    inputCalcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
}

export default validationCalc