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
      if (devoured) {
        $('#devouredModalLabel').text('You gobbled that one pretty fast!');
        $('#devouredModal').modal('show');
      } else {
        $('#devouredModalLabel').text(
          'Good choice! Your burger is ready to be devoured'
        );
        $('#devouredModal').modal('show');
      }
      setTimeout(() => {
        location.reload(true);
      }, 2000);
    });
  });
});
