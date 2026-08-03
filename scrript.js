// Smooth reveal animations

const revealElements = document.querySelectorAll(
"section, .project, .metrics div"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.15
});


revealElements.forEach((element)=>{

element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition=
"all .8s ease";

observer.observe(element);

});




// Animated number counters

const counters = document.querySelectorAll(".metrics strong");


counters.forEach(counter=>{

const target = counter.innerText;


counter.innerText="0";


let count=0;


const speed = 40;


const updateCounter=()=>{


const number=parseInt(target.replace(/\D/g,""));


if(count < number){

count += Math.ceil(number/30);

counter.innerText =
count + target.replace(/[0-9]/g,"");


setTimeout(updateCounter,speed);


}else{

counter.innerText=target;

}

};


const counterObserver = new IntersectionObserver(entries=>{


if(entries[0].isIntersecting){

updateCounter();

counterObserver.disconnect();

}


});


counterObserver.observe(counter);


});





// Dynamic typing effect

const tag = document.querySelector(".tag");


if(tag){

const text =
"CONTENT CREATOR • COMMUNITY NARRATIVE BUILDER";


let index=0;


tag.innerHTML="";


function type(){

if(index < text.length){

tag.innerHTML += text.charAt(index);

index++;

setTimeout(type,60);

}

}


type();

}





// Navbar glow on scroll


const nav=document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){

nav.style.background=
"rgba(10,8,18,.85)";

nav.style.boxShadow=
"0 10px 40px rgba(255,105,180,.2)";


}else{


nav.style.background=
"rgba(10,8,18,.55)";

nav.style.boxShadow="none";


}


});





// Cursor glow effect


const glow=document.createElement("div");


glow.style.position="fixed";

glow.style.width="180px";

glow.style.height="180px";

glow.style.borderRadius="50%";

glow.style.background=
"radial-gradient(circle, rgba(255,105,180,.18), transparent 70%)";

glow.style.pointerEvents="none";

glow.style.zIndex="999";


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


glow.style.left =
e.clientX - 90 + "px";


glow.style.top =
e.clientY - 90 + "px";


});





// Button magnetic effect


document.querySelectorAll(".btn,.outline")
.forEach(button=>{


button.addEventListener("mousemove",(e)=>{


const rect=button.getBoundingClientRect();


const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;


button.style.transform=
`translate(${x/8}px,${y/8}px)`;


});


button.addEventListener("mouseleave",()=>{


button.style.transform="translate(0,0)";


});


});
