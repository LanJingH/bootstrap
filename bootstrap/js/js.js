;(function($){
	// 循环轮播到上一个项目
      $(".prev-slide").click(function(){
         $("#myCarousel").carousel('prev');
      });
      // 循环轮播到下一个项目
      $(".next-slide").click(function(){
         $("#myCarousel").carousel('next');
      });
	 // 循环轮播到某个特定的帧
	  // 初始化轮播
      $(".start-slide").click(function(){
         $("#myCarousel").carousel('cycle');
      });
      $(".slide-one").click(function(){
         $("#myCarousel").carousel(0);
      });
      $(".slide-two").click(function(){
         $("#myCarousel").carousel(1);
      });
      $(".slide-three").click(function(){
         $("#myCarousel").carousel(2);
      });
      $(".slide-four").click(function(){
         $("#myCarousel").carousel(3);
      });
      $(".slide-five").click(function(){
         $("#myCarousel").carousel(4);
      });
      $(".slide-six").click(function(){
         $("#myCarousel").carousel(5);
      });
      //点击菜单
      var flag=false;
      $(".menu_img").click(function(){
         if(!flag){
            $(".menu li").show();
            flag=true;
           /* $(".menu>ul").width("100%");*/
         }else{
            $(".menu li").hide();
            flag=false;
         }
      })
})(jQuery)