const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    const isMobile = window.innerWidth < 768

    const animateOpen = () => {
        if (isMobile) {
            modal.style.display = 'block'
            modal.style.opacity = 1
            modal.style.transform = 'translateY(0)'
            return;
        }

        modal.style.display = 'block'
        modal.style.opacity = 0
        modal.style.transform = 'translateY(-20px)'
        let start = null;
        const duration = 300

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start
            const ratio = Math.min(progress / duration, 1)

            modal.style.opacity = ratio
            modal.style.transform = `translateY(${-20 + 20 * ratio}px)`

            if (progress < duration) {
                requestAnimationFrame(step)
            }
        }
        requestAnimationFrame(step)
    }

    const animateClose = () => {
        if (isMobile) {
            modal.style.display = 'none'
            return;
        }

        let start = null
        const duration = 300

        const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = timestamp - start;
            const ratio = Math.min(progress / duration, 1)

            modal.style.opacity = 1 - ratio
            modal.style.transform = `translateY(${-20 + 20 * ratio}px)`

            if (progress < duration) {
                requestAnimationFrame(step)
            } else {
                modal.style.display = 'none'
            }
        }
        requestAnimationFrame(step)
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            animateOpen()
        })
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animateClose()
        }
    })
}

export default modal