const toast=document.getElementById("toast");
function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.__zoneToastTimer);
  window.__zoneToastTimer=setTimeout(()=>toast.classList.remove("show"),1800);
}
document.querySelectorAll(".copy-ip").forEach(button=>{
  button.addEventListener("click",async()=>{
    const ip=button.dataset.ip||"play.zoneoutmc.lt";
    try{
      await navigator.clipboard.writeText(ip);
      showToast(`IP nukopijuotas: ${ip}`);
    }catch{
      const temp=document.createElement("textarea");
      temp.value=ip;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
      showToast(`IP nukopijuotas: ${ip}`);
    }
  });
});
const onlineCount=document.getElementById("onlineCount");
if(onlineCount) onlineCount.textContent="1";
