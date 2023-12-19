document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      closeLoaderAndRedirect();
    }, 6000);

    function closeLoaderAndRedirect() {
      document.querySelector('.wrapper').style.display = 'none';
      window.location.href = 'main.html';
    }
  });