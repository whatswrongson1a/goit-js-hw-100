import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbbuE1sJ.js";const l=document.getElementById("datetime-picker"),r=document.querySelector("[data-start]"),e=document.querySelectorAll(".field .value");let n=null,c=null;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){n=t[0],n<new Date?(p.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):r.disabled=!1}};y(l,v);r.addEventListener("click",()=>{!n||n<new Date||(r.disabled=!0,l.disabled=!0,c=setInterval(()=>{const t=n-new Date;if(t<=0){clearInterval(c),e.forEach(a=>a.textContent="00");return}const{days:s,hours:i,minutes:d,seconds:u}=C(t);e[0].textContent=o(s),e[1].textContent=o(i),e[2].textContent=o(d),e[3].textContent=o(u)},1e3))});function C(t){const a=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:m,minutes:f,seconds:h}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map