(function($) {
    // USE STRICT
    "use strict";

    $(".form-radio .radio-item").click(function() {
        //Spot switcher:
        $(this).parent().find(".radio-item").removeClass("active");
        $(this).addClass("active");
    });

    // $('#course_type').parent().append('<ul class="list-item" id="newcourse_type" name="course_type"></ul>');
    // $('#course_type option').each(function() {
    //     $('#newcourse_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#course_type').remove();
    // $('#newcourse_type').attr('id', 'course_type');
    // $('#course_type li').first().addClass('init');
    // $("#course_type").on("click", ".init", function() {
    //     $(this).closest("#course_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#gender_type').parent().append('<ul class="list-item" id="newgender_type" name="gender_type"></ul>');
    // $('#gender_type option').each(function() {
    //     $('#newgender_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#gender_type').remove();
    // $('#newgender_type').attr('id', 'gender_type');
    // $('#gender_type li').first().addClass('init');
    // $("#gender_type").on("click", ".init", function() {
    //     $(this).closest("#gender_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#sem_type').parent().append('<ul class="list-item" id="newsem_type" name="sem_type"></ul>');
    // $('#sem_type option').each(function() {
    //     $('#newsem_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#sem_type').remove();
    // $('#newsem_type').attr('id', 'sem_type');
    // $('#sem_type li').first().addClass('init');
    // $("#sem_type").on("click", ".init", function() {
    //     $(this).closest("#sem_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#card_type').parent().append('<ul class="list-item" id="newcard_type" name="card_type"></ul>');
    // $('#card_type option').each(function() {
    //     $('#newcard_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#card_type').remove();
    // $('#newcard_type').attr('id', 'card_type');
    // $('#card_type li').first().addClass('init');
    // $("#card_type").on("click", ".init", function() {
    //     $(this).closest("#card_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#occupation_type').parent().append('<ul class="list-item" id="newoccupation_type" name="occupation_type"></ul>');
    // $('#occupation_type option').each(function() {
    //     $('#newoccupation_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#occupation_type').remove();
    // $('#newoccupation_type').attr('id', 'occupation_type');
    // $('#occupation_type li').first().addClass('init');
    // $("#occupation_type").on("click", ".init", function() {
    //     $(this).closest("#occupation_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#confirm_type').parent().append('<ul class="list-item" id="newconfirm_type" name="confirm_type"></ul>');
    // $('#confirm_type option').each(function() {
    //     $('#newconfirm_type').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#confirm_type').remove();
    // $('#newconfirm_type').attr('id', 'confirm_type');
    // $('#confirm_type li').first().addClass('init');
    // $("#confirm_type").on("click", ".init", function() {
    //     $(this).closest("#confirm_type").children('li:not(.init)').toggle('slow');
    // });

    // $('#hour_appointment').parent().append('<ul class="list-item" id="newhour_appointment" name="hour_appointment"></ul>');
    // $('#hour_appointment option').each(function() {
    //     $('#newhour_appointment').append('<li value="' + $(this).val() + '">' + $(this).text() + '</li>');
    // });
    // $('#hour_appointment').remove();
    // $('#newhour_appointment').attr('id', 'hour_appointment');
    // $('#hour_appointment li').first().addClass('init');
    // $("#hour_appointment").on("click", ".init", function() {
    //     $(this).closest("#hour_appointment").children('li:not(.init)').toggle('slow');
    // });

    // var allOptions1 = $("#course_type").children('li:not(.init)');
    // $("#course_type").on("click", "li:not(.init)", function() {
    //     allOptions1.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#course_type").children('.init').html($(this).html());
    //     allOptions1.toggle('slow');
    // });

    // var allOptions2 = $("#gender_type").children('li:not(.init)');
    // $("#gender_type").on("click", "li:not(.init)", function() {
    //     allOptions2.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#gender_type").children('.init').html($(this).html());
    //     allOptions2.toggle('slow');
    // });

    // var allOptions3 = $("#sem_type").children('li:not(.init)');
    // $("#sem_type").on("click", "li:not(.init)", function() {
    //     allOptions3.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#sem_type").children('.init').html($(this).html());
    //     allOptions3.toggle('slow');
    // });

    // var allOptions4 = $("#card_type").children('li:not(.init)');
    // $("#card_type").on("click", "li:not(.init)", function() {
    //     allOptions4.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#card_type").children('.init').html($(this).html());
    //     allOptions4.toggle('slow');
    // });

    // var allOptions5 = $("#occupation_type").children('li:not(.init)');
    // $("#occupation_type").on("click", "li:not(.init)", function() {
    //     allOptions5.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#occupation_type").children('.init').html($(this).html());
    //     allOptions5.toggle('slow');
    // });

    // var FoodOptions = $("#confirm_type").children('li:not(.init)');
    // $("#confirm_type").on("click", "li:not(.init)", function() {
    //     FoodOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#confirm_type").children('.init').html($(this).html());
    //     FoodOptions.toggle('slow');
    // });

    // var AppointmentOptions = $("#hour_appointment").children('li:not(.init)');
    // $("#hour_appointment").on("click", "li:not(.init)", function() {
    //     AppointmentOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#hour_appointment").children('.init').html($(this).html());
    //     AppointmentOptions.toggle('slow');
    // });
})(jQuery);