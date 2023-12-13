const product = [
    {
        id:1,
        title:'Dress 001',
        minprice:13,
        maxprice:18,
        image:'assets/Image/117-thumb12.jpg'
    },
    {
        id:2,
        title:'Women Suit 001',
        minprice:11,
        maxprice:17,
        image:'assets/Image/569-thumb07.jpg'
    },
    {
        id:3,
        title:'T-Shirt 001',
        minprice:13,
        maxprice:18,
        image:'assets/Image/683-thumb02.jpg'
    },
    {
        id:4,
        title:'T-Shirt 002',
        minprice:10,
        maxprice:16,
        image:'assets/Image/thumb03.jpg'
    },
    {
        id:5,
        title:'T-Shirt 003',
        minprice:11,
        maxprice:17,
        image:'assets/Image/thumb04.jpg'
    },
];
// console.log(product);

var column = '';

product.forEach((val,i,arr)=>{
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