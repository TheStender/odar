function generateTable() {
  var data = $('#pastein').val();
var rows = data.split("\n");

var table = $('<table />');

for(var y in rows) {
  var cells = rows[y].split("\t");
  var row = $('<tr />');
  for(var x in cells) {
      row.append('<td>'+cells[x]+'</td>');
  }
  table.append(row);
}

// Insert into DOM
$('#excel_table').html(table);
}

$(document).ready(function() {
$('#pastein').on('paste', function(event) {
    $('#pastein').on('input', function() {
      generateTable(); 
      $('#pastein').off('input');
    })
})
})
