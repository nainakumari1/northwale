(()=>{
const C=CFG,$=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)],G='#C9A86A',B='#D8C7A8',P=location.pathname.replace(/\/$/,'')||'/';
const sv=(b,v='0 0 100 100')=>`<svg viewBox="${v}" fill="none" stroke="${G}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${b}</svg>`;
const sp=(x,y,s=1)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0-8L2-2 8 0 2 2 0 8-2 2-8 0-2-2z" fill="${B}" stroke="none"/>`;
const F='#1C1C1C';
const S={
van:sv(`<rect x="6" y="14" width="78" height="38" rx="8" fill="${F}"/><path d="M84 22h16l14 16v14H84z" fill="#141414"/><path d="M90 27h9l8 10H90z" fill="${B}" stroke="none"/><circle cx="30" cy="54" r="9" fill="#0A0A0A" stroke-width="4"/><circle cx="96" cy="54" r="9" fill="#0A0A0A" stroke-width="4"/><circle cx="20" cy="30" r="4" stroke="${B}"/><circle cx="34" cy="26" r="2.5" stroke="${B}"/><circle cx="14" cy="8" r="4" stroke="${B}"/>${sp(56,32,1.4)}${sp(108,8)}`,'0 0 120 70'),
vac:sv(`<circle cx="38" cy="62" r="24" fill="${F}"/><path d="M50 42L68 16h20"/><rect x="82" y="9" width="14" height="14" rx="3" fill="${F}"/>${sp(30,56,1.2)}${sp(80,50)}`),
bucket:sv(`<path d="M20 40h60l-7 46H27z" fill="${F}"/><path d="M28 40c0-26 44-26 44 0"/><circle cx="36" cy="26" r="6" stroke="${B}"/><circle cx="56" cy="16" r="8" stroke="${B}"/><circle cx="72" cy="28" r="4" stroke="${B}"/>${sp(50,64,1.2)}`),
shield:sv(`<path d="M50 8l32 12v26c0 20-14 34-32 42-18-8-32-22-32-42V20z" fill="${F}"/><path d="M36 48l10 10 20-22"/>${sp(84,12)}`),
spray:sv(`<rect x="34" y="44" width="32" height="44" rx="8" fill="${F}"/><path d="M42 44V28h22l6 6M78 30h10M78 20l10-5M78 40l10 5"/>${sp(20,28,1.2)}`),
cal:sv(`<rect x="16" y="22" width="68" height="62" rx="8" fill="${F}"/><path d="M16 42h68M36 14v14M64 14v14M38 64l8 8 16-16"/>`),
card:sv(`<rect x="12" y="28" width="76" height="48" rx="8" fill="${F}"/><path d="M12 46h76M26 64h18"/>${sp(76,18)}`),
car:sv(`<path d="M10 66V52l12-18h40l16 18v14z" fill="${F}"/><circle cx="28" cy="68" r="8" fill="#0A0A0A"/><circle cx="64" cy="68" r="8" fill="#0A0A0A"/><path d="M28 38h14v12H22z" fill="${B}" stroke="none"/>${sp(82,24,1.3)}${sp(18,22)}`),
det:sv(`<path d="M6 92V76l16-20h58l14 20v16z" fill="${F}"/><circle cx="26" cy="94" r="9" fill="#0A0A0A"/><circle cx="76" cy="94" r="9" fill="#0A0A0A"/><circle cx="34" cy="20" r="11" fill="${B}"/><path d="M26 14c4-8 16-8 18 0z" fill="${G}"/><rect x="24" y="32" width="20" height="26" rx="8" fill="#141414"/><path d="M42 40l22 14"/><rect x="60" y="48" width="14" height="10" rx="4" fill="${B}" transform="rotate(30 66 52)"/><circle cx="82" cy="40" r="5" stroke="${B}"/>${sp(88,64,1.3)}${sp(52,66)}`)};
const ic=(k)=>`<span class="ic">${S[k]}</span>`;
const nav=[['/','Home'],['/services','Services'],['/about','About'],['/gallery','Gallery'],['/booking','Booking'],['/contact','Contact']];
const fi=`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`;
const ff=`<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M14 8V6c0-1 .3-1.5 1.6-1.5H17V1h-3c-3 0-4.5 1.8-4.5 4.5V8H7v3.5h2.5V23H14V11.5h2.8L17 8z"/></svg>`;
document.body.insertAdjacentHTML('afterbegin',`<header class="nav"><a href="/"><img class="logo" src="/images/logo.png" alt="Northvale Mobile Detailing"></a><nav>${nav.map(n=>`<a href="${n[0]}" class="${n[0]==P?'on':''}">${n[1]}</a>`).join('')}</nav><a class="btn" data-book href="/booking">Book Now</a><button class="menu" aria-label="Menu" aria-expanded="false">☰</button></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap fg"><div><img class="logo" src="/images/logo.png" alt="Northvale logo"><p>PREMIUM CARE | PRECISION DETAILING | LASTING PROTECTION</p></div><div><h4>Links</h4>${nav.map(n=>`<a href="${n[0]}">${n[1]}</a>`).join('')}</div><div><h4>Services</h4>${C.svc.map(s=>`<a href="/services">${s.t}</a>`).join('')}</div><div><h4>Contact</h4><a href="mailto:${C.email}">${C.email}</a><div class="soc"><a href="${C.ig}" target="_blank" rel="noopener" aria-label="Instagram">${fi}</a><a href="${C.fb}" target="_blank" rel="noopener" aria-label="Facebook">${ff}</a></div></div></div><p class="cp">© ${new Date().getFullYear()} Northvale Mobile Detailing LLC</p></footer><a class="fig" href="${C.ig}" target="_blank" rel="noopener" aria-label="Instagram">${fi}</a><div class="modal" hidden><div class="box"><button class="x" aria-label="Close">×</button><div class="mb"></div></div></div>`);
$$('[data-svg]').forEach(e=>e.innerHTML=S[e.dataset.svg]);
$$('[data-cfg]').forEach(e=>e.textContent=C[e.dataset.cfg]);
$$('[data-cfgh]').forEach(e=>e.href=e.dataset.cfgh=='ig'?C.ig:e.dataset.cfgh=='fb'?C.fb:'mailto:'+C.email);
$$('[data-svc]').forEach(e=>e.innerHTML=C.svc.map(s=>`<div class="card">${ic(s.i)}<h3>${s.t}</h3>${e.dataset.svc=='full'?`<ul>${s.l.map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p>${s.d}</p>`}</div>`).join(''));
$$('[data-prices]').forEach(e=>e.innerHTML=C.prices.map(p=>`<div class="card"><h3>${p.n}</h3><div class="price">${p.p}</div><p>${p.d}</p><span class="pay">Pay After Service</span></div>`).join('')+`<p class="note">${C.note}</p>`);
$$('[data-rev]').forEach(e=>e.innerHTML=C.rev.map(r=>`<div class="card"><span class="av">${r.n.split(' ').map(w=>w[0]).join('')}</span><h3>${r.n}</h3><p>${r.t}</p></div>`).join(''));
const PR=[['real-after-dashboard.jpg','real-after-dashboard-detail.jpg','Dashboard'],['before-seat-front.jpg','after-seat-front.jpg','Front Seat'],['before-seat-rear.jpg','after-seat-rear.jpg','Rear Seat']];
$$('[data-ba]').forEach(e=>{const l=e.dataset.ba=='all'?PR:[PR[+e.dataset.ba]];e.innerHTML=l.map(p=>`<div class="card ba"><h3>${p[2]}</h3><div class="pic"><img class="b" src="/images/${p[0]}" alt="Before ${p[2]}"><img class="a" src="/images/${p[1]}" alt="After ${p[2]}"></div><div class="tg"><button class="on">Before</button><button>After</button></div></div>`).join('')});
const R=(n,o)=>`<div class="opts">${o.map((x,i)=>`<label class="opt"><input type="radio" name="${n}" value="${x}" ${i?'':'checked'}><span>${x}</span></label>`).join('')}</div>`;
const Sl=(n,o)=>`<select name="${n}">${o.map(x=>`<option>${x}</option>`).join('')}</select>`;
const form=()=>`<form class="bf" novalidate><h3>Get My Free Estimate</h3><span class="pay">No Upfront Payment · Pay After Service</span>
<label>Vehicle Type</label>${R('vehicle',['Sedan','SUV','Truck','Van','Other'])}
<div class="g2"><div><label>Vehicle Size</label>${Sl('size',['Compact','Mid-size','Large','XL'])}</div><div><label>Year / Make / Model</label><input name="ymm" placeholder="Optional"></div></div>
<label>Service</label>${R('service',C.prices.map(p=>p.n+' '+p.p))}
<label>Add-ons</label><div class="opts">${['Pet Hair','Stain','Odor','Trunk','Engine Bay','Headlights'].map(a=>`<label class="opt"><input type="checkbox" name="addons" value="${a}"><span>${a}</span></label>`).join('')}</div>
<div class="g2"><div><label>Dirt Level</label>${Sl('dirt',['Light','Moderate','Very Dirty','Extreme'])}</div><div><label>Time</label>${Sl('time',['Morning','Afternoon','Evening'])}</div></div>
<label>Location</label>${R('location',['Home','Office','Other'])}<input name="address" placeholder="Address">
<label>Date</label><input type="date" name="date" class="dt">
<label>Contact By</label>${R('contactBy',['Phone','Email','IG DM'])}
<div class="g2"><div><label>Name *</label><input name="name"></div><div><label>Phone *</label><input name="phone" type="tel"></div></div>
<label>Email *</label><input name="email" type="email"><label>Notes</label><textarea name="notes" rows="3"></textarea>
<label class="chk"><input type="checkbox" name="agree" value="yes"> I understand I pay after service *</label>
<button class="btn" type="submit">Get My Free Estimate</button><p class="msg" role="alert"></p></form>`;
const dt=()=>$$('.dt').forEach(e=>e.min=new Date().toISOString().slice(0,10));
$$('#bf').forEach(e=>e.innerHTML=form());dt();
document.addEventListener('click',e=>{
  const t=e.target,b=t.closest('.tg button'),pc=t.closest('.pic');
  if(b||pc){const c=t.closest('.ba'),a=b?b.textContent=='After':!$('.pic',c).classList.contains('sa');$('.pic',c).classList.toggle('sa',a);$$('.tg button',c).forEach((x,i)=>x.classList.toggle('on',!!i==a))}
  if(t.closest('[data-book]')&&P!='/booking'){e.preventDefault();$('.mb').innerHTML=form();$('.modal').hidden=false;dt()}
  if(t.matches('.x,.modal'))$('.modal').hidden=true;
  const mn=t.closest('.menu');if(mn){const h=$('.nav');mn.setAttribute('aria-expanded',h.classList.toggle('open'))}
});
addEventListener('error',e=>{const i=e.target;if(i.tagName!='IMG')return;const d=document.createElement('div');d.className='ph '+i.className;d.innerHTML=S.car+'<small>Add '+i.src.split('/').pop()+'</small>';i.replaceWith(d)},true);
document.addEventListener('submit',async e=>{
  const f=e.target;if(!f.matches('.bf'))return;e.preventDefault();
  const fd=new FormData(f),d=Object.fromEntries(fd),m=$('.msg',f);d.addons=fd.getAll('addons').join(', ');
  $$('.err',f).forEach(x=>x.classList.remove('err'));
  const bad=[];
  if(!(d.name||'').trim())bad.push('name');
  if(d.phone.replace(/\D/g,'').length<7)bad.push('phone');
  if(!/^\S+@\S+\.\S+$/.test(d.email))bad.push('email');
  if(!d.agree)bad.push('agree');
  if(bad.length){bad.forEach(n=>f.elements[n].classList.add('err'));m.textContent='Please fix the highlighted fields.';return}
  m.textContent='Sending…';
  try{const r=await fetch('/api/booking',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});if(!(await r.json()).success)throw 0;
    f.innerHTML=`<div class="okb"><svg viewBox="0 0 52 52" width="90"><circle cx="26" cy="26" r="24" fill="none" stroke="${G}" stroke-width="3"/><path d="M14 27l8 8 16-17" fill="none" stroke="${G}" stroke-width="4" stroke-linecap="round"/></svg><h3>Thank you, ${d.name.replace(/[<>&]/g,'')}!</h3><p>We received your request and will contact you soon with your free estimate.</p></div>`;
  }catch{m.textContent='Something went wrong. Please email us at '+C.email}
});
if(!['/booking','/contact','/gallery'].includes(P))$$('main section .wrap').forEach(w=>{if(['/','/services'].includes(P)&&!$('[data-prices]',w))return;w.insertAdjacentHTML('beforeend','<div class="cta"><a class="btn" data-book href="/booking">Book Now</a></div>')});
const els=$$('main .wrap>*'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(rm||!('IntersectionObserver'in window))els.forEach(e=>e.classList.add('rv','in'));
else{const o=new IntersectionObserver(l=>l.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.1});els.forEach(e=>{e.classList.add('rv');o.observe(e)})}
})();
