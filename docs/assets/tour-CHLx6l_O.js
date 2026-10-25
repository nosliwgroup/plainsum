import{E as e,T as t,_ as n,a as r,b as i,i as a,l as o,r as s,s as c,t as l,w as u}from"./chart-mErwlyWH.js";var d=t(),f=e(Date.now(),d),p=u(f.y,f.mo,f.d,10,40,d);function m(e,t=-1,n,i,u=520){let f=o(e,{now:p,zone:d,pages:n,selfId:i}),m=e.split(`
`).map((e,n)=>{let i=f.lines[n],o=`row${i.strong?` strong`:``}${i.dim?` dim`:``}${i.strike?` strike`:``}`,s=n===t?`<i class="caret"></i>`:``,c=n===t?``:r(i);return`<div class="${o}"><div class="txt">${a(e,i.spans)}${s}</div><div class="res">${c}</div></div>`}).join(``),h=f.footer,g=h?`<div class="footer"><span class="res-in${h.tone&&h.tone!==`plain`?` t-${h.tone}`:``}">${c(h.widget)}${s(h.text)}</span></div>`:``;return`<div class="mirror">${m}</div>${f.chart?`<div class="chart">${l(f.chart,u)}</div>`:``}${g}`}var h={math:`Trip math
flights = $1,240
hotel = $180 * 6
total = flights + hotel
total - 15%
5 mi in km
.24 yr
time diff LA to TYO`,todo:`todo list
tasks
• feed dogs - 1pm
• call mom fri 3pm
• pay rent nov 1
• water plants done`,cals:`cal tracker
goal 2000 cal
• 2 eggs and toast
• big mac and medium fries
• moms lasagna 450 cal`,recipe:`recipe
serves 4
scale 6
• 2 c flour
• 4 tbsp butter
• 3 eggs`,convert:`convert
100 f in c
10 kg
5 m in ft`},g=[{id:`g`,text:`groceries
connect budget
• avocados 3 @ $1.25
• milk $4.99
• bread $3.49`},{id:`b`,text:`budget
limit $2,000 mo
• rent $1,100 mo
groceries`}];h.linkGroceries=g[0].text,h.linkBudget=g[1].text,h.chart=`cal tracker
goal 2000 cal
# Mon
• big mac and fries
• 2 eggs
# Tue
• oatmeal and banana
• pizza x2
# Wed
• chicken breast and rice
chart`,document.querySelectorAll(`[data-demo]`).forEach(e=>{let t=e.dataset.demo,n=t===`linkGroceries`?`g`:t===`linkBudget`?`b`:void 0;e.innerHTML=m(h[t],-1,n?g:void 0,n)}),document.querySelectorAll(`.n-pages`).forEach(e=>{e.textContent=String(n.length)});var _=document.getElementById(`gallery`);_.innerHTML=n.map(e=>{let t=`${e.id===`pack`?`pack LA → TYO`:e.keywords[0]}\n${e.example.join(`
`)}`;return`<article class="g-item"><header><h3>${s(e.name)}</h3><p>${s(e.blurb)}</p></header><div class="demo small">${m(t,-1,void 0,void 0,300)}</div></article>`}).join(``),document.getElementById(`fact-pages`).textContent=String(n.length),document.getElementById(`fact-foods`).textContent=String(i);var v=document.getElementById(`hero-demo`),y=[`cal tracker`,`goal 2000 cal`,`• 2 eggs and toast`,`• big mac and medium fries`,`• banana`],b=y.join(`
`);if(matchMedia(`(prefers-reduced-motion: reduce)`).matches)v.innerHTML=m(b);else{let e=``,t=0,n=0;v.innerHTML=m(``,0);let r=()=>{if(t>=y.length){v.innerHTML=m(b);return}let i=y[t];n<i.length?(e+=i[n++],v.innerHTML=m(e,t),setTimeout(r,28+Math.random()*45)):(t++,n=0,t<y.length&&(e+=`
`),v.innerHTML=m(e,Math.min(t,y.length-1)),setTimeout(r,420))};setTimeout(r,500)}