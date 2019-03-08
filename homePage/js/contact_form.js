$('#send_btn').click(function send_form(stmt_send){
    /** Get data values */
    let name = $('#name');
    let email = $('#email');
    let phone = $('#phone');
    let age = $('#age');
    let gender = $('#gender');
    /**Show alert if success send data or not */
    let warning = $('#warning');
    /*Get first number phone */
    let num = phone.val().charAt(0);
    /*Path for file upload data in the server*/
    let path = "../common/api/proccess.php";
    /** Function validate EMAIL */
    let isEmail = function(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email.val());
    }
    let data = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        gender: gender
    };

    /*Validate form*/
    for (let prop in data)
    {

        if (data[prop].val() == "")
        {
            data[prop].css('border', '2px solid red');
            stmt_send = false;
        }
        else
        {
            data[prop].css('border', '2px solid green');
            stmt_send = true;
        }
    }
    if (stmt_send == false)
    {
        warning.html("Porfavor llene todos los campos!");
    }
    /* Validate EMAIL */
    else if (isEmail(email) == false)
    {
        warning.html("Inserte un email valido!");
        email.css('border', '2px solid red');
        stmt_send = false;
    }
    /* Validate phone */
    else if (phone.val() <= 8 || num !== "3")
    {
        warning.html("Inserte un número valido!");
        phone.css('border', '2px solid red');
        stmt_send = false;
    }
    else
    {
        warning.html("Registro exitoso!");
        warning.css('color', 'green');

        $.ajax({
            type: "POST",
            url: path,
            data: data,
            succes: function(){
                console.log(data);
                alert("Nice");
            },
            error: function(){
                alert("Error");
            }
        });
    }
});
