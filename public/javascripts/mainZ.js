$(function() {

    var count = 0;
    var helper = {};

    function update(callback){
        var employees=[

            $.ajax({
                datatype: 'json',
                type: "GET",
                url: './api/employee',
                data:{},
                success: function (data){
                    console.log("creepy " + data[0].name);
                    crudApp();
                    helper = data;
                    return data;
                }               
            })

        ]
    console.log(JSON.stringify(employees));
    console.log(employees[0].readyState);
    return employees;
    callback();
    };

    var employee = update(crudApp);

    $(document).ready(employee = update());
    console.log(employee[0].address);
    console.log('document ready');

    // crudApp();

    function crudApp(){

        count++;
        console.log('CRUD' + count);
        if (count>1) {
            var emp=(helper[count-1]);
            console.log(emp['name']);
            $("#employee_list").text(emp['address']);
        }
    }

});