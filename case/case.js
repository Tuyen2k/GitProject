    function loadWebpage(){
    localStorage.setItem('iLogIn', 'false');
}

function information() {
    document.getElementById('introduce').style.display = 'block'
}

function home() {
    document.getElementById('introduce').style.display = 'none'
    document.getElementById('display').style.display = 'none'
}


function logIn() {
    let checkLogIn = document.getElementById('logIn').innerHTML
    if (checkLogIn === 'Đăng nhập') {
        document.getElementById('formLogIn').style.display = 'block'
    } else {
        confirm('Bạn có muốn đăng xuất không?')
        document.getElementById('logIn').innerHTML = 'Đăng nhập'
        localStorage.setItem('iLogIn', 'false');
    }
}


function submit() {
    let nameLogIn = document.getElementById('nameLogIn').value
    let passLogIn = document.getElementById('passLogIn').value
    if (nameLogIn === localStorage.getItem('username')) {
        if (passLogIn === localStorage.getItem('password')) {
            alert('Đăng nhập thành công!')
            document.getElementById('formLogIn').style.display = 'none'
            localStorage.setItem('iLogIn', 'true')
            document.getElementById('logIn').innerHTML = 'Đăng xuất'
        } else {
            alert('Vui lòng nhập lại mật khẩu!')
        }
    } else alert('Vui lòng nhập lại tên tài khoản!')
}

function cancle(){
    document.getElementById('formLogIn').style.display = 'none'
}
class Product {
    name
    price
    quantity
    img
    type

    constructor(name, price, quantity, img, type) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.img = img
        this.type = type
    }
}

let product1 = new Product('Iphone 12 Pro', 15000, 100, 'ảnh/ip12pro.jpg', 'iphone');
let product2 = new Product('Iphone 12 Pro Max', 5000, 20, 'ảnh/ip12promax.jpg', 'iphone');
let product3 = new Product('Iphone 13 Pro', 7000, 50, 'ảnh/ip13pro.jpg', 'iphone');
let product4 = new Product('Iphone 13 Pro Max', 9000, 13, 'ảnh/ip13promax.jpg', 'iphone');
let product5 = new Product('Iphone 14', 55000, 22, 'ảnh/IP14.jpg', 'iphone');
let product6 = new Product('Iphone 14 Plus', 33000, 34, 'ảnh/ip14plus.jpg', 'iphone');
let product7 = new Product('Iphone 14 Pro', 27000, 45, 'ảnh/ip14pro.jpg', 'iphone');
let product8 = new Product('Iphone 14 Pro Max', 33000, 50, 'ảnh/ip14promax.jpg', 'iphone');
let product9 = new Product('Iphone 13', 35000, 42, 'ảnh/iphone13.jpg', 'iphone');
let product10 = new Product('Iphone 13 Mini', 40000, 11, 'ảnh/iphone13mini.jpg', 'iphone');
let product11 = new Product('Samsung Galaxy S23', 40000, 11, 'ảnh/samsung-galaxy-s23.jpg', 'samsung');
let product12 = new Product('Samsung Galaxy Z Flip 3 5G', 40000, 11, 'ảnh/samsung-galaxy-z-flip-3-5g.jpg', 'samsung');
let product13 = new Product('Samsung Galaxy Z Fold 3', 40000, 11, 'ảnh/samsung-galaxy-z-fold-3.jpg', 'samsung');
let product14 = new Product('Samsung Galaxy S22', 40000, 11, 'ảnh/ss22.jpg', 'samsung');
let product15 = new Product('Samsung Galaxy S22 Plus', 40000, 11, 'ảnh/ss22plus.jpg', 'samsung');
let product16 = new Product('Samsung Galaxy S22 Ultra', 40000, 11, 'ảnh/ss22ultra.jpg', 'samsung');
let product17 = new Product('Samsung Galaxy S23 Plus', 40000, 11, 'ảnh/ss23plus.jpg', 'samsung');
let product18 = new Product('Samsung Galaxy S23 Ultra', 40000, 11, 'ảnh/ss23ultra.jpg', 'samsung');
let product19 = new Product('Samsung Galaxy S22 5G', 40000, 11, 'ảnh/ss225g.jpg', 'samsung');
let product20 = new Product('Samsung Galaxy Z Flip 4', 40000, 11, 'ảnh/zflip4.jpg', 'samsung');
let product21 = new Product('Samsung Galaxy Z Fold 4', 40000, 11, 'ảnh/zfold4.jpg', 'samsung');

