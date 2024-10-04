function logined(){
    //TODO: 判断是否登录
    return true;
}
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
    var sidebarHeight=$(window).height()-footerHeight;
    $('.sidebar').height(sidebarHeight);
    $('.sidebar img').css("margin-top",menuHeight+10);

}
function init(){
        if(!logined()){
            window.location.href="login/index.html";
            return;
        } 
        iniSize();
}
init();
