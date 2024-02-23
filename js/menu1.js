$(document).ready(function(){
/* 모든 주메뉴에 걸어 둔것 */
  $(".menu").hover(function(){
    $(this).find(".sub").stop().slideDown();

  },function(){
  $(this).find(".sub").stop().slideUp();
  });








    let $img = $(".changeimg ul li");
  let $btn = $(".btn ul li");
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldidx = 0; 
  let idx = 0; 
  let img_n = $img.length; 

  //이미지와 버튼이 바뀌는 함수
  function changeImg(idx){ 
    if(oldidx != idx){ 
      $btn.eq(oldidx).removeClass("active"); 
      $btn.eq(idx).addClass("active"); 
      $img.eq(oldidx).stop().fadeOut("300"); 
      $img.eq(idx).stop().fadeIn("300"); 
    }
    oldidx = idx;  
  };

  //자동함수 생성
  function changeAuto(){
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto,4000); 

  //하단버튼
  $btn.click(function(){
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  //좌우버튼
  $lbtn.click(function(){
    clearInterval(timer);
    idx--;
    if(idx < 0){ 
      idx=img_n-1;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){ 
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto,4000);
  });

  let goldidx=0;
  let gidx=0;

  function galleryImg(gidx){
    if(goldidx!=gidx){
      $(".largeImg li").eq(goldidx).stop().fadeOut(300);
      $(".largeImg li").eq(gidx).stop().fadeIn(300);
    };
    goldidx=gidx;
  };

  //이전버튼............................
  $(".left_btn").click(function(){
    gidx--;
    if(gidx<0){
      gidx=5;
    }
    galleryImg(gidx);
  });


  //다음버튼................
  $(".right_btn").click(function(){
    gidx++;
    if(gidx>5){
      gidx=0;
    }
    galleryImg(gidx);
  });













/* sec4_자세히보기 */

$(".sec4_img ul li img").hover(function(){
if(this){
  $(".sec4_img ul button").addClass("on");
} else if(this){
  $(".sec4_img ul button").removeClass("on");
}
});

/* sec4_좌우로 롤링하기 */

let banner_w= $(".sec4_imgs ul li").width()+20;  //배너간 오른쪽여백이 있는 겨우 여백만큼(10px) 더해줌
  
$(".sec4_imgs ul li:last").prependTo(".sec4_imgs ul");
//목록 마지막 이미지를 목록 안의 가장 앞으로 배치
$(".sec4_imgs ul").css({ left:-banner_w});
//첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기


//자동으로 슬라이드 함수생성
function bannerAuto(){
  $(".sec4_imgs ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
    $(".sec4_imgs ul li:first-child").appendTo(".sec4_imgs ul"); 
    $(this).css({left:-banner_w}); 
  });
};

bauto = setInterval(bannerAuto,4000);

//다음보기
$(".sec4_btn .ban_right").click(function(){
  clearInterval(bauto);
  $(".sec4_imgs ul").stop().animate({left:"-="+banner_w+"px"},500,function(){			
    $(".sec4_imgs ul li:first-child").appendTo(".sec4_imgs ul"); //첫번째 이미지가 맨뒤로 이동
    $(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
  });	
  bauto = setInterval(bannerAuto,4000);
});

//이전보기
$(".sec4_btn .ban_left").click(function(){
  clearInterval(bauto);
  $(".sec4_imgs ul").stop().animate({left:"+="+banner_w+"px"},500,function(){			
    $(".sec4_imgs ul li:last-child").prependTo(".sec4_imgs ul"); //마지막 이미지가 맨앞로 이동
    $(this).css({left:-banner_w}); //다음 움직임을 위해 초기화(최종목적지)
  });	
  bauto = setInterval(bannerAuto,4000);
});

//마우스를 올리면 슬라이드자동함수 멈추고, 마우스를 내리면 다시 자동함수 실행.....
$(".sec4_imgs").hover(function(){ 
  clearInterval(bauto);
}, function(){
  bauto = setInterval(bannerAuto,4000);
});



/* sec6 */
$(".btn li").click(function(){

  $(this).addClass("active");  
  $(this).siblings().removeClass("active"); 
  
  let result = $(this).attr("data-alt");
  $(".tabContents div").removeClass("active");
  $("#"+result).addClass("active").hide().fadeIn();
});



/* 아코디언 */
$(".title").click(function(){

  $(this).siblings(".title").removeClass("on");
  $(this).toggleClass("on");/* 화살표방향이바뀜 */
  $(this).siblings(".content").stop().slideUp();
  $(this).next().stop().slideToggle();
});




});

/* https://mu08.tistory.com/130 */