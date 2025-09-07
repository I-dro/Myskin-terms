window.MYSKIN_LEGAL = (function(){
  function setDateText(el, iso){
    if(!el) return;
    try{
      // If provided as [YYYY-MM-DD], strip brackets
      const clean = (iso||'').replace(/[\[\]]/g,'');
      const d = clean ? new Date(clean) : new Date();
      const opts = { year: 'numeric', month: 'long', day: 'numeric' };
      el.textContent = d.toLocaleDateString(undefined, opts);
    }catch(err){
      // fallback: today
      const d = new Date();
      el.textContent = d.toDateString();
    }
  }

  function initDates(opts){
    const effective = document.getElementById('effective-date');
    const updated = document.getElementById('last-updated');
    setDateText(effective, opts && opts.effective);
    setDateText(updated, new Date().toISOString().slice(0,10));
  }

  return { initDates };
})();


