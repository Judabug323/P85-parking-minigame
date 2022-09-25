canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 70;
car_height = 110;

Parkinglot_image = "parkingLot.jpg";
Greencar_image = "car2.png";

car_x = 10;
car_y = 218;

function add() {
    Parkinglot_Img = new Image();
    Parkinglot_Img.onload = uploadBackground;
    Parkinglot_Img.src = Parkinglot_image;
    
    Greencar_Img = new Image();
    Greencar_Img.onload = uploadBackground;
    Greencar_Img.src = Greencar_image;
}

function uploadBackground() {
	ctx.drawImage(Parkinglot_Img, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(Greencar_Img, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if(car_y >= 0) {
        car_y = car_y - 10;
        console.log("New Coordinates: X = " + car_x + ", Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(car_y <= 400) {
        car_y = car_y + 10;
        console.log("New Coordinates: X = " + car_x + ", Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(car_x >= 0) {
        car_x = car_x - 10;
        console.log("New Coordinates: X = " + car_x + ", Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(car_x <= 800) {
        car_x = car_x + 10;
        console.log("New Coordinates: X = " + car_x + ", Y = " + car_y);
        uploadBackground();
        uploadgreencar();
    }
}
