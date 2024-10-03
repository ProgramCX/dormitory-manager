function logined(){
    //TODO: 判断是否登录
    return true;
}
function init(){
        if(!logined()){
            window.location.href="login/index.html";
            return;
        } 
        //改变主内容盒子宽度
        var sidebarWidth=$('.sidebar').innerWidth();
        var mainContentWidth=$(window).width()-sidebarWidth;
        $('.main-content').width(mainContentWidth);
}
init();
