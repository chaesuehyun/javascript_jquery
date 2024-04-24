/*galler*/

$(document).ready(function(){
  //변수선언
  let g_img = $('.g_list li a');
  let img_url;


  //2.이벤트
  g_img.hover(function(){//mouseenter
    $(this).find('.caption').stop().animate({'bottom':'0px'},300)
  },function(){//mouseleave
    $('.caption').stop().animate({'bottom':'-40px'},300)
  });

  //이미지 클릭시 달 윈도 띄우기
  g_img.click(function(){
    //선택한 a요소의 href속성값을 변수에 저장한다.
    img_url = $(this).attr('href');
    let modal = `
    <div class='modal'>
      <div>
        <img src="${img_url}" alt="">
        <input type="button" value="닫기" class="c_btn">
      </div>
    </div>
    `
    /*모달 출력하기*/
    $('body').append(modal)

    $('.c_btn').click(function(){
      // $('.modal').remove() //지우면 안되는건가? 모달창
      $('.modal').hide()
    });

    return false;
  })



})
