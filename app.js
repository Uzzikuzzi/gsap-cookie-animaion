const btn = document.querySelector("button");
const tl = gsap.timeline({defaults:{duration: 0.75, ease: "power2.out"}})

    tl.fromTo(".cookie_container", {scale: 0}, {scale:1, ease: "elastic.out(1, 0.4)", duration: 1.5});



    tl.fromTo(".cookie", 
    {
        opacity: 0, 
        x: -50, 
        rotation: '-45deg'
    }, 

    {
        opacity:1, 
        x: 0, 
        rotation: '0deg'
    }
    ,"<50%")

    tl.fromTo(".cookie_text", 
    {
        x: 30,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1
    }, "<")
    
    // cookie animation
    tl.fromTo(".cookie", {y:0, rotation: 0}, 
    {y: -20, yoyo: true, repeat: -1, rotation: -20})
    // crumbs
    tl.fromTo("#crumbs", {y:0}, 
    {y: -40, yoyo: true, repeat: -1}, "<")

    // close the popup

    btn.addEventListener('click', () => {
        gsap.to(".cookie_container",
        {opacity: 0, y:100, duration:0.75, ease: 'power1.out'})
    })