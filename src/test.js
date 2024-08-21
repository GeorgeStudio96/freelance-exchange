//не удалять! Передача данных в лк брейнз
function t396_onSuccess(form) {
  if (!form) return;
  if (form instanceof jQuery) {
    form = form.get(0);
  }

  const urlParams = new URLSearchParams(window.location.search);

  const utm_sourceUrl = urlParams.get("utm_source");
  const utm_mediumUrl = urlParams.get("utm_medium");
  const utm_campaignUrl = urlParams.get("utm_campaign");
  const utm_termUrl = urlParams.get("utm_term");
  const utm_contentUrl = urlParams.get("utm_content");

  const utmString = [
    utm_sourceUrl,
    utm_mediumUrl,
    utm_campaignUrl,
    utm_termUrl,
    utm_contentUrl,
  ]
    .filter((item) => !!item)
    .join(",");

  var obj = {
    program: "6957d8aa-f454-4398-16a3-08dcafd38e30",
    email: document.getElementById("em-1724245707386").value,
    utm: utmString,
  };

  fetch("https://lk-brainz.croc.ru/api/Program/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Successful response:", data);

      const testElement = document.querySelector(".test");
      if (testElement && data.link) {
        testElement.textContent = data.link;
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var tildaForms = document.querySelectorAll("form");
  tildaForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      t396_onSuccess(form);
    });
  });
});
