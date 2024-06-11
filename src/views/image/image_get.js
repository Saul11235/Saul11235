// image get if exists on path
function image_get(path){
  let childs=LJS_childs(path);
  let images_extensions=[".png",".jpg",".jpeg",".svg"];
  let max1=childs.length;
  let max2=images_extensions.length;
  let images=[];
  //--------------------
  for (let i=0;i<max1;i++){
    let child=childs[i];
    for (let ii=0;ii<max2;ii++){
      if (child.endsWith(images_extensions[ii])){
	images.push(child);
	i=max1;ii=max2;
      };
    };
  };
  //--------------------
  if (images.length>0) {
    return LJS_get(path+"/"+images[0]);
  } else {
    return undefined;
  };
}
