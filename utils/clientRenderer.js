export function renderInfoBar(ip, location, timezone, isp){
    
    document.getElementsByClassName("ipAddress")[0].children[1].innerHTML = ip;
    document.getElementsByClassName("location")[0].children[1].innerHTML = location;
    document.getElementsByClassName("timezone")[0].children[1].innerHTML = timezone;
    document.getElementsByClassName("isp")[0].children[1].innerHTML = isp;
}
