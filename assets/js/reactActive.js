function addCssClass(elementId, cssClass, textContent) {
    var element = document.getElementById(elementId);
    if (element) {
      element.classList.add(cssClass);
      if (textContent) {
        element.querySelector('p').innerText = textContent;
      }
    }
  }

  function removeCssClass(elementId, cssClass, defaultTextContent) {
    var element = document.getElementById(elementId);
    if (element) {
      element.classList.remove(cssClass);
      if (defaultTextContent) {
        element.querySelector('p').innerText = defaultTextContent;
      }
    }
  }

  document.getElementById('reactDown').addEventListener('click', function() {
    addCssClass('reactDown', 'HBLA_D_CRDActive', '70');
    removeCssClass('reactUp', 'HBLA_D_CRUActive', '4.2k');
  });

  document.getElementById('reactUp').addEventListener('click', function() {
    addCssClass('reactUp', 'HBLA_D_CRUActive', '4.3k');
    removeCssClass('reactDown', 'HBLA_D_CRDActive', '69');
  });

  document.getElementById('reactBolt').addEventListener('click', function() {
    addCssClass('reactBolt', 'HBLA_D_CBActive', '70k');
  });