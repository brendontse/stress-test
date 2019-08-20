$(document).ready(function() {
  $('form#stress-form').submit(function(event) {
    event.preventDefault();

    $('input:checkbox[name=emotional-stress]:checked').each(function() {
      var emotionalStress = $(this).val();
    });
    $('input:checkbox[name=physical-stress]:checked').each(function() {
      var physicalStress = $(this).val();
    });
    $('input:checkbox[name=less-stress]:checked').each(function() {
      var stressReducer = $(this).val();
    });
  });

  console.log(emotionalStress);
  console.log(physicalStress);
  console.log(stressReducer);
});