

function contactBody() {
  let cr=React.createElement;
  let list=[];
  let titulo=switchTextReact("h2",LJS_get("view_main/contact_title0"),LJS_get("view_main/contact_title1"));
  let texto1=switchTextReact("p",LJS_get("view_main/contact_text_1_0"),LJS_get("view_main/contact_text_1_1"));
  let botones=tag_link("view_main/contact_links");
  //let texto2=switchTextReact("p",LJS_get("view_main/contact_text_2_0"),LJS_get("view_main/contact_text_2_1"));
  list.push(br4);
  list.push(texto1);
  list.push(botones);
  //list.push(br4);
  //list.push(texto2);
  let subbody=cr("div",{style:{"margin":"10px"}},list);
  return cr("div",{style:{"margin":"5px"},align:"center"},titulo,subbody);
};

function main_contact() {
    let cr=React.createElement;
    //let titleContact=switchTextReact("h2",LJS_get("view_main/contact0"),LJS_get("view_main/contact1"));
    let styleTile={
      className:"row",
      style:{
	backgroundColor:principalBlue,
	color:"white",
	"border-radius":"10px",
	"margin":"10px",
	"padding":"10px",
	"min-height":"30vh",  //<--- altura panel contacto
	"align-items":"center",
      } 
    };
    let styleCol={
      className:"col-xs-12 col-sm-6",

      pading:"10px",
      margin:"10px",
    };
    let tile=cr("div",styleTile,
      cr("div",styleCol,contactBody()),
      cr("div",styleCol,main_game()),
    );
    return (
        React.createElement('div', null,
	  br,
	  tile,
        )
    );
}


