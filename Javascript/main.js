var PhoneOne= {
    phone: "/Images/iphone11.jpg",
    name:"iphone 11",
    price: "ksh 98499",
    originalPrice: "ksh 102459",
    itemId: "I001",
}
document.getElementById("Iphone11").src=PhoneOne.phone
document.getElementById("name1").innerText=PhoneOne.name
document.getElementById("price1").innerText=PhoneOne.price
document.getElementById("original1").innerText=PhoneOne.originalPrice

var PhoneTwo= {
    phone: "/Images/iphone12.jpg",
    name: "iphone 12",
    price: "ksh 100000",
    originalPrice: "ksh 112000",
    itemId: "I002"
}
document.getElementById("iphone12").src=PhoneTwo.phone
document.getElementById("name2").innerText=PhoneTwo.name
document.getElementById("price2").innerText=PhoneTwo.price
document.getElementById("original2").innerText=PhoneTwo.originalPrice

var PhoneThree= {
    phone: "/Images/iphone13.jpg",
    name: "iphone 13",
    price: "ksh 120000",
    originalPrice: "ksh 135000",
    itemId: "I003"
}
document.getElementById("iphone13").src=PhoneThree.phone
document.getElementById("name3").innerText=PhoneThree.name
document.getElementById("price3").innerText=PhoneThree.price
document.getElementById("original3").innerText=PhoneThree.originalPrice

var PhoneFour= {
    phone: "/Images/iphone14.jpg",
    name: "iphone 14",
    price: "ksh 170000",
    originalPrice: "ksh 200000",
    itemId: "I004"
}
document.getElementById("iphone14").src=PhoneFour.phone
document.getElementById("name4").innerText=PhoneFour.name
document.getElementById("price4").innerText=PhoneFour.price
document.getElementById("original4").innerText=PhoneFour.originalPrice

document.getElementById("phone1").onclick=function(){
    window.location.href="select.html"+"?"+PhoneOne.itemId
}
document.getElementById("phone2").onclick=function(){
    window.location.href="select.html"+"?"+PhoneTwo.itemId
}
document.getElementById("phone3").onclick=function(){
    window.location.href="select.html"+"?"+PhoneThree.itemId
}
document.getElementById("phone4").onclick=function(){
    window.location.href="select.html"+"?"+PhoneFour.itemId
}