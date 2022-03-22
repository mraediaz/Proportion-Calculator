 $(document).ready(function () {
     $('#btnAdd').click(function () {
         var count = 3,
             first_row = $('#Row2');
         while (count-- > 0) first_row.clone().appendTo('#blacklistgrid');
     });

     
     var myform = $('#myform'),
         iter = 0;
     $('#btnAddCol').click(function () {
         myform.find('tr').each(function(){
           var trow = $(this);
             if(trow.index() === 0){
                 trow.append('<td>Col'+iter+'</td>');
             }else{
                 trow.append('<td><input type="checkbox" name="cb'+iter+'"/></td>');
             }
            
         });
         iter += 1;
     });
 });