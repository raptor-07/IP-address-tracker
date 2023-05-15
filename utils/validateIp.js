export function validator(ip) {
    // IPv4 pattern
    var ipv4Pattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
    // IPv6 pattern
    var ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
    if (ipv4Pattern.test(ip) || ipv6Pattern.test(ip)) {
      return true;
    } else {
      return false;
    }
}