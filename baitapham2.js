// Tên lớp
// function Circle(x, y, radius){
//     // Tên thuộc tính
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
//
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb(" + red + "," + blue + "," + green +")";
// }
// // Tên các phương thức
// function createCircle(){
//     var ctx = document.getElementById("myCanvas").getContext("2d");
//     var radius = Math.floor(Math.random() * 80);
//     var color = getRandomColor();
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var circle= new Circle(x, y, radius);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
//
// function createMultipleCircle(){
//     for(var i = 0; i < 30; i++){
//         createCircle();
//     }
// }
//
// createMultipleCircle();
//
//
// let person = {
//     name: ['Thảo', 'Nguyên'],
//     age: 20,
//     gender: 'nữ',
//     interests: ['ngủ','ăn'],
//     hoc: function () {
//         alert(this.name[0] +' '+ this.name[1] +' năm nay ' + this.age + ' tuổi. cô ấy thích ' + this.interests[0] + ' và ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//         alert('Hi! I\'m ' + this.name[0] + '.');
//
//     }
// };
// person.hoc();
// function Student(name, age, email, addrap, point1, point2) {
//     this.name = name
//     this.age = age
//     this.email = email
//     this.adđrap = addrap
//     this.point1 = point1
//     this.point2 = point2
//
//     this.get = function () {
//         let avg = (this.point1 + this.point2)/2
//         return avg;
//     }
// }
// let thang : Student = new Student('thang', '25', 'thang@gmail.com', 'Thái nguyeen', '69', "96");

// class Rectangular {
//     constructor(dai, rong,) {
//         this.dai = dai
//         this.rong = rong
//         this.get = function (){
//             return
//         }
//     }
// }
// let hinh : Rectangular = new Rectangular('96', '69')
// console
//
//
var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        // hẹn giờ để chạy hàm updateGameArea() sau mỗi 20 ms/lần
        this.interval = setInterval(updateGameArea, 20);
    },

    // hàm clear() để làm sạch canvas
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    // tạo hàm update() trong hàm tạo component() để update số liệu khi vẽ component
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
}
