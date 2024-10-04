function iniSize(){
    resizeControl();
    $(window).resize(function(){
     resizeControl();
    });
 }
 
 function resizeControl(){
     var sidebarWidth=$('.sidebar').innerWidth();
     var mainContentWidth=$(window).width()-sidebarWidth;
     $('.main-content').width(mainContentWidth);
 
     var menuHeight=$('.menu').innerHeight();
     var footerHeight=$('#footer').innerHeight();
     var sidebarHeight=$(document).height()-footerHeight;
     $('.sidebar').height(sidebarHeight);
     $('.sidebar img').css("margin-top",menuHeight+10);
}
iniSize();