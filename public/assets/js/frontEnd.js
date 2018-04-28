$(function() {
  console.log('loaded');
  $('.devour').on('click', (e) => {
    var id = $(e.target).data('id');
    var devoured = $(e.target).data('devoured') ? 0 : 1;

    // Send the PUT request.
    $.ajax('/api', {
      type: 'PUT',
      data: { id, devoured },
    }).then(function() {
      location.reload();
    });
  });
});
