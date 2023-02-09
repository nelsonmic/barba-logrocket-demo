
const pageTransition=()=>{
      let tl = gsap.timeline();

      tl.to('.page-transition', { duration: .5, scaleX:1, transformOrigin: "bottom right", stagger: .2})
      tl.to('.page-transition', { duration: .5, scaleX: 0, transformOrigin: "bottom right", stagger: .1 , delay:.1})
}

const delay =(n)=>{
      n = n || 2000;
      return new Promise( done =>{
            setTimeout(()=>{
                  done();
            }, n);
      });
}

barba.init({
      sync: true,
      transitions: [{
            async leave(data){
                  const done = this.async();

                  pageTransition();
                  await delay(500);
                  done();
            }
      }]
})