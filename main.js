
        let burger = document.getElementById('burger')
        let menu = document.getElementById('nav__bar')
        let body = document.getElementById('body')
        let navElems = document.querySelectorAll('.nav_elem')

        navElems.forEach((item) => {
            item.addEventListener('click', () => {
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active')
                    burger.classList.remove('active')
                    body.classList.remove('fixed')
                }
            })
        })

        burger.addEventListener('click', () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active')
                burger.classList.add('active')
                body.classList.add('fixed')
            } else {
                menu.classList.remove('active')
                burger.classList.remove('active')
                body.classList.remove('fixed')
            }
        })

                

    