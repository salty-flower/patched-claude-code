<script>
document.addEventListener('DOMContentLoaded',function(){
  var bar=document.querySelector('.toolbar');
  if(!bar)return;
  bar.addEventListener('click',function(e){
    var b=e.target&&e.target.closest('button');
    if(!b)return;
    var open=b.dataset.act==='expand';
    document.querySelectorAll('details.section, details.grader').forEach(function(d){d.open=open});
  });
});
// Collapsed details vanish from print/PDF; these pages are share artifacts.
window.addEventListener('beforeprint',function(){
  document.querySelectorAll('details').forEach(function(d){
    if(!d.open){d.dataset.printOpened='1';d.open=true}
  });
});
window.addEventListener('afterprint',function(){
  document.querySelectorAll('details[data-print-opened]').forEach(function(d){
    d.open=false;delete d.dataset.printOpened;
  });
});
</script>