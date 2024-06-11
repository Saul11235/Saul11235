function main_game() {
    let titleGame=switchTextReact("h2",LJS_get("view_main/game0"),LJS_get("view_main/game1"));
    return (
        React.createElement('div', null,
	  br,
	  br,
	  titleGame,
	  br,
	  br,
        )
    );
}


