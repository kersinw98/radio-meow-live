const cat=document.getElementById('cat'),toast=document.getElementById('toast'),chat=document.getElementById('chatline');
function state(s){cat.classList.remove('talking','happy','blink');if(s!=='idle')cat.classList.add(s)}
function notify(t){toast.textContent=t;toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show')}
function blink(){cat.classList.add('blink');setTimeout(()=>cat.classList.remove('blink'),220)}
setInterval(()=>{if(!cat.classList.contains('talking'))blink()},3900);
window.RadioMeow={setState:state,onChat(text){if(text)chat.textContent=text;state('talking')},onFollow(){state('happy');notify('🐾 Selamat datang di Radio Meow!');setTimeout(()=>state('idle'),1800)},onLike(){notify('💜 Terima kasih untuk Like-nya!')},onGift(name){state('happy');notify('🎁 Terima kasih banyak'+(name?' '+name:'')+'!');setTimeout(()=>state('idle'),2400)},onSpeechStart(){state('talking')},onSpeechEnd(){state('idle')}};
// Test in browser console: RadioMeow.onGift('Teman Meow')