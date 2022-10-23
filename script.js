let screen = document.getElementById("screen");
buttons = document.getElementById("button");
for (item of buttons) {
  item.addEventListner('click',(e) =>{
	buttonText = e.target.innerHtml;
	
  }
}
