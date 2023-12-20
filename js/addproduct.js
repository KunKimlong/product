var btnAdd = document.getElementById('btn-add');
var Name   = document.getElementById('name');
var minPrice = document.getElementById('min-price');
var maxPrice = document.getElementById('max-price');
var image    = document.getElementById('image');

const allproduct = JSON.parse(localStorage.getItem('product'));


btnAdd.addEventListener('click',()=>{
    // console.log(image.files[0].name);
    allproduct.push({
        id:allproduct.length+1,
        title:Name.value,
        minprice:Number(minPrice.value),
        maxprice:Number(maxPrice.value),
        image:'assets/Image/'+image.files[0].name
    });
    localStorage.setItem('product',JSON.stringify(allproduct));
});