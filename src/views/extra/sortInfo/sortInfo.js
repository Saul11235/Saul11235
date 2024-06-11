// 
// Sort info for render widgets
//
//---------------------------------------------------

function getDataForCarrousel(){
  let initialVars =LJS_getSort("projects");
  let topVars =[];
  for (let i=0;i<initialVars.length;i++){
    if (LJS_get(initialVars[i]+"/top")===true){topVars.push(initialVars[i])};
  };
  for (let i=0;i<topVars.length;i++){
    let j = Math.floor(Math.random() * (i + 1));
    [topVars[i], topVars[j]] = [topVars[j], topVars[i]];
  };
  let value=5;     //<--- number of elements for carrousel
  let response=[];
  for (let i=0;i<topVars.length && i<value;i++){response.push(topVars[i])};
  return response;
};

//---------------------------------------------------

function getDataForPubs(){
  let initialVars =LJS_getSort("pubs");
  let topVars =[];
  for (let i=0;i<initialVars.length;i++){
    if (LJS_get(initialVars[i]+"/top")===true){topVars.push(initialVars[i])};
  };
  for (let i=0;i<topVars.length;i++){
    let j = Math.floor(Math.random() * (i + 1));
    [topVars[i], topVars[j]] = [topVars[j], topVars[i]];
  };
  let value=2;     //<--- number of elements for carrousel
  let response=[];
  for (let i=0;i<topVars.length && i<value;i++){response.push(topVars[i])};
  return response;
};

//---------------------------------------------------

function getLastBlogEntries(){
  let topVars=LJS_getSort("blog");
  let value=2;     //<--- number of elements for carrousel
  let response=[];
  for (let i=0;i<topVars.length && i<value;i++){response.push(topVars[i])};
  return response;
};

//---------------------------------------------------

function SortInfo(ArraySorts,key){
  // creating rawData
  let rawData=[];
  let limitGroup=6; //<-- number of elements for a group
  for (let i=0;i<ArraySorts.length;i++){
    if (key==""){
      // all
      let data=LJS_getSort(ArraySorts[i]);
      rawData=[...rawData, ...data];
    } else  {
      // exists key
      let data=LJS_getTags(ArraySorts[i])[key];
      if (Array.isArray(data)){
        rawData=[...rawData, ...data];
      };
    };
  };
  // creating groups
  let allGroups=[];
  let aGroup=[];
  for (let i=0;i<rawData.length;i++){
    aGroup.push(rawData[i]);
    if (aGroup.length>=limitGroup){
      allGroups.push(aGroup);
      aGroup=[];
    };
  };
  if (aGroup.length>=1){
    allGroups.push(aGroup);
  };
  // finsih creating groups
  return allGroups;
};

//---------------------------------------------------
