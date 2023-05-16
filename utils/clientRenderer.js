export function renderInfoBar(ip, location, timezone, isp){
    document.getElementsByClassName("ipAddress")[0].innerHTML = ip;
    document.getElementsByClassName("location")[0].innerHTML = location;
    document.getElementsByClassName("timezone")[0].innerHTML = timezone;
    document.getElementsByClassName("isp")[0].innerHTML = isp;
}
