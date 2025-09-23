function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 1,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bottom", {
            height: "3vh",
            duration: 0.2
        })
    })
}

function pag2Animate() {
    let rightElems = document.querySelectorAll(".right-elem")
let releimg = document.querySelectorAll(".right-elem img")

rightElems.forEach(function (elem) {

    
    elem.addEventListener("mousemove" , function () {
        gsap.to(elem.childNodes[3] , {
            opacity: 1,
            scale : 1 ,

        })
        
    })
    elem.addEventListener("mouseleave" , function () {
        gsap.to(elem.childNodes[3] , {
            opacity: 0 , 
            scale: 0
        })
        
    })
    elem.addEventListener("mousemove" , function (e) {
        gsap.to(elem.childNodes[3] , {
            x:e.clientX - elem.getBoundingClientRect().x - 50 ,
            y:e.clientY - elem.getBoundingClientRect().y - 140
        })
    })
})
}

let page3centre = document.querySelector("#page3 .page3-center")
let page3video = document.querySelector("video")

page3centre.addEventListener("click" , function () {
    page3video.play()
    gsap.to(page3video , {
        opacity: 1 ,
        borderRadius:0 , 
        transform : "scaleX(1) scaleY(1)"
    })
})

function page3VideoPlay () {
    page3video.addEventListener("click", function () {
        page3video.pause()
        gsap.to(page3video, {
            transform: "scaleX(0.5) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

page3VideoPlay()

navAnimation()

pag2Animate()