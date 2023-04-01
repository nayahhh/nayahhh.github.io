window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('stick', window.scrollY > 0);
})

function toggleMenu(){
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active');
	
}



// Add active class to the current href (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("lnk");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}