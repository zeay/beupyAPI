var xmlhttp;
var htmlElems = {
    ipContainer: document.getElementById('ipSection'),
    ipData: document.getElementById('ipInfo'),
    country: document.getElementById('country'),
    city: document.getElementById('city'),
    long: document.getElementById('long'),
    lat: document.getElementById('lat'),
    reg: document.getElementById('reg'),
    timezone: document.getElementById('timezone'),
    err: document.getElementById('error')
}
htmlElems.ipContainer.style.display = 'none';
htmlElems.err.style.display = 'none';


if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

function createhtml(err,data) {
    if(!err){
        htmlElems.err.style.display = 'none';
        htmlElems.ipData.innerHTML = data.ip;
        htmlElems.country.innerHTML = data.info.country;
        htmlElems.city.innerHTML = data.info.city;
        htmlElems.long.innerHTML = data.info.ll[0];
        htmlElems.lat.innerHTML = data.info.ll[1];
        htmlElems.reg.innerHTML = data.info.region;
        htmlElems.timezone.innerHTML = data.info.timezone;
        htmlElems.ipContainer.style.display = 'block';
    }else{
        htmlElems.ipContainer.style.display = 'none';
        htmlElems.err.innerHTML = "Error Retrieving File";
        htmlElems.err.style.display = 'block';
    }
}

function createRequest(method, path, callback){
    var methodUpperCase = method.toUpperCase();
    xmlhttp.onreadystatechange = callback;
    xmlhttp.open(methodUpperCase, path, true);
    xmlhttp.send();
}


createRequest('get', 'https://apibeupy.openode.io/getIp', function(){
    if(this.readyState === 4 && this.status === 200){
        var result = JSON.parse(this.response);
        console.log('I am running no error');
        createhtml(null,result);
    }else{
        console.log('I am running error');
        createhtml("Error", null);
    }
})