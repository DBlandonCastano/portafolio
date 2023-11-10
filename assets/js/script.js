console.log('DOM:')
console.dir(document)
//document.addEventListener('click', function (event) {
   //elemento que disparo el evento (evento objetivo)
  //console.log(event.target)

  // closest - devuelve el ancestro mas cercano que cumpla con el selector

  //if (event.target.closest('.btn--open')) {
   // console.log('fue el boton de menu de hamburguesa')
  //}

  // matches - devuelve true si el elemento cumple con el selector dado

  //if (event.target.matches('#logo')) {
    //console.log('fue el logo')
  //}
//})

const menu = document.querySelector('.nav__centro')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show--menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show--menu')
// })

const headerNav = document.querySelector('.he__nav')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn--open')) {
    menu.classList.toggle('show--menu')
  }

  if (e.target.closest('.boton--close')) {
    menu.classList.remove('show--menu')
  }

  if (e.target.closest('.link__menu')) {
    menu.classList.remove('show--menu')

    const links = document.querySelectorAll('.link__menu')

    for (const link of links) {
      link.classList.remove('active')
    }

    e.target.classList.add('active')
  }
})
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    menu.classList.remove('show--menu')
  }
  })

  const form = document.getElementById('form')

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    //console.log(this.elements)
   // const formData = new FormData(this)
  const input = this.elements
  const dataForm={
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
  }
    console.log(dataForm)
  
    // console.log(e.target.elements)
   // const input = e.target.elements
  
   // console.log({
     // name: input.name.value,
      //email: input.email.value,
      //message: input.message.value
    //})


  })
 /* const URL='https://formsubmit.co/ajax/'
  const email='durlandyb@gmail.com'
  // https://github.com/github/fetch
  fetch("URL + email", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: "FormSubmit",
          message: "I'm from Devro LABS"
      })
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));*/




    // BOM
const html = document.documentElement

// console.log(html.scrollHeight) // Altura de la página
// console.log(html.clientHeight) // Altura de la ventana
// console.log(html.scrollTop) // Altura que se ha desplazado el scroll

      const progress = document.querySelector('.progress')

      window.addEventListener('scroll', function (e) {
      const alturaPagina = html.scrollHeight - html.clientHeight
      
      const scrollActual = html.scrollTop
      
      const progreso = scrollActual / alturaPagina
      
      progress.style.width = Math.round(progreso * 100) + '%'
      
      })
