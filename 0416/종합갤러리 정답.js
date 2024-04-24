//갤러리 스크립트

//변수 페이지 번호, 좌,우버튼 ,
let n = 1
let img_n = document.querySelectorAll('.list_photo > li');
let l_btn = document.querySelectorAll('.fa-angle-left')
let r_btn = document.querySelectorAll('.fa-angle-right')
document.getElementById('img_num').innerHTML=`${n}/17`;

//썸네일 이미지 목록(li)태그 클릭시 해당 인덱스번호를 구하여
for(let i=0; i<img_n.length; i++){
  img_n[i].addEventListener('click',function(){
    // console.log(i+1);
    n = i+1
    imgChange(n)
  })
}
// 이미지 변경하기위한 함수로 넘기기

/*사용자 정의 함수 imgChange()
1. 숫자변경
2. 이미지변경
*/
//forEach함수는 배열에서만 사용가능한 메서드이다.
/*
문법
객채.forEach((매개변수,index)){
  각각실행할 함수 내용을 적는다.
}*/
//좌우버튼 클릭시 n값을 imgChange함수에 넘기기
l_btn.forEach((el)=>{
  el.addEventListener('click',function(){
    alert('왼쪽클릭');
    if(n==1){
      n=17;
    }else{
      n--;
    }
    imgChange(n);
  });
});

r_btn.forEach((el)=>{
  el.addEventListener('click',function(){
    alert('오른쪽클릭');
    if(n==17){
      n=1;
    }else{
      n++;
    }
    imgChange(n);
  });
});

function imgChange(){
  console.log(n);
  //페이지넘버 바뀌는거
  document.getElementById('img_num').innerHTML=`${n}/17`;

  //이미지 바뀌는거
  document.getElementById('main').src=`./images01/movie_image${n}.jpg`

  //li목록에 적용된 서식 모두 제거
  for(let j=0; j<img_n.length;j++){
    img_n[j].style.border='none'
    img_n[j].style.box_sizing='border-box'
  }
  img_n[n-1].style.border='3px solid #f00'
}