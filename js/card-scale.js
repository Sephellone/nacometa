const dreamCards=document.querySelectorAll(".dream-card"),growScaleBar=(e,r,a)=>{const t=Math.round(parseInt(e.textContent)/parseInt(r.textContent)*100)+"%";a.style.width=t},updateScalebars=()=>{dreamCards.forEach((e=>{const r=e.querySelector(".dream-card__progress-done"),a=e.querySelector(".dream-card__funds-needed"),t=e.querySelector(".dream-card__funds-collected-number");growScaleBar(t,a,r)}))};export{updateScalebars};