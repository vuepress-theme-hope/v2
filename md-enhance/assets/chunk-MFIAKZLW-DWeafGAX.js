import{q as n,f as d,m as l,U as h}from"./mermaid.esm.min-PvY5Ig9k.js";var i=n(d()),y=l((s,t)=>{let r=s.append("rect");if(r.attr("x",t.x),r.attr("y",t.y),r.attr("fill",t.fill),r.attr("stroke",t.stroke),r.attr("width",t.width),r.attr("height",t.height),t.name&&r.attr("name",t.name),t.rx&&r.attr("rx",t.rx),t.ry&&r.attr("ry",t.ry),t.attrs!==void 0)for(let a in t.attrs)r.attr(a,t.attrs[a]);return t.class&&r.attr("class",t.class),r},"drawRect"),o=l((s,t)=>{let r={x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"};y(s,r).lower()},"drawBackgroundRect"),p=l((s,t)=>{let r=t.text.replace(h," "),a=s.append("text");a.attr("x",t.x),a.attr("y",t.y),a.attr("class","legend"),a.style("text-anchor",t.anchor),t.class&&a.attr("class",t.class);let e=a.append("tspan");return e.attr("x",t.x+t.textMargin*2),e.text(r),a},"drawText"),g=l((s,t,r,a)=>{let e=s.append("image");e.attr("x",t),e.attr("y",r);let x=(0,i.sanitizeUrl)(a);e.attr("xlink:href",x)},"drawImage"),f=l((s,t,r,a)=>{let e=s.append("use");e.attr("x",t),e.attr("y",r);let x=(0,i.sanitizeUrl)(a);e.attr("xlink:href",`#${x}`)},"drawEmbeddedImage"),m=l(()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),"getNoteRect"),w=l(()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0}),"getTextObj");export{f as E,g as d,w as f,o as g,m as h,y as x,p as y};
