$('#send_btn').click(function send_form(stmt_send){
    let name = $('#name');
    let email = $('#email');
    let phone = $('#phone');
    let age = $('#age');
    let gender = $('#gender');
    let warning = $('#warning');

    let data = {
        name: name,
        email: email,
        phone: phone,
        age: age,
        gender: gender
    };

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
        else
        {
            warning.html("Registro exitoso!");
        }
});
