const navContainer = document.querySelector('.nav-background')

      function fixNav(){
        if(window.scrollY > navContainer.offsetHeight + 550) {
          navContainer.classList.add('hideNav')
        } else {
          navContainer.classList.remove('hideNav')
        }
      }

      window.addEventListener('scroll', fixNav)