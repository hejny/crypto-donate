$(()=>{

    const donateForm = $('form#donate');
    donateForm.submit((event)=>{

        event.preventDefault();
        const data = donateForm.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});



console.log(data);





    });


})