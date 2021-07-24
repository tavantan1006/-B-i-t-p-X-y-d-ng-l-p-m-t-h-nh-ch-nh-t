let myRectangle = function (horizontal,vertical){
 this.horizontal = horizontal;
 this.vertical = vertical;

 this.getRectangularArea = function (){
     return this.horizontal*this.vertical;
 }
 this.getPerimeterOfaRectangle = function (){
     return (this.horizontal + this.vertical)*2;
 }

 this.createRectangle = function (){
     let ctx = document.getElementById("myCanvas");
     ctx = ctx.getContext("2d");
     ctx.rect(10,10,this.horizontal,this.vertical);
     ctx.strokeStyle = "red";
     ctx.stroke();
 }

}
let rectangle = new myRectangle(10,5);
alert(rectangle.getPerimeterOfaRectangle());
alert(rectangle.getRectangularArea());
rectangle.createRectangle();