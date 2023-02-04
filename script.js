const opensea = document.querySelector(".fa-magnifying-glass");
const search = document.querySelector(".result");


opensea.addEventListener('click', function(){
  search.classList.toggle("search-bar");
  
});

const bars = document.querySelector(".fa-bars");
const slidout = document.querySelector(".menu");

bars.addEventListener('click', function(){
  slidout.classList.toggle("slideout-menu");
  slidout.getElementsByClassName.display="block";
});
