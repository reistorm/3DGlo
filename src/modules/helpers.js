const slicer = (str, num) => {
    return str.trim().length > num ?
        str.trim().substring(0, num) + '...' :
        str.trim()
}

const animate = ({ timing, draw, duration }) => {
    // duration - длительность анимации
    // timing - линейность анимации (в зависимости от функции(линейная, дуга, степень))
    let start = performance.now(); // возвращает текущую точку времени

    requestAnimationFrame(function animate(time) { // time - время повторения анимации
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else if (typeof callback === 'function') {
            callback()
        }

    });
}

export { slicer, animate }