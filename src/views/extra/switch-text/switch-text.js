
/*switch-text by Edwin Saul https:edwinsaul.com*/

// how to work:
//    a div whit class="switch-text"
//    contains a subdiv whit style "display:none"
//    switch the contains of the elements

//----------------------------------------------------
function switchText_get()        {
  var cookies = document.cookie.split(';');
//  console.log(cookies);
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
 //   console.log(cookie);
    if (cookie.indexOf('switchText_cookie=') === 0) {
      if (cookie.replace("switchText_cookie","").replace("=","").trim()==="true") {
	return true;
      } else {
	return false
      };
    }; 
  };
  return undefined; 
};
//----------------------------------------------------
function switchText_set(state)   {
  var expiration= new Date();
  expiration.setDate(expiration.getDate()+7);
  var cookie = 'switchText_cookie=' + state+ '; expires=' + expiration.toUTCString() + '; path=/; sameSite=None; Secure';
  //console.log(cookie);
  document.cookie = cookie;
};  
//----------------------------------------------------
function switch_a_element(element) {
  var divChild=null;
  var subChilds=element.childNodes;
  for (var x=0; x<subChilds.length; x++) {
    if (subChilds[x].nodeName.toLowerCase()==="div") {
      divChild=subChilds[x]; break;
    }
  }
  if (divChild!= null) {
    let old_text=element.childNodes[0].textContent.trim().slice().replace(/\n/g, "");
    let new_text=divChild.innerText.trim().slice().replace(/\n/g, "");
    let newdiv=document.createElement("div");
    newdiv.style.display="none";
    newdiv.innerHTML=old_text;
    element.innerText=new_text;
    element.appendChild(newdiv);
  }
}

function switch_a_div_element(element){
  let childs=element.childNodes;
  for (let i=0;i<childs.length;i++){
    let element=childs[i];
    let myview=window.getComputedStyle(element).getPropertyValue("display");
    if (myview=="none"){
      element.style.display="block";
    }else {
      element.style.display="none";
    };
  };
};
//---------------------------------
function switch_all_elements(switchText_var=true) {
  if (switchText_var){
    let valueSwitch=switchText_get();
    switchText_set(!valueSwitch);
  } 
 let all_elements=document.getElementsByClassName("switch-text");
  for (var x=0; x<all_elements.length; x++ ) {
    switch_a_element(all_elements[x]);
  };
  let all_div_elements=document.getElementsByClassName("switch-div");
  for (var x=0; x<all_div_elements.length; x++ ) {
    switch_a_div_element(all_div_elements[x]);
  };
  // config title
  swapTitle();
  configTitle();
}

// config button to switch texts
var switch_text_button=document.getElementById("switch-text-button");
try {
switch_text_button.addEventListener("click",switch_all_elements);
}catch{};

// autoconfig lang - es
var browser_lang=navigator.language || navigator.userLanguage;
if ( switchText_get()===undefined ) {
  if (browser_lang.startsWith("es")){
    switchText_set(true);
  }
}

//console.log(switchText_get());
if (switchText_get()){
  switch_all_elements(false);
} else {
  configTitle();
};

