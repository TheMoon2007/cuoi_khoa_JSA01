let products = {
    data: [
        {
            name:"Apple Watch Series 8",
            price:"8.990.000",
            img:"https://cdn.tgdd.vn/Products/Images/7077/289610/apple-watch-s8-gps-45mm-day-silicone-den-xanh-tn-600x600.jpg"
        },

        {
            name:"Apple Watch Series 9 ",
            price:"7.590.000",
            img:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lq2xf2xveqj629"
        },

        {
            name:"Apple Watch Ultra 2",
            price:"15.990.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7chze0i7RgA-TLkP8Biao-qt_omNzwJQgg&usqp=CAU"
        },

        {
            name:"Apple Watch SE 2",
            price:"6.190.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEmIcMx8RYs7FCJtpvjcbp-Gc1mxK_CFnBQ&usqp=CAU"
        },

        {
            name:"Apple Watch Nike",
            price:"12.690.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIoXGycleRqisPMv7lKm1_bSxxb5wyFkqcw&usqp=CAU"
        },

        {
            name:"Apple Watch Series 1",
            price:"2.480.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyf2CWWO0ZpFqwN7QeH5RXcSS-6uMMVfwPA&usqp=CAU"
        },

        {
            name:"Apple Watch Series 2",
            price:"4.090.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pfBYhypKG2jZImK1qEROiD_yniN8__3LCA&usqp=CAU"
        },

        {
            name:"Apple Watch Series 3",
            price:"18.000.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorreSYLVelkaqh7Y3gJimBzeAm9EFaAZr3w&usqp=CAU"
        },

        {
            name:"Apple Watch Series 4",
            price:"11.460.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNGF68SqzbcJTZcGNHgeElZqD0I_BXNLpNChAvVSkhYP0VO1D9c3bh0Y_U-CnMgRmqPM&usqp=CAU"
        },

        {
            name:"Apple Watch Series 5",
            price:"11.500.000",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1yU2HW2G739VjiJ7NS9WyXlBJgKjTWhsRg&usqp=CAU"
        },
    ]
}
for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let img_sp1 = document.createElement("div")
    img_sp1.classList.add("img_sp1")

    let image = document.createElement("img")
    image.setAttribute("src",items.img)
    img_sp1.appendChild(image)
    card.appendChild(img_sp1)

    let container_sp1 = document.createElement("div")
    container_sp1.classList.add("container_sp1")

    let name = document.createElement("p");
    name.classList.add("name_sp1");
    name.innerHTML = items.name;
    container_sp1.appendChild(name);

    let price = document.createElement("p");
    price.classList.add("gia_sp1");
    price.innerHTML = "Price: " + items.price;
    container_sp1.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container_sp1.appendChild(btn)
  
    card.appendChild(container_sp1);
    document.getElementById("sp1").appendChild(card);
}
// Khởi tạo một mảng trống để lưu thông tin sản phẩm
let product = [];

// Lặp qua mỗi sản phẩm trong mảng products.data
for (let item of products.data) {
    // Khởi tạo một biến product bằng cách parse một chuỗi JSON từ local storage với key là "sp1"
    let product = JSON.parse(localStorage.getItem("sp1")) || [];

    // Thêm thông tin của sản phẩm hiện tại vào mảng product
    product.push({
        name: item.name_sp1,
        price: item.gia_sp1,
        images: item.img_sp1
    });

    // Lưu lại mảng product đã được cập nhật vào local storage
    localStorage.setItem("sp1", JSON.stringify(product));
}
