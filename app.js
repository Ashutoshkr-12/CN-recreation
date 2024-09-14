function home1Animation(){
    gsap.set(".marqueecontainer",{scale:1.5})
    var tl=gsap.timeline({scrollTrigger:{
        trigger:".home1",
        start:"top top",
        end:"bottom top",
        markers:true,
        pin:true,
        scrub:5,
    }})
    
    tl
    .to(".videodiv",{
        '--clip':"0%",
        ease:Power2,
       
    },'a')
    .to(".marqueecontainer",{
        scale:.6,
        ease:Power2,
        scrub:3
    },'a')
    .from(".lft",{
        xPercent: -30,
        ease:Power4,
        stagger:.02
        
    },'b')
    .to(".rgt",{
        xPercent: 20,
        ease:Power4,
        stagger:.02
    },'b')
    
};

function home3Animation(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".home3",
            start:"top top",
            end:top-"top 20%",
            scrub:.5,
            markers:true,
            pin:true
            
        },
        xPercent:-200,
        ease:Power2
    
    });
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function bodyColor(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start:"top 50%",
            end:"bottom 0%",
            markers:true,
            onEnter:function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}
function home4Images(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mouseenter",(function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:1,x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),ease:Power4,duration:.1
            })
        }))
        el.addEventListener("mouseout",(function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,ease:Power4,duration:.1
            })
    }))
    })
}

home1Animation();
home3Animation();
loco();
bodyColor();
home4Images();

