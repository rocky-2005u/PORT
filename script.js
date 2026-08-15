// Small interaction layer: smooth reveal and active FAQ behavior.
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.section, .portfolio-top, .services, .truth, .footer').forEach(el=>{
  el.style.transition='opacity .8s ease, transform .8s ease';
  el.style.opacity='0';
  el.style.transform='translateY(18px)';
  observer.observe(el);
});

document.addEventListener('scroll',()=>{
  document.querySelectorAll('.section, .portfolio-top, .services, .truth, .footer').forEach(el=>{
    if(el.classList.contains('visible')){
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    }
  });
},{passive:true});

window.addEventListener('load',()=>{
  document.querySelectorAll('.hero, .nav-wrap').forEach(el=>{
    el.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],
    {duration:900,fill:'forwards',easing:'cubic-bezier(.2,.7,.2,1)'});
  });
});
