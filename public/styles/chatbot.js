var data = {
    chatinit: {
        title: ["Hi there <span class='emoji'> &#128075;</span>", "How can I help you today?"],
        options: ["Browse Products", "Modes of Payment", "Why should I choose you?", "Just Browsing "]
    },
    browse: {
        title: ["Click the link below to Browse products: "],
        options: ['Click here'],
        url: {
            link: ["product-account.html"]
        }
    },
    modes: {
        title: ["We provide various different types of modes of payment :","Credit Card","Debit Card","NetBanking","UPI","NFTS/RTGS"],
    },
    why: {
        title: ["We provide various variety of products and provides User-friendly interface and has great User Experience"],
    },
   
    just: {
        title: ["Thank you for visiting our site, hope you spend happy time on our site. <span class='emoji'>&#128515;</span> "],
    },
}

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
    // console.log(this.innerHTML);
    if (this.innerHTML == '<span class="material-symbols-outlined">mode_comment</span>') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerHTML = '<span class="material-symbols-outlined">close</span>';
        initChat();
    }
    else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function () {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))
}

var j = 0;
function handleChat() {
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll(".opt").forEach(el => {
        el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}


function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function () {
            handleDelay(title[i]);
        }, i * 500)

    }

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    if (isObjectEmpty(url) == true) {
        console.log("having more options");
        setTimeout(function () {
            showOptions(options);
        }, title.length * 500)

    }
    else {
        console.log("end result");
        setTimeout(function () {
            handleOptions(options, url);
        }, title.length * 500)

    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    // var opt = document.createElement("span");
    // var inp = '<a class="m-link" href="' + url.more + '">' + 'Click Here</a>';

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}