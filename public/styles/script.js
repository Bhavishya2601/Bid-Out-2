// function check_Password() {
//     let a = document.getElementById("password").value;
//     let b = document.getElementById("confirm_password").value;
//     if ((a=="") || (b=="")){
//         alert("Please Fill out all the details");
//     } else if (a.length<8 || b.length<8){
//         alert("Password should be atleast 8 characters");
//     } else if (a == b) {
//         window.location.href = "../pages/3_main.html";
//     } else {
//         alert("Password and confirm password does not match.");
//     }
// }
// function form_page(){
//     window.location.href="../pages/2_form.html";
// }


// js for main page 
var splide = new Splide('#icons_slide', {
    perPage: 7,
    perMove: 1,
    gap: '1rem',
    type: 'loop',
    snap: true,
    // drag: 'free',
    arrows: false,
    autoplay: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
        },
    },
});

splide.mount();


// var splide = new Splide('#categories_slide', {
//     perPage: 1,
//     perMove: 1,
//     gap: '1.5rem',
//     padding: '6rem',
//     type: 'loop',
//     drag: 'free',
//     snap: true,
//     pagination: false,
//     autoplay: true,
//     breakpoints: {
//         640: {
//             perPage: 2,
//             gap: '.7rem',
//         },
//         480: {
//             perPage: 1,
//             gap: '.7rem',
//         },
//     },
// });

// splide.mount();


var splide = new Splide('#reviews', {
    perPage: 3,
    perMove: 1,
    type:'loop',
    pagination: false,
    arrows: false,
    autoplay: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
        },
    },
});

splide.mount();

// code for fullscreen search bar
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// code for payment gateway
function myFunction_gsm(sectionId) {
    let sec = document.querySelectorAll('.payment');
    sec.forEach(itm => {
        if (itm.id !== sectionId) {
            itm.style.display = 'none'
        }
    })
    var x = document.getElementById(sectionId);
    x.style.display = 'block'
}

function changeColor(button) {
    var buttons = document.querySelectorAll('.color-button'); 
    var originalColor = "rgb(231, 230, 230)"; 

    buttons.forEach(function (btn) {
        if (btn === button) {
            btn.style.backgroundColor = 'rgb(255, 222, 194)'; 
        } else {
            btn.style.backgroundColor = originalColor; 
        }
    });
}

var currentdate = new Date();
document.getElementById("time").innerHTML = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + "  "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();