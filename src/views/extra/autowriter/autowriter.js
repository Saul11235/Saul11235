/*Autowriter animate text by Edwin Saul*/

class autowriter  {
  //--------------------------
  constructor() {
    //=================================
    this.timechar=60;     //config <-autowriter
    this.timedelete=6;
    this.timeread=1400;    
    //=================================
    this.count_elem=0;   //count element in  autowriter-input
    this.count_char=0;   //count char element
    this.begin=true;     //true if begins false is erasing
    this.typingchar="_"; //char for typing
    this.textline="";    //var line text
    this.readtime=false; //time to read
  }
  //--------------------------
  wait_time(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  //--------------------------
  get_input_elements() {
    return document.getElementById("autowriter-input").getElementsByTagName("li");
  }
  //--------------------------
  get_current_element() {
    var input_elements=this.get_input_elements();
    if (this.count_elem>=input_elements.length) {
      this.count_elem=0; this.count_char=0;
      this.begin=true;
    }
    return input_elements[this.count_elem]
  }
  //--------------------------
  get_full_line() {
    var current_element=this.get_current_element()
    return current_element.childNodes[0].textContent.trim();
  }
  //--------------------------
  get_trim_line() {
    var full_line=this.get_full_line();
    if(full_line.length<this.count_char+1  && this.begin) {
      this.count_char=full_line.length;
      this.begin=false;
      this.readtime=true; //time to read
    }
    else if(this.count_char<=0 && !(this.begin) ) {
      this.count_char=0;
      this.begin=true;
      this.count_elem++;
    }
    var trim_text=full_line.slice(0,this.count_char)+this.typingchar;
    if (this.begin) {  this.count_char++; }
    else {  this.count_char--; };
    return trim_text;
  }
  //--------------------------
  run() {
    document.getElementById("autowriter-output").innerText=this.get_trim_line()
    if (this.readtime){
      this.readtime=false;
       //time to read
	setTimeout(function() {
	autowriter_obj.run();
	}, this.timeread); 
    } else if(this.begin) {
      // time to write a char
      setTimeout(function() {
	autowriter_obj.run();
	}, this.timechar); 
    } else {
      //time to delete a char
      setTimeout(function() {
	autowriter_obj.run();
      },this.timedelete);
    }
  }
  //--------------------------
}

var autowriter_obj = new autowriter();

// run autowriter

try {
autowriter_obj.run();
} catch {};

