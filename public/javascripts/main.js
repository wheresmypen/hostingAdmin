$(function() {

    function getting(callback){
            return $.ajax({
                datatype: 'json',
                type: "GET",
                url: './api/employee',
                success: function(data){
                    console.log(data);
                    return data;
                }
            })
        };

    var employee = getting();

    console.log(employee);

    // $(#employee_list).html(employee);

});