$(document).ready(function(){

    let oimg=0;
  let nimg=0;

  $(".sec5_img span a img").click(function(){
    nimg=$(this).index();
    $(".sec5_i a").eq(oimg).removeClass("on");//썸네일 클래스 사라짐
    $(".sec5_i a").eq(nimg).addClass("on");//썸네일 클래스 불러옴
    $(".sec5_map li iframe").eq(oimg).stop().fadeOut(1000);//기존이미지 사라짐
    $("#.sec5_map li iframe").eq(nimg).stop().fadeIn(1000);//새이미지 나타남
    oimg = nimg;//새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeout....
    return false;
  });

});

