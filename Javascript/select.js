var PhoneOne= {
    phone: "/Images/iphone11.jpg",
    name:"iphone 11",
    price: 98499,
    originalPrice: 102459,
    itemId: "I001"
}

var PhoneTwo= {
    phone: "/Images/iphone12.jpg",
    name: "iphone 12",
    price: 100000,
    originalPrice: 112000,
    itemId: "I002"
}

var PhoneThree= {
    phone: "/Images/iphone13.jpg",
    name: "iphone 13",
    price: 120000,
    originalPrice: 135000,
    itemId: "I003"
}

var PhoneFour= {
    phone: "/Images/iphone14.jpg",
    name: "iphone 14",
    price: 170000,
    originalPrice: 200000,
    itemId: "I004"
}

var selectId=decodeURIComponent(window.location.search)
var selectedItem=selectId.substring(1)

if(selectedItem==PhoneOne.itemId){
    document.getElementById("Iphone11").src=PhoneOne.phone
    document.getElementById("name1").innerText=PhoneOne.name
    document.getElementById("price1").innerText=PhoneOne.price
    document.getElementById("original1").innerText=PhoneOne.originalPrice
    var cost=PhoneOne.price
    qty(cost)
}

else if(selectedItem==PhoneTwo.itemId){
    document.getElementById("Iphone11").src=PhoneTwo.phone
    document.getElementById("name1").innerText=PhoneTwo.name
    document.getElementById("price1").innerText=PhoneTwo.price
    document.getElementById("original1").innerText=PhoneTwo.originalPrice
    var cost=PhoneTwo.price
    qty(cost)
}

else if(selectedItem==PhoneThree.itemId){
    document.getElementById("Iphone11").src=PhoneThree.phone
    document.getElementById("name1").innerText=PhoneThree.name
    document.getElementById("price1").innerText=PhoneThree.price
    document.getElementById("original1").innerText=PhoneThree.originalPrice
    var cost=PhoneThree.price
    qty(cost)
}

else if(selectedItem==PhoneFour.itemId){
    document.getElementById("Iphone11").src=PhoneFour.phone
    document.getElementById("name1").innerText=PhoneFour.name
    document.getElementById("price1").innerText=PhoneFour.price
    document.getElementById("original1").innerText=PhoneFour.originalPrice
    var cost=PhoneFour.price
    qty(cost)
}

function qty(cost){
    document.getElementById("quantity").onkeyup=function(){
        let quantity=document.getElementById("quantity").value
        let ammount=cost
        if (quantity>1){
            Total=quantity*ammount
            document.getElementById("Total").innerText=Total 
            Userlocation(Total)
        }
        else if(quantity==1){
            Total=ammount
            document.getElementById("Total").innerText=Total 
            Userlocation(Total)
        }
    }
}

function Userlocation(Total){
    document.getElementById("Userlocation").onchange = function(){
        let delivery = document.getElementById("Userlocation").value
        let Karen = 500
        let Muthaiga = 300
        let Machakos = 600

        if (delivery == "Karen" ){
            document.getElementById("Total").innerText = Karen + Total
        }
        else if (delivery == "Muthaiga" ){
            document.getElementById("Total").innerText = Muthaiga + Total
        }
        else if (delivery == "Machakos" ){
            document.getElementById("Total").innerText = Machakos + Total
        }
    }
}