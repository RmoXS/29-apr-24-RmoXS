var slideIndex = 0;
showSlides(slideIndex);

function plusImg(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    var i;
    var imgList = document.getElementsByClassName("slides");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusImg(1)
}, 2000);

function validation() {
    let fullname = document.getElementById("name-input").value;
    let Email = document.getElementById("email-input").value;
    if (fullname == '' || fullname == null || Email == "") {
        alert("Inputan anda ada yang kosong, pastikan sudah diinputkan");
    } else {
        alert("Nama: "+ fullname + " " + "Email: "+ Email);
    }
}

document.getElementById("submit").addEventListener('click', () => validation())