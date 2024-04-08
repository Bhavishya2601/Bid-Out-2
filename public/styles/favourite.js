const myfavsJson=localStorage.getItem("favs") ;
let myfavs=JSON.parse(myfavsJson);
console.log(myfavs)
// ? favs = JSON.parse(localStorage.getItem("favs")) : favs = [];
let cards=[{id:1,name:"Ford Mustang 1965",img:"mustang.png",desc:"Iconic American muscle car, the 1965 Ford Mustang, epitomizes power, style, and enduring automotive legend.",price:"Current bid: 25,304.0$"},
{id:2,name:"Honda CBR 600 (2022)", img:"https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-15.jpg",desc:"The Honda CBR 600 (2022) is a sleek and powerful sportbike known for its agility and performance on the road",price:"Current bid: 3,050.0$"},
{id:3,name:"Toyota AIGID A Class Car",img:"https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-6.jpg",desc:"The Toyota AIGID A Class offers cutting-edge technology and sleek design for a premium driving experience.",price:"Current bid: 4,000.0$"},
{id:4,name:"Lady's Retro Diamond ",img:"https://pixner.net/sbidu/main/assets/images/auction/watches/auction-3.jpg",desc:"Lady's Retro Diamond is an exquisite vintage-inspired diamond necklace with timeless elegance and charm.",price:"Current bid: 2103.0$"},
{id:5,name:"Lady's Vintage Rolex Datejust watch",img:"https://pixner.net/sbidu/main/assets/images/auction/watches/auction-2.jpg",desc:" The Lady's Vintage Rolex Datejust exudes sophistication with its classic design and impeccable craftsmanship",price:"Current bid: 3840.0$"},
{id:6,name:"Vintage Rolex watch",img:"https://pixner.net/sbidu/main/assets/images/auction/watches/auction-1.jpg",desc:"Vintage Rolex watch is an iconic timepieces embodying luxury, craftsmanship, and timeless style for womens.",price:"Current bid: 1609.0$"},
{id:7,name:"Luxury White Interior in Toronto", type:"estate",img:"https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",desc:"An opulent sanctuary of elegance and sophistication, adorning Toronto's landscape with its pristine luxury white interior.",price:"Current bid: 3,620,103.0$"},
{id:8,name:"Brand New Apartment in Esenyurt",type:"estate",img:"https://pixner.net/sbidu/main/assets/images/auction/realstate/auction-1.png",desc:"Modern and luxurious, this brand new apartment in Esenyurt offers contemporary living with amenities and style. ",price:"Current bid: 2,018,650.0$"},
{id:9,name:"Vacation Apartment in New York",type:"estate",img:"https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg",desc:"A centrally located vacation apartment in the heart of New York City, offering unparalleled comfort and convenience for travelers exploring the vibrant city.",price:"Current bid: 1,934,205.0$"},
{id:10,name:"Melanie Taylor Kent - 1988 370/400", type:"art",img:"https://pixner.net/sbidu/main/assets/images/auction/art/auction-1.jpg",desc:"Melanie Taylor Kent is an American artist known for her detailed and vibrant limited edition serigraphs, including the 1988 piece.",price:"Current bid: 2900.0$"},
{id:11,name:"Funaki Kenji Yunomi",type:"art",img:"https://pixner.net/sbidu/main/assets/images/auction/art/auction-2.jpg",desc:"Contemporary ceramic artist renowned for his intricate teapot designs blending traditional Japanese aesthetics with modern creativity. ",price:"Current bid: 460.0$"},
{id:12,name:"Abalone Shell (4.5 inches) (AS-04)",type:"art",img:"https://pixner.net/sbidu/main/assets/images/auction/art/auction-3.jpg",desc:"AS-04: A 4.5-inch Abalone Shell showcasing mesmerizing iridescence, ideal for adornment or ritualistic purposes.",price:"Current bid: 327.0$"},

]
console.log("hello this is favourite.js")
let favs=[];
let isFaved=false;
function buildhtml(data){
    return` <div class="a1" id="1">
    <div class="a1_img imgBox"><img
            src=${data.img}>
    </div>
    <div class="cross_icon">
    <span data=${data.id} class="material-symbols-outlined heart   add">
close
</span></div>
<div class="a1_head">${data.name}</div>
<div class="a1_description" id="desci">${data.desc}</div>
<div class="a1_timer" id="timer">
<p id="demo${data.id}"></p>
</div>

    <div class="a1_bid" id="first">
        <div>${data.price}</div>
        <div><a href="description.html"><button>Place your Bid</button></a></div>

        <!--button data=${data.id} class="addtofav">favourite</button-->
    
        
    </div>                        
</div>`
    /* return` <div class="a1" id="1">
    <div class="imgBox"><img
            src=${data.img}>
    </div>
    <div class="a1_head">${data.name}</div>
    <div class="a1_description" id="desci">${data.desc}</div>

    <div class="a1_bid" id="first">
        <div>${data.price}</div>
        <div><a href="description.html"><button>Place your Bid</button></a></div>
        <button data=${data.id} class="addtofav">favourite</button>
        <button data=${data.id} class="add">remove</button>
    </div>                        
</div>` */

}
console.log(myfavs)
const cardsdom=document.querySelector(".cards");
console.log(cardsdom)
myfavs.forEach((card)=>{
   const cardHtml= buildhtml(card);
    console.log(cardHtml)
    console.log(cardsdom)
 cardsdom.innerHTML+=cardHtml
})


/* document.addEventListener("DOMContentLoaded", function () {
    const watchItemsContainer = document.getElementById("watchItems");

    cards.forEach(card => {
        if (card.name.toLowerCase().includes("watch")) {
            const watchHtml = buildhtml(card);
            watchItemsContainer.innerHTML += watchHtml;
        }
    });
}); */
// window.addEventListener("load",()=>{
    // localStorage.getItem("favs");
    // myfavs=JSON.parse(myfavsJson);
    // console.log("this isi what we get on load---->",myfavs)});

    const remove=document.querySelectorAll(".add");
    console.log(remove)
    

    remove.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const id=btn.getAttribute('data')
            console.log(id)
        myfavs=myfavs.filter((fav)=>{
            console.log("we entered the filter ")
            if(fav.id!=id){
            console.log(" true:::the id and fav.id are====>>",fav.id,id)
            return true
            
        }else{
                console.log(" flase:::the id and fav.id are====>>",fav.id,id)
                return false
            }
            

        })
        console.log("this is my new favs after ",myfavs)
        localStorage.setItem("favs",JSON.stringify(myfavs))
        location.reload()
        cardsdom.innerHTML=""
        myfavs.forEach((card)=>{
            const cardHtml= buildhtml(card);
             console.log(cardHtml)
             console.log(cardsdom)
          cardsdom.innerHTML+=cardHtml
         })


        })
    })

    
    // let valueDisplays=document.querySelectorAll(".num");
    // let interval="3000";
    // // console.log(valueDisplays);
    // valueDisplays.forEach((valueDisplays) =>{
    //     let startvalue=0;
    //     let endvalue= parseInt(valueDisplays.getAttribute("data-value"))
    //     // console.log(endvalue)
    //     let duration=Math.floor(interval/endvalue);
    //     let counter= setInterval(function(){
    //         startvalue +=1;
    //         valueDisplays.textContent=startvalue;
    //         if(startvalue==endvalue){
    //             clearInterval(counter);
    //         }
    
    //     },duration)
    
    
    // })
    
