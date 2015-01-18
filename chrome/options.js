// Saves options to chrome.storage
function save_options() {
  var wordsPerMinute = document.getElementById('wordsPerMinute').value;
    alert(wordsPerMinute)
  chrome.storage.sync.set({
    wordsPerMinute: wordsPerMinute,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


function restore_options() {
  chrome.storage.sync.get({
    wordsPerMinute: 250,
  }, function(items) {
    document.getElementById('wordsPerMinute').value = items.wordsPerMinute;
  });
    document.getElementById('wordsPerMinute').placeholder = items.wordsPerMinute;
    document.getElementById('currentSetting').text = "Currently set to " + .items.wordsPerMinute;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
