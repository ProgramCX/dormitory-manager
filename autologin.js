export function login(source){
    var login=false;
    //从Cookie中读取并自动登录
    if(login){
        window.location.href=source;
    }else{
        console.log("here");
        window.location.href="login/index.html?src="+source;
    }
    return login;
}

