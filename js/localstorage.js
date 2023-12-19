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

localStorage.setItem('product',JSON.stringify(product));