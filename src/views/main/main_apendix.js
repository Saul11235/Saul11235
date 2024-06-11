function main_apendix() {

    let titleApendix=switchTextReact("h2",LJS_get("view_main/apendix0"),LJS_get("view_main/apendix1"));
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleApendix,
	  br,
	  br,
        )
    );
}


