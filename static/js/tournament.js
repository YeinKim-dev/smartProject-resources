//햄버거 메뉴
const toggleBtn = document.querySelector('.navbar_toggleBtn'); 
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 

//토너먼트 스타트
function start() {
    lezhin.start();
  }
  function preLoaingImg() {
    const preLoadingList = [
      'images/01.jpg', 'images/02.jpg', 'images/03.jpg', 'images/04.jpg', 'images/05.jpg', 'images/06.jpg', 'images/07.jpg', 'images/08.jpg', 'images/09.jpg', 'images/10.jpg', 'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg', 'images/16.jpg'
    ], length = preLoadingList.length, tObj = document.getElementsByTagName("BODY")[0];
    let i = 0, imgNode;
    const hiddenNode = document.createElement('DIV');
    hiddenNode.className = 'pre_load soff';
    for(i; i < length; i++) {
      imgNode = document.createElement('IMG');
      imgNode.setAttribute('src', preLoadingList[i]);
      hiddenNode.appendChild(imgNode);
    }
    tObj.appendChild(hiddenNode);
  }
let move;

function pagemove() {
  move = setTimeout(ref,1500);
  // location.href = "chat.html";

}
function ref() {
  location.href = "chat";
}

function imglike() {
  var tt = document.getElementById("roundTitle")
  var like = document.getElementById("likeimg");
  if(like.style.display=='block'){
    like.style.display='none';

  }else{
    like.style.display='block';
    tt.style.display='none';
  }
}

  