const screens = [...document.querySelectorAll('.screen')];
function showScreen(id){
  screens.forEach(s=>s.classList.toggle('active',s.id===id));
}
document.getElementById('openGate').addEventListener('click',()=>{
  const scene=document.querySelector('.castle-scene');
  scene.classList.add('gate-open');
  document.getElementById('openGate').disabled=true;
  setTimeout(()=>showScreen('giftScreen'),1750);
});
document.getElementById('openGift').addEventListener('click',()=>{
  document.getElementById('giftBox').classList.add('gift-open');
  document.getElementById('openGift').classList.add('hidden');
  setTimeout(()=>document.getElementById('celebration').classList.remove('hidden'),850);
});
document.getElementById('toPhotos').addEventListener('click',()=>{
  showScreen('photosScreen');
  startSlideshow();
});
document.getElementById('toLetter').addEventListener('click',()=>{
  showScreen('letterScreen');
  typeLetter();
});

let slideTimer;
function startSlideshow(){
  const photos=[...document.querySelectorAll('.photo-frame')];
  const dots=document.getElementById('slideDots');
  let current=0;
  dots.innerHTML=photos.map((_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join('');
  const dotEls=[...dots.children];
  clearInterval(slideTimer);
  slideTimer=setInterval(()=>{
    photos[current].classList.remove('active-photo');
    dotEls[current].classList.remove('active');
    current=(current+1)%photos.length;
    photos[current].classList.add('active-photo');
    dotEls[current].classList.add('active');
  },2800);
}

const letter = `To,
THE PRINCESS
MY bestestttt frienddd
KAJUKATLI

Subject: Happy Princess Day - MERI KAJUKATLI Ke Liye Ek Chhota Sa Letter

DEAR KAJUKATLI...

Kaise hhh MERI PRINCESS??

Pata hai aaj Princess Day hai, toh maine socha koi normal sa "Happy Princess Day" wala message nhi, ek proper letter likh duu tumhare liye lekin yeh letter bhi kam hh tere liye🫠❤️... Kyunki tu normal toh hai hi nahi, tu meri life ka ek bohot special hissa hh🫶🏻💐...

Tu meri BESTTESTTT FRIENDDD kam, aur meri MAA zyada hh😓...
Jis trah meri care krti h merepe gussa krti h mereko civics sense sikhati hh aur bhi bohot kuchh....

Tujhe pata hai, jab bhi mera mood kharab hota hai n, terese baat Krna hi kaafi hoti hai mood theek karne ke liye. Tu hasti hai toh lagta hai duniya theek hh👉🏻👈🏻..

Is PRINCESSS DAYYY pe main bas itna bolna chahta hu, tu hamesha aise hi rehna. MERI KAJUKATLI 😋, MERI PRINCESS💗, aurr MERI BESTTTESTTTESTTT FRIENDDDD 🫶🏻🌷banke rehna mere saath...

Tu meri life ki sabse sweet wali problem hai, jisse main kabhi solve karna hi nahi chahta.✨🌷

HAPPIESTTT PRINCESS DAYY MAHH KAJUKATLI 🤭 👑

~ BY UR KUCHU PUCHU`;

let typingTimer;
function typeLetter(){
  const target=document.getElementById('letterContent');
  const cursor=document.getElementById('cursor');
  const replay=document.getElementById('replayLetter');
  clearInterval(typingTimer);
  target.textContent='';
  cursor.classList.remove('hidden');
  replay.classList.add('hidden');
  let i=0;
  typingTimer=setInterval(()=>{
    target.textContent+=letter.charAt(i);
    i++;
    if(i>=letter.length){
      clearInterval(typingTimer);
      cursor.classList.add('hidden');
      replay.classList.remove('hidden');
    }
  },22);
}
document.getElementById('replayLetter').addEventListener('click',typeLetter);
