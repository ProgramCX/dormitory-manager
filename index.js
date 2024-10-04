import { login } from "./autologin.js";
function logined(){
    //TODO: 判断是否登录
    return true;
}
function init(){
        if(!login("index.html")){
            window.location.href="login/index.html";
            return;
        } 
        iniSize();
}
init();
