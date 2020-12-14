$('select.filter').on('change', function(){

    var class = '';
  
    $('select.filter').each(function(){
      if($(this).val() != 0)
         class += '.' + $(this).attr('class').replace('filter ', '') + $(this).val();
    });
  
    $('.item').show();
    $('.item').not(class).hide();
  
  });