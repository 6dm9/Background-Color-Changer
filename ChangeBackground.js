console.log('hello')
let btn = document.querySelector(".colorBtn");
let body = document.getElementById('body');
let colors = ["blue","hotpink","red","yellow"];
btn.addEventListener('click',func);

function func(e)
{
    //1st method USING array
    //Math.random()*5 ;returns a decimal number between 0 and 4(5-1)
    //Math.random()*6 ;returns a decimal number between 0 and 5(6-1)
    //Math.floor(Math.random()*5) ; returns a whole number between number between 0 and 4
    ///To generate a random number between a range , i.e min - max
    //Math.floor(Math.random() * (max - min + 1) ) + min;
    //****USING MATH.FLOOR(MATH.RANDOM()*COLORS.LENGTH)
    let vv = Math.floor(Math.random()*(colors.length));
    console.log(colors[vv]);
    alert(colors[vv]);
    body.style.backgroundColor = colors[vv];
    
    
    //2nd Method ; CREATING RANDOWM RGB VALUE
    //let r = Math.floor(Math.random()*256);
    //let g = Math.floor(Math.random()*256);
    //let b = Math.floor(Math.random()*256);
    //console.log(r,g,b);
    //body.style.backgroundColor = "rgb(" + r + "," + g + "," + b +")";
   
    
    //3rd Method
    //****USING OFFSET; i.e poistion(x,y) at which we have clicked
    //    let x = e.offsetX;
    //    let y = e.offsetY;    
    //    body.style.backgroundColor = "rgb("+ x +","+y+",50)";
}
