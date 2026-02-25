const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const toggleMenu = () => {
        menu.classList.toggle('active-menu') // в css уже есть реализованный класс active-menu

        if (menu.classList.contains('active-menu')) {
            const handler = (e) => {
                if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                    menu.classList.remove('active-menu')
                    document.removeEventListener('click', handler)
                }
            }
            document.addEventListener('click', handler)
        }
    }

    const isTargetMenuItems = (target) => {
        for (const item of menuItems) {
            if (item === target) {
                return true
            }
        }
        return false
    }

    document.body.addEventListener('click', (e) => {
        const target = e.target

        if (menuBtn.contains(target)) {
            toggleMenu()
            e.preventDefault()
            return
        }

        if (target.classList.contains('close-btn')) {
            toggleMenu()
            e.preventDefault()
            return
        }

        if (target.tagName === 'A' && isTargetMenuItems(target) &&
            !target.classList.contains('close-btn')) {
            toggleMenu()
        }
    })
}

export default menu