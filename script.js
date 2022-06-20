//Menu

const btnHamburguer = document.getElementById('btn-hamburguer');
//Pegou o elemento pelo id(no caso o button btn-hamburguer)

function toggleMenu(event){ //Função que vai executar a ação do toggle
 if (event.type === 'touchstart') event.preventDefault();/*Ou seja,
 se o evento for "touch", colocamos para que não ative nada além
 do padrão(preventDefault), que nesse caso seria o "touch" */ 

const extras = document.getElementById('extras'); 
//Div de navegação(extras)
  extras.classList.toggle('active'); /*(Adicione caso tenha, remova caso nn tenha)
  Essa é a fuunção do toggle nesse caso*/
  const active = extras.classList.contains('active'); /*Ou seja,
  caso for active é true, caso contrário, é false.*/ 
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) 
  event.currentTarget.setAttribute('area-label', 'Fechar Menu');
  /*Ou seja, assim que abrir o menu, vai ler a mensagem de fechar menu*/ 
  event.currentTarget.setAttribute('area-label', 'Abrir Menu');
}

/* Carousel */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("first");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

// Scroll

window.addEventListener('scroll', OnScroll)

OnScroll()
//Function destinada a tudo relacionado ao scroll da página
function OnScroll(){
    showNavOnScroll()
    showReturnToTopOnScroll()
}

function showNavOnScroll(){
    var navigation = document.getElementById("navigation");
    if (scrollY > 30) {//Se for maior que 0, ative.
        navigation.classList.add('scroll')//Adicionar classe via JS
        //Lembrando que já estilizei essa classe no CSS
        } else { //senão, remova.
            navigation.classList.remove('scroll')
        }
}

function showReturnToTopOnScroll(){
    var returnToTop = document.getElementById("returnToTop");
    if (scrollY > 400) {
        returnToTop.classList.add('show')
        } else { 
            returnToTop.classList.remove('show')
        }
}

ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: 700,
}).reveal(`#home,
#navigation,
#about,
#book,
#reference,`);