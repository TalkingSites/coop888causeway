// Membership forms: shows the follow-up questions, keeps the total right and hands the
// finished application to the visitor's email app, addressed to the co-op.
(function () {
  var form = document.getElementById("join");
  if (!form) return;

  // a follow-up question shows while its radio button is picked
  var followUps = form.querySelectorAll("[data-show-if]");
  function refresh() {
    followUps.forEach(function (box) {
      var on = document.getElementById(box.dataset.showIf).checked;
      box.hidden = !on;
      box.querySelector("input").required = on;
    });
  }
  form.addEventListener("change", refresh);

  var level = form.querySelector("[data-total]");
  if (level) level.addEventListener("change", function () {
    document.getElementById("join-total").textContent = "$" + level.selectedOptions[0].dataset.price;
  });

  var confirm = document.getElementById("email2");
  function checkEmails() {
    if (!confirm) return;
    confirm.setCustomValidity(confirm.value === document.getElementById("email").value ? "" : "The two email addresses don't match.");
  }
  form.addEventListener("input", checkEmails);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkEmails();
    if (!form.reportValidity()) return;
    var lines = [];
    new FormData(form).forEach(function (value, key) {
      if (String(value).trim()) lines.push(key + ": " + value);
    });
    lines.push("Total: " + document.getElementById("join-total").textContent);
    var who = form.elements["Legal name of entity"] || form.elements["Last name"];
    var subject = form.dataset.subject + ": " + who.value;
    location.href = "mailto:coopcauseway@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
    form.hidden = true;
    var done = document.getElementById("join-done");
    done.hidden = false;
    done.focus();
    scrollTo(0, done.getBoundingClientRect().top + scrollY - 120);
  });
})();
