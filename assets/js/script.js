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
  
    const formData = new FormData(this)
  
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })
  
    // console.log(e.target.elements)
    const input = e.target.elements
  
    console.log({
      name: input.name.value,
      email: input.email.value,
      message: input.message.value
    })
  
  
  })