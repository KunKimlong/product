const products = JSON.parse(localStorage.getItem('product'));

function ViewProduct(){
    
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
                <div class="text-center">
                    <button type="button" class="btn btn-primary" onclick="openUpdate(${i})" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                        Update
                    </button>
                    <button type="button" id="btn-delete" onclick="Delete(${i})" class="btn btn-primary">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
`
});
document.getElementById('demo').innerHTML = column;
}

ViewProduct();

function Delete(i){
    for(var indexproduct in products ){
        if(indexproduct == i){
            products.splice(i,1);
            ViewProduct();
        }
    }
}

function openUpdate(i){
    document.getElementById('index').value = i;
    document.getElementById('name').value = products[i].title;
    document.getElementById('min-price').value = products[i].minprice;
    document.getElementById('max-price').value = products[i].maxprice;
}

var btnSave = document.getElementById("btn-save");
btnSave.addEventListener('click',function(){
    var index = document.getElementById("index").value;
    var title_txt = document.getElementById("name");
    var minprice_txt = document.getElementById('min-price');
    var maxprice_txt = document.getElementById('max-price');
    var image_file = document.getElementById("image");
    if(image_file.value != ''){
        products[index].image = 'assets/Image/'+image_file.files[0].name
    }


    products[index].title = title_txt.value;
    products[index].minprice = minprice_txt.value;
    products[index].maxprice = maxprice_txt.value;
    ViewProduct();
});

