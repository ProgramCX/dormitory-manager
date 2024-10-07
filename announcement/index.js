import { login } from "../autologin.js";

function addRow(time,content){
    var tr = ' <tbody> '+ 
						'<td >' +time+'</td>'+ 
						'<td > '+content+' </td>' 
			' </tbody>';
    $("#notice-table").append(tr);
}
function init(){
    if(login()){
        //读取用户信息
    }else{
        window.location.href="../login/index.html?src=../announcement/index.html";
    }
    addRow('2005.11.20','伟大的程旭诞生');
}

init();