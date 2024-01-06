var tl = gsap.timeline()
tl.from("#top,#nav,img,li",{
    y:-100,
    duration:1,
    delay:1,
    stagger:0.3
})
tl.from("#banner",{
    y:-100,
    opacity:0,
    stagger:0.5
})












function sendEmail(){
    Email.send({
Host : "smtp.gmail.com",
Username : "sunilbadiger5901@gmail.com",
Password : "Sunil@5901",
To : 'sunilbadiger0013@gmail.com',
From : document.getElementById("email").value,
Subject : "New contact form enquiry",
Body : "name:" + document.getElementById("name").value
+ "<br> Email" + document.getElementById("email").value
+"<br> phone no" + document.getElementById("phone").value
 +"<br> message" + document.getElementById("message").value
}).then(
message => alert("message sent successfully")
);
}

