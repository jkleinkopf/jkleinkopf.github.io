window.onload = function () {

    $('body').scrollspy({ target: '.navbar' });

    $('[data-toggle="tooltip"]').tooltip();   

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

  };

