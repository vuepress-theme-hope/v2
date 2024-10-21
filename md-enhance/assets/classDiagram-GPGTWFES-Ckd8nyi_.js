import{j as A,a as S,o as J}from"./chunk-VVAYJJUS-C4QarNRy.js";import{s as D}from"./chunk-BOP2KBYH-B_k963oY.js";import{b as I}from"./chunk-6XGRHI2A-BeFkHr-t.js";import{m as w,i as Y,j as R,I as T,J as f,h as W,Q as H,b as M,k as X}from"./mermaid.esm.min-DsVSrEDL.js";import"./chunk-BKDDFIKN-BfOkIf2V.js";import"./app-gNN4y7I7.js";var O=0,Z=w(function(i,a,t,s,l){let g=w(function(n){switch(n){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}},"getRelationType");a.points=a.points.filter(n=>!Number.isNaN(n.y));let o=a.points,h=Y().x(function(n){return n.x}).y(function(n){return n.y}).curve(R),d=i.append("path").attr("d",h(o)).attr("id","edge"+O).attr("class","relation"),r="";s.arrowMarkerAbsolute&&(r=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,r=r.replace(/\(/g,"\\("),r=r.replace(/\)/g,"\\)")),t.relation.lineType==1&&d.attr("class","relation dashed-line"),t.relation.lineType==10&&d.attr("class","relation dotted-line"),t.relation.type1!=="none"&&d.attr("marker-start","url("+r+"#"+g(t.relation.type1)+"Start)"),t.relation.type2!=="none"&&d.attr("marker-end","url("+r+"#"+g(t.relation.type2)+"End)");let u,p,x=a.points.length,m=T.calcLabelPosition(a.points);u=m.x,p=m.y;let b,k,e,c;if(x%2!==0&&x>1){let n=T.calcCardinalityPosition(t.relation.type1!=="none",a.points,a.points[0]),y=T.calcCardinalityPosition(t.relation.type2!=="none",a.points,a.points[x-1]);f.debug("cardinality_1_point "+JSON.stringify(n)),f.debug("cardinality_2_point "+JSON.stringify(y)),b=n.x,k=n.y,e=y.x,c=y.y}if(t.title!==void 0){let n=i.append("g").attr("class","classLabel"),y=n.append("text").attr("class","label").attr("x",u).attr("y",p).attr("fill","red").attr("text-anchor","middle").text(t.title);window.label=y;let L=y.node().getBBox();n.insert("rect",":first-child").attr("class","box").attr("x",L.x-s.padding/2).attr("y",L.y-s.padding/2).attr("width",L.width+s.padding).attr("height",L.height+s.padding)}f.info("Rendering relation "+JSON.stringify(t)),t.relationTitle1!==void 0&&t.relationTitle1!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",b).attr("y",k).attr("fill","black").attr("font-size","6").text(t.relationTitle1),t.relationTitle2!==void 0&&t.relationTitle2!=="none"&&i.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",e).attr("y",c).attr("fill","black").attr("font-size","6").text(t.relationTitle2),O++},"drawEdge"),G=w(function(i,a,t,s){f.debug("Rendering class ",a,t);let l=a.id,g={id:l,label:a.id,width:0,height:0},o=i.append("g").attr("id",s.db.lookUpDomId(l)).attr("class","classGroup"),h;a.link?h=o.append("svg:a").attr("xlink:href",a.link).attr("target",a.linkTarget).append("text").attr("y",t.textHeight+t.padding).attr("x",0):h=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0);let d=!0;a.annotations.forEach(function(n){let y=h.append("tspan").text("«"+n+"»");d||y.attr("dy",t.textHeight),d=!1});let r=$(a),u=h.append("tspan").text(r).attr("class","title");d||u.attr("dy",t.textHeight);let p=h.node().getBBox().height,x,m,b;if(a.members.length>0){x=o.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin/2).attr("y2",t.padding+p+t.dividerMargin/2);let n=o.append("text").attr("x",t.padding).attr("y",p+t.dividerMargin+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.members.forEach(function(y){C(n,y,d,t),d=!1}),m=n.node().getBBox()}if(a.methods.length>0){b=o.append("line").attr("x1",0).attr("y1",t.padding+p+t.dividerMargin+m.height).attr("y2",t.padding+p+t.dividerMargin+m.height);let n=o.append("text").attr("x",t.padding).attr("y",p+2*t.dividerMargin+m.height+t.textHeight).attr("fill","white").attr("class","classText");d=!0,a.methods.forEach(function(y){C(n,y,d,t),d=!1})}let k=o.node().getBBox();var e=" ";a.cssClasses.length>0&&(e=e+a.cssClasses.join(" "));let c=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",k.width+2*t.padding).attr("height",k.height+t.padding+.5*t.dividerMargin).attr("class",e).node().getBBox().width;return h.node().childNodes.forEach(function(n){n.setAttribute("x",(c-n.getBBox().width)/2)}),a.tooltip&&h.insert("title").text(a.tooltip),x&&x.attr("x2",c),b&&b.attr("x2",c),g.width=c,g.height=k.height+t.padding+.5*t.dividerMargin,g},"drawClass"),$=w(function(i){let a=i.id;return i.type&&(a+="<"+W(i.type)+">"),a},"getClassTitleString"),P=w(function(i,a,t,s){f.debug("Rendering note ",a,t);let l=a.id,g={id:l,text:a.text,width:0,height:0},o=i.append("g").attr("id",l).attr("class","classGroup"),h=o.append("text").attr("y",t.textHeight+t.padding).attr("x",0),d=JSON.parse(`"${a.text}"`).split(`
`);d.forEach(function(p){f.debug(`Adding line: ${p}`),h.append("tspan").text(p).attr("class","title").attr("dy",t.textHeight)});let r=o.node().getBBox(),u=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",r.width+2*t.padding).attr("height",r.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin).node().getBBox().width;return h.node().childNodes.forEach(function(p){p.setAttribute("x",(u-p.getBBox().width)/2)}),g.width=u,g.height=r.height+d.length*t.textHeight+t.padding+.5*t.dividerMargin,g},"drawNote"),C=w(function(i,a,t,s){let{displayText:l,cssStyle:g}=a.getDisplayDetails(),o=i.append("tspan").attr("x",s.padding).text(l);g!==""&&o.attr("style",a.cssStyle),t||o.attr("dy",s.textHeight)},"addTspan"),B={getClassTitleString:$,drawClass:G,drawEdge:Z,drawNote:P},N={},v=20,E=w(function(i){let a=Object.entries(N).find(t=>t[1].label===i);if(a)return a[0]},"getGraphId"),j=w(function(i){i.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),i.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),i.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),i.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),U=w(function(i,a,t,s){let l=H().class;N={},f.info("Rendering diagram "+i);let g=H().securityLevel,o;g==="sandbox"&&(o=M("#i"+a));let h=g==="sandbox"?M(o.nodes()[0].contentDocument.body):M("body"),d=h.select(`[id='${a}']`);j(d);let r=new I({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});let u=s.db.getClasses(),p=[...u.keys()];for(let e of p){let c=u.get(e),n=B.drawClass(d,c,l,s);N[n.id]=n,r.setNode(n.id,n),f.info("Org height: "+n.height)}s.db.getRelations().forEach(function(e){f.info("tjoho"+E(e.id1)+E(e.id2)+JSON.stringify(e)),r.setEdge(E(e.id1),E(e.id2),{relation:e},e.title||"DEFAULT")}),s.db.getNotes().forEach(function(e){f.debug(`Adding note: ${JSON.stringify(e)}`);let c=B.drawNote(d,e,l,s);N[c.id]=c,r.setNode(c.id,c),e.class&&u.has(e.class)&&r.setEdge(e.id,E(e.class),{relation:{id1:e.id,id2:e.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),D(r),r.nodes().forEach(function(e){e!==void 0&&r.node(e)!==void 0&&(f.debug("Node "+e+": "+JSON.stringify(r.node(e))),h.select("#"+(s.db.lookUpDomId(e)||e)).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )"))}),r.edges().forEach(function(e){e!==void 0&&r.edge(e)!==void 0&&(f.debug("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r.edge(e))),B.drawEdge(d,r.edge(e),r.edge(e).relation,l,s))});let x=d.node().getBBox(),m=x.width+v*2,b=x.height+v*2;X(d,b,m,l.useMaxWidth);let k=`${x.x-v} ${x.y-v} ${m} ${b}`;f.debug(`viewBox ${k}`),d.attr("viewBox",k)},"draw"),_={draw:U},tt={parser:A,db:S,renderer:_,styles:J,init:w(i=>{i.class||(i.class={}),i.class.arrowMarkerAbsolute=i.arrowMarkerAbsolute,S.clear()},"init")};export{tt as diagram};
