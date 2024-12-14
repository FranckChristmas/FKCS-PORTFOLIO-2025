// function to load a conmponent by calling its ID in a div class

function loadComponent(selector, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch((error) => console.error('Error loading component:', error));
}

// loading the header
loadComponent('#header', 'components/header.html');
