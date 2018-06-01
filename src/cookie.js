function getCookie(name) {
  const cookieStr = document.cookie;
  const nameLen = name.length;
  const nameStartIndex = cookieStr.indexOf(name+'=');
  if (nameStartIndex < 0) {
    return null;
  }
  const valueStartIndex = nameStartIndex + nameLen + 1;
  let valueEndIndex = cookieStr.indexOf(';', valueStartIndex);

  if( !valueStartIndex && name !== cookieStr.substring(0, nameLen)) {////当startIndex为0的时候说明该name是第一个cookie,那name必须就是cookieStr.substring(0, name.length)
    return null;
  }
  
  if (valueEndIndex === -1) { //说明它就是最后一个cookie，后面没有;
    valueEndIndex = cookieStr.length;
  }
  return decodeURIComponent(cookieStr.substring(valueStartIndex, valueEndIndex));
}

function SetCookie (name, value , sec , path , domain) {  
  var argv = SetCookie.arguments,
      argc = SetCookie.arguments.length,
      expires = new Date(),
      secure = (argc > 5) ? argv[5] : false;
  path = (argc > 3) ? argv[3] : null;
  domain = (argc > 4) ? argv[4] : null;
 if(sec === null || sec === '') {sec = 600 * (24 * 60 * 60 * 1000);}
  else {sec = 1000*sec;}
  expires.setTime (expires.getTime() + sec);
  document.cookie = name + '=' + escape (value) +((expires === null) ? '' : ('; expires=' + expires.toGMTString())) +((path === null) ? '/' : ('; path=' + path)) +((domain === null) ? '' : ('; domain=' + domain)) +((secure === true) ? '; secure' : '');  
}

function DeleteCookie (name) {  
  var exp = new Date(),cval = GetCookie (name);
  exp.setTime (exp.getTime() - 1);
  document.cookie = name + '=' + cval + '; expires=' + exp.toGMTString();
}
