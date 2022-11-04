//Clicando no icone Menu
var icone = document.getElementById("icone");
var itens = document.getElementById("itens");

icone.addEventListener('click',function(){
   if(itens.style.display == 'block'){
    itens.style.display = 'none'
   }else{
    itens.style.display = 'block'
    itens.style.backgroundColor = '#858584'
    itens.style.borderRadius = '7px'
   }
})

// Smoth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (this.window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});