$('#add').on('submit', function(){
    var that = $(this),
        contents = that.serialize();
    $.ajax({
        url: 'auftragos.php',
        type: 'POST',
        data: contents,
        dataType: 'JSON',
        success: function(data) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "positionClass": "toast-top-full-width",
                "onclick": null,
                "showDuration": "20000",
                "hideDuration": "20000",
                "timeOut": "20000",
                "extendedTimeOut": "20000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            if(data.title == "Erfolg"){
                toastr.success(data.message, data.title);
            }
            else{
                toastr.error(data.message, data.title);
            }
        }
    });
    return false;
});
