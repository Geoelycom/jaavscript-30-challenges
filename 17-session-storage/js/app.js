const moon = 'moon';
const sun = 'sun';

const Dark_Mode = 'dark';
const Light_Mode = 'light';
const default_Mode = 'Dark_Mode';

const btn = document.querySelector('#theme-switcher');

function setMode(mode = default_Mode){
if (mode === Dark_Mode){
  btn.textContent = sun;
  document.body.classList.add(Dark_Mode);
}else if( mode === Light_Mode){
  btn.textContent = moon;
  document.body.classList.remove(Dark_Mode)
}
}

init();


function init(){
  let storedMode = sessionStorage.getItem('mode');
  if (!storedMode){
    storedMode = default_Mode;
    sessionStorage.setItem('mode', default_Mode)
  }
  setMode(storedMode)
}


btn.addEventListener('click', () => {
  let mode = sessionStorage.getItem('mode')
  if (mode){
    let newMode = mode == Dark_Mode ? Light_Mode: Dark_Mode
    setMode(newMode)
    sessionStorage.setItem('mode', newMode)
  };
})