// function create image div
//
//
function image_div(path){
  let image=image_get(path);
  if (image!==undefined) {
    let styleImg={
      maxHeight:"45vh",
    };
    let img=React.createElement("img",{className:"img-fluid mx-auto d-block",style:styleImg,src:image});
    return React.createElement("div",{className:"container"},
          br,
        React.createElement("div",{className:"row justify-content-center"},
	  React.createElement("div",{className:"col"},img),
	 ),
          br,
      );
  } else {
    return null;
  };
};
