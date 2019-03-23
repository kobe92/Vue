//ajax事件
var buttons = document.getElementsByTagName("button");
for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = handleButtonPress;
}
var httpRequest;

function handleButtonPress(e) {
    clearEventDetails();
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;//在请求生命周期的不同阶段触发
    httpRequest.onerror = handleError;//在请求失败时触发
    httpRequest.onload = handleLoad;//在请求完成时触发
    httpRequest.onloadend = handleLoadEnd;//在请求已完成是除服，无论成功还是发生错误
    httpRequest.onloadstart = handleLoadStart;//在请求开始时触发
    httpRequest.onprogress = handleProgress;//触发以提示请求的进度
    httpRequest.open("GET", e.target.innerHTML + ".html");
    httpRequest.send();
}

function handleResponse() {
    displayEventDetails("readyState(" + httpRequest.readyState +")");
    if(httpRequest.readyState == 4 && httpRequest.status == 200){
        document.getElementById("target").innerHTML = httpRequest.responseText;
    }
}
function handleError(e) {displayEventDetails("error", e);}
function handleLoad(e) {displayEventDetails("load", e);}
function handleLoadEnd(e) {displayEventDetails("loadend", e);}
function handleLoadStart(e) {displayEventDetails("loadstart", e);}
function handleProgress(e) {displayEventDetails("progress", e);}


//lengthComputable 如果能够计算数据流的总长度则返回true
//loaded返回当前已载入的数据量
//total 返回可用的数据总量
function  clearEventDetails() {
    document.getElementById("events").innerHTML =
        "<tr><th>Event</th><th>lengthComputable</th><th>loaded</th><th>total</th></tr>"
}
function displayEventDetails(eventName, e){
    if(e){
        document.getElementById("events").innerHTML +="<tr><td>"+eventName+"</td><td> "+
            e.lengthComputable + "</td><td>"+e.loaded+"</td><td>"+e.total+"</td></tr>";
    }else{
        document.getElementById("events").innerHTML += "<tr><td>"+eventName+
            "</td><td>NA</td><td>NA</td><td>NA</td></tr>";
    }
}