jQuery.ajax(url, method, body, success, fail)

jQuery.ajax = function (url, method, body, success, fail){
    let url=url;
    let method=method;
    let body=body;
    let success=success;
    let fail=fail;
    let request=new XMLHttpRequest()
    request.open(method,url)
    request.send(body)
    request.onreadystatechange=function(){
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                console.log('请求成功了，准备执行success程序')
                success()
            }else if(request.status>=400){
                console.log('请求失败了，准备执行fail程序')
                fail()
            }
        }
    }
}