window.jQuery=function(nodeOrselector){
    let nodes={}
    nodes.addClass=function(){}
    nodes.html=function(){}
    return nodes
}

window.jQuery.ajax=function({method,url}){
    return new Promise(function (resolve,reject){
        var request = new XMLHttpRequest()
        request.open(method, url)
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined.request)
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
        headers:{
            'content-type':'application/x-www-form-urlencoded',
            'frank':'18'
        }
        }).then(
            (text)=> { console.log(text) },
            (request)=>{console.log(request)}
            )
})
