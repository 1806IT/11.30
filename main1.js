window.jQuery=function(nodeOrselector){
    let nodes={}
    nodes.addClass=function(){}
    nodes.html=function(){}
    return nodes
}

window.jQuery.ajax=function({method,url,body,successFn,failFn}){
    return new Promise(function (resolve,reject){
        var request = new XMLHttpRequest()
        request.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    successFn.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    failFn.call(undefined.request)
                }
            }
        }
        request.send(body)   
    })
}
window.$=window.jQuery


myButton.addEventListener('click',(e)=>{
    let obj={
        
    }
    window.jQuery.ajax(
        {url: '/xxx',
        method: 'post',
        body: 'a=1$b=2',
        successFn: (x) => { console.log('成功') 
        console.log(x)},
        failFn: (request) => { console.log('失败') }
        })
})
