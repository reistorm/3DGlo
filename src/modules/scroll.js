const scroll = () => {
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const scrollBtn = document.querySelector('a[href="#service-block"]')

    const allLinks = [...menuItems, scrollBtn]

    allLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const id = link.getAttribute('href').substring(1)
            const section = document.getElementById(id)
            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                })
            }
        })
    })
}

export default scroll