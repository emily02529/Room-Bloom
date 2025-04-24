window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[include-html]').forEach(el => {
      const file = el.getAttribute("include-html");
      fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`Could not load ${file}`);
          return response.text();
        })
        .then(data => el.innerHTML = data)
        .catch(err => {
          el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
          console.error(err);
        });
    });
  });
  