let index= [1,1];
let slideId = ["slides", "slides1"];
let bulletsId =["bullets", "bullets1"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(x, no) {
  showSlides(index[no] +=  x, no);
}

function showSlides(x, no) {
  let i;
  let slide = document.getElementsByClassName(slideId[no]);
  let bullets = document.getElementsByClassName(bulletsId[no]);

  if (x > slide.length) 
  {
  	index[no] = 1;
  }    
  
  if (x < 1) 
  {
  	index[no] = slide.length;
  }

  for (i = 0; i < slide.length; i++) 
  {
    slide[i].style.display = "none";  
  }

  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active", "");
  }

  slide[index[no]-1].style.display = "block";  
  bullets[index[no]-1].className += " active";
}

function dropdownFunction() {
  document.getElementById("opsiDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btndrop')) 
  {
    var drop = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < drop.length; i++) {
      var showDropdown = drop[i];
      if (showDropdown.classList.contains('show')) 
      {
        showDropdown.classList.remove('show');
      }
    }
  }
}