let arrayProduct = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10
    , product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21]

let iLogIn = localStorage.getItem('iLogIn')
console.log(iLogIn)
function displayProduct() {
    document.getElementById('introduce').style.display = 'none'
    document.getElementById('display').style.display = 'block'

    let data = ''
    for (let i = 0; i < arrayProduct.length; i++) {
        data += '<div class="item" style="float: left">';
        data += `<img class="img" src=${arrayProduct[i].img} >`
            + '<h3>' + arrayProduct[i].name + '</h3>'
            + ' <span>Giá: <strong style="color: red">' + arrayProduct[i].price + '</strong></span><br><br>'
            + '<span>Số lượng: ' + arrayProduct[i].quantity + '</span><br><br>'
        if (iLogIn === 'true') {
            data += '<button onclick="editProduct(' + i + ')">Sửa</button>' +
            ' <button onclick="deleteProduct(' + i + ')">Xóa</button>'
        } else {
            data += ' <button >Thêm vào giỏ hàng</button><br><br>'
        }
        data += '</div>'
    }
    data += ''
    document.getElementById('display').innerHTML = data
}

function addProduct() {
    document.getElementById('addProduct').style.display = 'block'
}

function addSuccess() {
    let nameAdd = document.getElementById('nameAdd').value
    let priceAdd = document.getElementById('priceAdd').value
    let quantityAdd = document.getElementById('quantityAdd').value
    let imgAdd = document.getElementById('imgAdd').value
    let typeAdd = document.getElementById('typeAdd').value

    let addProduct = new Product(nameAdd, priceAdd, quantityAdd, imgAdd, typeAdd)
    console.log(addProduct)
    if (addProduct.name === '') {
        alert('Vui lòng thêm tên sản phẩm!')
    } else {
        arrayProduct.push(addProduct)
        alert('Đã thêm thành công!')
        document.getElementById('addProduct').style.display = 'none'
        displayProduct()
    }
}

function deleteProduct(id) {
    confirm('Bạn có chắc chắn muốn xóa hay không?')
    arrayProduct.splice(id, 1)
    displayProduct()
}

let index;

function editProduct(id) {
    index = id
    document.getElementById('editProduct').style.display = 'block'
    document.getElementById('nameEdit').value = arrayProduct[id].name
    document.getElementById('priceEdit').value = arrayProduct[id].price
    document.getElementById('quantityEdit').value = arrayProduct[id].quantity
    document.getElementById('imgEdit').value = arrayProduct[id].img
    document.getElementById('typeEdit').value = arrayProduct[id].type
}

function updateProduct() {
    let nameUpdate = document.getElementById('nameEdit').value
    let priceUpdate = document.getElementById('priceEdit').value
    let quantityUpdate = document.getElementById('quantityEdit').value
    let imgUpdate = document.getElementById('imgEdit').value
    let typeUpdate = document.getElementById('typeEdit').value
    if (nameUpdate === '') {
        alert('Vui lòng thêm tên sản phẩm!')
    } else {
        arrayProduct[index].name = nameUpdate
        arrayProduct[index].price = priceUpdate
        arrayProduct[index].quantity = quantityUpdate
        arrayProduct[index].img = imgUpdate
        arrayProduct[index].type = typeUpdate
        alert('Đã cập nhật sản phẩm thành công!')
    }
    document.getElementById('editProduct').style.display = 'none'
    displayProduct()
}




