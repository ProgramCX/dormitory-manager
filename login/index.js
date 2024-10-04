function inputIsValid(){
    let account=document.getElementById('id');
    let password=document.getElementById('psw');
    if(account.value.trim()=='' || password.value.trim()==''){
       return false;
    }
    return true;
}

function init(){
    document.getElementById('submit').addEventListener('click',function(){
        if(!inputIsValid())
            $('#error #content').text('学号和密码不能为空！');
            let errorDialog=document.querySelector("#error");
            $('#error #ok').on('click', function() {
                document.getElementById('error').close();
            });
            errorDialog.show();        
    });
}

init();
