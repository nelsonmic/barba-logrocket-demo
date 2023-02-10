
const transition=()=>{
      let tl = gsap.timeline();

      tl.to('.page-transition', { duration: .5, scaleX:1, transformOrigin: "bottom right", stagger: .2})
      tl.to('.page-transition', { duration: .5, scaleX: 0, transformOrigin: "bottom right", stagger: .1 , delay:.1})
}

barba.init({
      transitions: [{
            leave(){
                  transition();
            }
      }]
})