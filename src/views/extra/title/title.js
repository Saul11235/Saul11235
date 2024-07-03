// change title

var titleVar ="EdwiSaul1 Ok";
var titleVar2="EdwiSaul2 ";

function setTitle(title1,title2="XXX") {
  titleVar=title1;
  titleVar2=title2;
};

function swapTitle() {
  let v=titleVar;
  titleVar=titleVar2;
  titleVar2=v;
};

function configTitle() {
  document.title=titleVar;
};
