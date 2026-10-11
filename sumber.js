/* Sumber lawatan landing (12 Okt 2026), ikut corak sumber.js Jejak TP Sains.

   Pautan promosi membawa ?dari=<kod>, cth. landing.html?dari=nani-math.
   Kod pertama disimpan dalam pelayar ("js-dari"). Satu ping 'lawat'
   dihantar sekali bagi setiap sesi pelayar di landing.html. Ujian automatik
   (localhost, pelayar webdriver) tidak direkod. */
(function(){
  try{
    if(navigator.webdriver||/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
    var m=/[?&]dari=([^&#]*)/.exec(location.search), kod="";
    if(m) kod=decodeURIComponent(m[1]).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,30);
    if(kod&&!localStorage.getItem("js-dari")) localStorage.setItem("js-dari",kod);
    if(sessionStorage.getItem("js-lawat")) return;
    var awan=window.CN_AWAN; if(!awan) return;
    var p=localStorage.getItem("js-peranti");
    if(!p||!/^[a-z0-9]{8}$/.test(p)){
      p=Math.random().toString(36).slice(2,10).replace(/[^a-z0-9]/g,"0");
      while(p.length<8) p+="0";
      localStorage.setItem("js-peranti",p);
    }
    sessionStorage.setItem("js-lawat","1");
    fetch(awan.url+"/rest/v1/rpc/js_ping",{
      method:"POST", keepalive:true,
      headers:{"apikey":awan.kunci,"Authorization":"Bearer "+awan.kunci,"Content-Type":"application/json"},
      body:JSON.stringify({p_jenis:"lawat",p_peranti:p,p_nota:kod||localStorage.getItem("js-dari")||""})
    }).catch(function(){});
  }catch(e){}
})();
