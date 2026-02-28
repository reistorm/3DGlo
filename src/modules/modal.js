import { animate } from './helpers'

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

        animate({
            duration: 300,
            timing: (timeFraction) => timeFraction,
            draw: (progress) => {
                modal.style.opacity = progress
                modal.style.transform = `translateY(${-20 + 20 * progress}px)`
            }
        })
    }

    const animateClose = () => {
        if (isMobile) {
            modal.style.display = 'none'
            return;
        }

        modal.style.display = 'none'
        modal.style.opacity = 1
        modal.style.transform = `translateY(-20px)`

        animate({
            duration: 300,
            timing: (timeFraction) => timeFraction,
            draw: (progress) => {
                modal.style.opacity = 1 - progress;
                modal.style.transform = `translateY(${-20 + 20 * progress}px)`
            },
            callback: () => {
                modal.style.display = 'none'
            }
        })
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.style.pointerEvents = 'auto';
            btn.disabled = false
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