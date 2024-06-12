// BulmaSkins -js first script - By Edwin Saul

// STEP 1.1: define BulmaSkins_get,BulmaSkins_set, to manage the BulmaSkins_cookie
// null if the cookie not exists; true light; false dark
function BulmaSkins_get()        {
  var cookies = document.cookie.split(';');
//  console.log(cookies);
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
 //   console.log(cookie);
    if (cookie.indexOf('BulmaSkins_cookie=') === 0) {
      if (cookie.replace("BulmaSkins_cookie","").replace("=","").trim()==="true") {
	return true;
      } else {
	return false
      };
    }; 
  };
  return null; 
};
//----------------------------------------------------
function BulmaSkins_set(state)   {
  var expiration= new Date();
  expiration.setDate(expiration.getDate()+7);
  var cookie = 'BulmaSkins_cookie=' + state+ '; expires=' + expiration.toUTCString() + '; path=/; sameSite=None; Secure';
  //console.log(cookie);
  document.cookie = cookie;
};  
//----------------------------------------------------
function BulmaSkins_isdarkmode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
//----------------------------------------------------
var BulmaSkins_state=true;
//----------------------------------------------------
// STEP 1.2 : create cookie if not exists
function BulmaCreateCookieIfNotExist() {
  //console.log("create cookie")
  if ( BulmaSkins_get() === null){
    if (BulmaSkins_isdarkmode()) { BulmaSkins_set(false); BulmaSkins_state=false;}
    else { BulmaSkins_set(true);BulmaSkins_state=true; }
  }

  // STEP 1.3 :first theme config
  if (BulmaSkins_get() === true) {
    document.getElementById("BulmaSkins-light").disabled=false;
    document.getElementById("BulmaSkins-dark").disabled=true;
    BulmaSkins_state=true;
  } else {
    document.getElementById("BulmaSkins-dark").disabled=false;
    document.getElementById("BulmaSkins-light").disabled=true;
    BulmaSkins_state=false;
  };
}

// BulmaSkins -js last script - By Edwin Saul

// STEP 2.2: define functions to switch themes
function BulmaSkins_ligth(){
  //
  document.getElementById("BulmaSkins-light").disabled=false;
  document.getElementById("BulmaSkins-dark").disabled=true;
  document.getElementById("BulmaSkins-light-extra").disabled=false;
  document.getElementById("BulmaSkins-dark-extra").disabled=true;
  //
  document.getElementById("BulmaSkins-switch-dark").style.display="none";
  document.getElementById("BulmaSkins-switch-light").style.display="block";
  //
  BulmaSkins_state=true;
  BulmaSkins_set(true);
}
function BulmaSkins_dark(){
  //
  document.getElementById("BulmaSkins-dark").disabled=false;
  document.getElementById("BulmaSkins-light").disabled=true;
  document.getElementById("BulmaSkins-dark-extra").disabled=false;
  document.getElementById("BulmaSkins-light-extra").disabled=true;
  //
  document.getElementById("BulmaSkins-switch-light").style.display="none";
  document.getElementById("BulmaSkins-switch-dark").style.display="block";
  //
  BulmaSkins_state=false;
  BulmaSkins_set(false);
}

// STEP 2.3: create function to switch skins
function BulmaSkins_click() {
  //console.log("click");
  if (BulmaSkins_state === true) {BulmaSkins_dark();}  
  else  { BulmaSkins_ligth(); };
};

// STEP 2.4: add event listener in switch
function BulmaSkins_init(){
  BulmaCreateCookieIfNotExist();
// STEP 2.1; config switch button
if (BulmaSkins_get() === true) {
  BulmaSkins_ligth();
  BulmaSkins_state=true;
} else {
  BulmaSkins_dark();
  BulmaSkins_state=false;
};

  var BulmaSkins_switch=document.getElementById("BulmaSkins-switch")
  BulmaSkins_switch.addEventListener("click",BulmaSkins_click);
}
