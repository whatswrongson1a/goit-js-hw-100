import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector(".form"),n=r.querySelector('input[name="delay"]');r.querySelectorAll('input[name="state"]');r.addEventListener("submit",function(t){t.preventDefault();const e=Number(n.value),o=document.querySelector('input[name="state"]:checked').value;u(e,o).then(()=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"top-right"})}).catch(()=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"top-right"})})});function u(t,e){return new Promise((o,s)=>{setTimeout(()=>{e==="fulfilled"?o():s()},t)})}
//# sourceMappingURL=2-snackbar.js.map
