const products = JSON.parse(localStorage.getItem('product'));

// console.log(products);
var column = '';
// localStorage.setItem('product',JSON.stringify(products));
products.forEach((val,i,arr)=>{
    column+=`
    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${val.image}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${val.title}</h5>
                    <!-- Product price-->
                    $${val.minprice} - $${val.maxprice}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            </div>
        </div>
    </div>
`
});

document.getElementById('demo').innerHTML = column;

