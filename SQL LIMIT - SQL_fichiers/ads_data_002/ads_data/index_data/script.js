window.onload = function () {
  var tempo =0;
  var tl = new TimelineMax({repeat: 2, repeatDelay: 3.5});

  tl.set(container, {visibility: "visible"});
  tl.set([marielouise_blanche, bg_blanc], {boxShadow:"0px 0px 0px 5px #fff inset;"});
  tl.set(ML, {opacity:0});
  
  tl.from(lifestyle, 4, {scale: 1.1, ease: Power1.easeOut}, 0+tempo);
  
  
  tl.from(logo_couleur, 0.2, {opacity:0, ease: Power1.easeOut},2.15+tempo);
  tl.to(bg_blanc, 0.5, {boxShadow:"0px 0px 0px 150px #fff inset;", ease: Power1.easeIn},2+tempo);
  
  tl.from(blockfibre, 0.4, {scale:0, ease: Power1.easeOut},2.3+tempo);
  

  tempo-=1.5;
  
  tl.to(blockfibre, 0.3, {scale:0.84, y:"-75%", ease: Power1.easeOut},4.3+tempo);
  

  
  tl.from(traitBleu, 0.4, {width:0, x:25 ,ease: Power1.easeOut},4.5+tempo);
  
  
  tempo+=0.25;

 
  
  tl.from(maskprix, 0.4, {opacity:0},4.8+tempo);
  tl.from(cta, 0.5, {width:0, ease: Power4.easeOut},5.5+tempo);
  tl.from(cta, 0.1, {opacity:0, ease: Power4.easeOut},5.5+tempo);
  
 
  
  tl.to(ML, 0.1, {opacity:1},6.2+tempo);
  
}