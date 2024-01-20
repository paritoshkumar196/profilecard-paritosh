let aboutme=document.querySelector(".about-me");
let profile=document.querySelector(".profile");
let container=document.querySelector(".container");
let btn=document.getElementById('btn')
let aboutbtn=document.getElementById('img-btn')
btn.addEventListener("click",function(){
aboutme.style.transform='translateY(-300px)';
aboutme.style.transition = 'transform 0.6s ease';
profile.style.transform='translateY(370px)';
profile.style.transition = 'transform 0.6s ease';
container.style.backgroundColor="black";
})
aboutbtn.addEventListener("click",function(){
    profile.style.transform='translateY(0px)';
profile.style.transition = 'transform 0.6s ease';  
aboutme.style.transform='translateY(300px)';
aboutme.style.transition = 'transform 0.6s ease';
container.style.backgroundColor="#fff";
})
let message=document.getElementById('btn1');
message.addEventListener("click",function(){
    const phoneNumber = "7857901956";

     const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Open the WhatsApp link in a new window
    window.open(whatsappUrl, "_blank");
})