//esto es una prueba de git - github 

//esta es mi funcion de volver con el reload de la pagina que resolvi solita magicamente

function showFirstScreen(Mood){
 
  document.getElementById(Mood).style.display = "block";
   document.getElementById("howYouFeel").style.display = "none";
   document.getElementById("showMovies").style.display = "block";
}
document.getElementById("btnSmile").addEventListener('click',()=>{showFirstScreen("movieCardsSmile")});
document.getElementById("btnSquint").addEventListener('click',()=>{showFirstScreen("movieCardsBored")});
document.getElementById("btnSad").addEventListener('click',()=>{showFirstScreen("movieCardsSad")});

/*
function goBack(){
  document.getElementById("showMovies").style.display = 'none';
  document.getElementById("howYouFeel").style.display = 'block';
  location.reload("howYouFeel");
}
document.getElementById("btnBack").addEventListener('click',goBack); */
