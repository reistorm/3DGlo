const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')

    const toggleMenu = () => {
        menu.classList.toggle('active-menu') // в css уже есть реализованный класс active-menu
    }

    const isTargetMenuItems = (target) => {
        for (const ul of menuItems) {
            if (ul.contains(target)) {
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