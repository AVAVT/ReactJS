$("#search").on("input", (e) => {
  typeahead();
});

const typeahead = () => {
  $.ajax({
    method: "get",
    url: '/typeahead',
    data: { search: $("#search").val() }
  }).then(data => {
    if (data.search == $("#search").val().trim()) {
      $("#typeahead").html(data.result.map(item => `<li>${item}</li>`).join('\n'));
    }
  });
}

$("#dictionary-form").on('submit', e => {
  e.preventDefault();
  $("#typeahead").html('');

  $.ajax({
    method: "get",
    url: '/lookup',
    data: { search: $("#search").val() }
  }).then(data => {
    $("#dictionary-result").html(`<h4>${data.search}</h4><p>${data.result}</p>`)
  });
})

$('#typeahead').on('click', 'li', function (e) {
  $("#search").val($(this).html());
  $("#dictionary-form").submit();
})