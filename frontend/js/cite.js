$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));

    $('#name').text(d.name);
    $('#college').text(d.college);
    $('#registerno').text(d.registerno);

})