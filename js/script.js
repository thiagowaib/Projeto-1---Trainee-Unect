// Hover do Botão de Edital
const btnEdital = document.querySelector('#botão-edital');
const btnEdital_seta = document.querySelector('#botão-edital img');

btnEdital_seta.style.transition = "all .2s";

function hoverEdital_in(){
    btnEdital_seta.style.padding = "0px 0px 0px 13px";
}

function hoverEdital_out(){
    btnEdital_seta.style.padding = "0px 0px 0px 8px";
}

btnEdital.addEventListener("mouseover", hoverEdital_in);
btnEdital.addEventListener("mouseout", hoverEdital_out);
// Fim do Hover


// Slide de imagens do Sobre
let slideIndex = 1;

function showSlides(num)
{
    let i;
    let slides = document.getElementsByClassName('sobre_slide');
    let dots = document.getElementsByClassName('dot');

    if (num > slides.length)
    {
        slideIndex = 1;
    }
    else if (num < 1)
    {
        slideIndex = slides.length;
    }

    for(i=0; i<slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"; 

}

function plusSlide(num)
{
    showSlides(slideIndex += num);
}
function currentSlide(num)
{
    showSlides(slideIndex = num);
}

showSlides(slideIndex);
// Fim do Slide