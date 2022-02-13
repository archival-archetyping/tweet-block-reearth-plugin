const html = `
<div id="tweet"></div>
<script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script>
  let property;

  window.addEventListener("message", e => {
    if (e.source !== parent) return;
    property = e.data;
    document.getElementById("tweet").innerHTML = property.code;
    twttr.widgets.load();
  });
</script>
`;

reearth.ui.show(html);
reearth.on("update", send);
send();

function send() {
  if (reearth.block?.property?.default) {
    reearth.ui.postMessage(reearth.block.property.default);
  }
}
