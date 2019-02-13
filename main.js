window.onload=function(){
  let state=document.querySelector("#state");
  let data=document.querySelectorAll(".btn");
  let symbol=document.querySelectorAll(".symbol");
  let reset=document.querySelector(".reset");
  reset.addEventListener("click",function(){
    resetGame();
  });
  let odd=true, clicks=0;
  let values=new Array(9);

  for (let i = 0; i < data.length; i++) {
    data[i].addEventListener("click",function(){
      buttonClick(i);
      console.log("values: ",values);
    });
  }

  function buttonClick(i){
    clicks++;
    if(odd){
      symbol[i].innerHTML=values[i]='X';
      state.innerHTML="O's turn.......";
    }
    else{
      symbol[i].innerHTML=values[i]='O';
      state.innerHTML="X's turn.......";
    }
    removeVisibility(i);
    odd=!odd;
    if(clicks>4){
      if(validateGame(i)==true){
        removeButtons();
        state.innerHTML=values[i]+" Won the game";
        alert(values[i]+" has won the game. Reset to play again");
      }
      else if (clicks==9){
        state.innerHTML="Match Drawn";
        alert("Match Drawn. Reset to play again");
      }
    }
  }

  function removeVisibility(i)
  {
    data[i].style.setProperty("display","none");
  }

  function validateGame(i){
    if(validateCol(i)==true){
      return true;
    }
    else if(validateRow(i)==true) {
      return true;
    }
    else if(i%2==0 && validateDiagonal()==true){
      return true;
    }
    else {
      return false;
    }
  }

  function validateCol(i){
    let parent;
    if(i%3==0){
      parent=0;
    }
    else{
      parent=i%3;
    }
    if((values[parent]==values[parent+3]) && (values[parent+3]==values[parent+6])){
      return true;
    }
    else {
      return false;
    }
  }

  function validateRow(i){
    let parent=Math.floor(i/3);
    parent*=3;
    if((values[parent]==values[parent+1]) && (values[parent+1]==values[parent+2])){
      return true;
    }
    else {
      return false;
    }
  }

  function validateDiagonal(){
    if(((values[0]==values[4]) && (values[4]==values[8])) || ((values[2]==values[4])&&(values[4]==values[6]))){
      return true;
    }
    else {
      return false;
    }
  }

  function removeButtons(){
    for (var i = 0; i < data.length; i++) {
      data[i].style.setProperty("display","none");
    }
  }

  function resetGame(){
    window.location.reload();
  }
}
