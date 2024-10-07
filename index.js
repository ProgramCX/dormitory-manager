import  {login}  from "./autologin.js";
let logined=false;
function init(){
    // if(!logined){
    //     $(document).ready(function(){
    //         import("./autologin.js").then(module =>{
    //             if(module.login("index.html")){
    //                 //TODO:读取用户信息... 
    //                 logined=true;
    //             }
    //         }).finally({});
    //     });
    // }
        logined=login();
        if(logined){
           //加载用户信息 
        }else{
            //跳转到登录页面
            window.location.href="../login/index.html?src=../index.html";
        }
        iniSize();
}
init();
