function myFunction() {

    var x = document.getElementById('b2');
    var y = document.getElementById('img1');
    var z = document.getElementById('b1');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        x.style.display = 'none';

    }

}
function myFunction1() {
    var x = document.getElementById('b3');
    var y = document.getElementById('img2');
    var z = document.getElementById('b2');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        x.style.display = 'none';

    }

}
function myFunction2() {
    var x = document.getElementById('b4');
    var y = document.getElementById('img3');
    var z = document.getElementById('b3');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        x.style.display = 'none';

    }

}
function myFunction3() {
    var x = document.getElementById('b5');
    var y = document.getElementById('img4');
    var z = document.getElementById('b4');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        x.style.display = 'none';

    }

}
function myFunction4() {
    var x = document.getElementById('b6');
    var y = document.getElementById('img5');
    var z = document.getElementById('b5');

    if (x.style.display == 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        x.style.display = 'none';

    }

}
function myFunction5() {
    var y = document.getElementById('img6');
    var z = document.getElementById('b6');

    if (z.onclick) {

        y.style.display = 'block';
        z.style.display = 'none';


    } else {
        z.style.display = 'block';

    }

}
function btnClick() {
    $("#input-image-3").trigger('click');
}

$("#coursecategory").focus(function () {
    var value = $(this).text().trim()
    $(this).css("border-color", "#0080ff");
    if (checkcategory2(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});

$("#othercourse").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#bio").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#post").focus(function () {
    $(this).css("border-color", "#0080ff");
});

$("#post1").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#detail").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#course").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#coursecat").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#courseprice").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#bio").focusout(function () {
    var value = $(this).val()
    if (checkpos(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});

$("#post1").focusout(function () {
    var value = $(this).val()
    if (checkpost1(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});
$("#post").focusout(function () {
    var value = $(this).val()
    if (checkpost(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});




$("#detail").focusout(function () {
    var value = $(this).val()
    if (checkdetail(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});

$("#coursecategory").focusout(function () {
    var value = $(this).text().trim()
    if (checkcategory2(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }});

$("#othercourse").focusout(function () {
    var value = $(this).val()
    if (checkothers(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});



function checkallpost() {
    console.log('hi');
    var posvalue = $('#bio').val();
    var detailvalue = $('#detail').val();
    var facebookvalue = $('#facebook').val();
    var linevalue = $('#line').val();
    var phonevalue = $('#phonenumber').val();
    var $fileUpload = $("#input-image-3");
    if (parseInt($fileUpload.get(0).files.length) > 6) {
        alert("Can upload a maximum of 6 images");
        return false;
    }

    if (checkpos(posvalue) == 1 ||
        checkdetail(detailvalue) == 1 ||
        checkfacebook(facebookvalue) ==1 ||
        checkline(linevalue) ==1 ||
        checkphone(phonevalue) == 1 || checkphone(phonevalue) == 2
         ) {
        alert("Please enter all of the information");
         console.log(phonevalue)
        return false;
    } else {
        return true;
    }
}

function checkcategory(value) {
    var ddl = document.getElementById("coursecategory");
    var selectedValue = ddl.text();
    document.getElementById('categorystatus').style.color = "red";
    if (selectedValue == "") {
        document.getElementById('categorystatus').innerHTML = 'X Please enter the right category';
        return 1
    } else {
        document.getElementById('categorystatus').innerHTML = '';
        return 0
    }
}
function checkcategory2(value) {

    document.getElementById('categorystatus').style.color = "red";
    if (value == "Course Category") {
        document.getElementById('categorystatus').innerHTML = 'X Please enter the right category';
        return 1
    } else {
        document.getElementById('categorystatus').innerHTML = '';
        return 0
    }
}

function checkpos(value) {
    document.getElementById('posstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('posstatus').innerHTML = 'X Please enter your bio';
        return 1;
    } else {
        document.getElementById('posstatus').innerHTML = '';
        return 0;
    }
}
function checkprice(value) {
    document.getElementById('pricestatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('pricestatus').innerHTML = "X Please correct price, can't be negative";
        return 1;
    } else {
        document.getElementById('pricestatus').innerHTML = '';
        return 0;
    }
}
function checkothers(value) {
    document.getElementById('othersstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('othersstatus').innerHTML = 'X Please enter the category';
        return 1;
    } else {
        document.getElementById('othersstatus').innerHTML = '';
        return 0;
    }
}



function checkdetail(value) {
    document.getElementById('detailstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('detailstatus').innerHTML = 'X Please enter the video link';
        return 1;
    } else {
        document.getElementById('detailstatus').innerHTML = '';
        return 0;
    }
}
function checkpost1(value) {
    document.getElementById('post1status').style.color = "red";
    if (value.length == 0) {
        document.getElementById('post1status').innerHTML = 'X Pleas enter the price';
        return 1
    }
    if (value < 0) {
        document.getElementById('post1status').innerHTML = 'X Value of the price must be more than zero';
        return 1
    } else {
        document.getElementById('post1status').innerHTML = '';
        return 0
    }
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})
function readURL(input) {
    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("img5").style.display = "none";
    if (input.files.length > 6) {
        alert("Can upload a maximum of 6 images");
    } else {
        if (input.files[0]) {
            for (i = 0; i < input.files.length; i++)
                showImage(input, i);
            document.getElementById("b1").innerHTML = "Change picture";
        }
    }
}
function showImage(input, n) {
    var reader = new FileReader();
    var str = '#img' + n;

    reader.onload = function (e) {
        $(str)
            .attr('src', e.target.result)
            .width(100)
            .height(100);
    };

    reader.readAsDataURL(input.files[n]);
    $(str).show();
}

(function ($) {
$(function () {

    var addFormGroup = function (event) {
        event.preventDefault();

        var $formGroup = $(this).closest('.form-group');
        var $multipleFormGroup = $formGroup.closest('.multiple-form-group');
        var $formGroupClone = $formGroup.clone();

        $(this)
            .toggleClass('btn-success btn-add btn-danger btn-remove')
            .html('–');

        $formGroupClone.find('input').val('');
        $formGroupClone.find('.concept').text('Course Category');
        $formGroupClone.insertAfter($formGroup);

        var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
        if ($multipleFormGroup.data('max') <= countFormGroup($multipleFormGroup)) {
            $lastFormGroupLast.find('.btn-add').attr('disabled', true);
        }
    };

    var removeFormGroup = function (event) {
        event.preventDefault();

        var $formGroup = $(this).closest('.form-group');
        var $multipleFormGroup = $formGroup.closest('.multiple-form-group');

        var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
        if ($multipleFormGroup.data('max') >= countFormGroup($multipleFormGroup)) {
            $lastFormGroupLast.find('.btn-add').attr('disabled', false);
        }

        $formGroup.remove();
    };

    var selectFormGroup = function (event) {
        event.preventDefault();

        var $selectGroup = $(this).closest('.input-group-select');
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();

        $selectGroup.find('.concept').text(concept);
        $selectGroup.find('.input-group-select-val').val(param);

    }

    var countFormGroup = function ($form) {
        return $form.find('.form-group').length;
    };

    $(document).on('click', '.btn-add', addFormGroup);
    $(document).on('click', '.btn-remove', removeFormGroup);
    $(document).on('click', '.dropdown-menu a', selectFormGroup);

});
})(jQuery);

    // var cloneIndex = $(".course").length;
    // $('.addcourse').on('click', function(e) {
    //   e.preventDefault();
    //   console.log('hi');
    //   $('.course').first().clone()
    //       .find("input")
    //     .attr("id", "courseprice" +  cloneIndex).attr("name", "courseprice" +  cloneIndex)
    //     .val('').end()
    //     .find("input:text")
    //     .attr("id", "course" +  cloneIndex).attr("name", "course" +  cloneIndex)
    //     .val('').end()
    //     .find("select")
    //     .attr("id", "coursecat" +  cloneIndex).attr("name", "coursecat" +  cloneIndex)
    //     .val('').end().insertBefore(this);
    //     cloneIndex++;
    // });
 //
 var cloneIndex = $("#course").length+1;
$('.addcourse').on('click', function(e) {
  e.preventDefault();
  console.log('hi');
  $('#hiddenvalue').val(cloneIndex);
  $('.course').first().clone()
      .find("input")
    .attr("id", "courseprice" ).attr("name", "courseprice" +  cloneIndex).attr("class", "form-control courseprice" )
    .val('').end()
    .find("input:text")
    .attr("id", "course" ).attr("name", "course" +  cloneIndex).attr("class", "form-control course" )
    .val('').end()
    .find("select")
    .attr("id", "coursecat" ).attr("name", "coursecat" +  cloneIndex).attr("class", "form-control coursecat" )
    .val('').end().insertBefore(this);
    cloneIndex++;

});



$("#facebook").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#phone").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#line").focus(function () {
    $(this).css("border-color", "#0080ff");
});
$("#facebook").focusout(function () {
    var value = $(this).val();
    if (checkfacebook(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});
$("#line").focusout(function () {
    var value = $(this).val();
    if (checkline(value) == 1) {
        $(this).css("border-color", "#FF0000");
    } else {
        $(this).css("border-color", "#00CD00");
    }
});
$("#phonenumber" ).focusout(function() {
        var value = $(this).val();
        console.log('hi');
        console.log(checkphone(value));
        if (checkphone(value) == 1) {
            $(this).css("border-color", "#FF0000");document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number';
        } else if (checkphone(value) == 2) {
            $(this).css("border-color", "#FF0000");document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number';

        } else{
            $(this).css("border-color", "#00CD00");document.getElementById('phonenumberstatus').innerHTML ='';
        }
    });
function checkfacebook(value) {
    document.getElementById('facebookstatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('facebookstatus').innerHTML = 'X Please enter your Facebook account';
        return 1;
    } else {
        document.getElementById('facebookstatus').innerHTML = '';
        return 0;
    }
}
function checkline(value) {

    document.getElementById('linestatus').style.color = "red";
    if (value.length <= 1) {
        document.getElementById('linestatus').innerHTML = 'X Please enter your LINE account';
        return 1;
    } else {
        document.getElementById('linestatus').innerHTML = '';
        return 0;
    }
}


function checkphone(value){
      console.log("enter leawwww");
      document.getElementById('phonenumberstatus').style.color="red";
      if(value.length == 0){
          console.log("enter leawwww");
          document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number';
          return 2
      }
      if(value.length !=10) {
          if(value.indexOf(' ')>=0 && !hasNumber(value)) {

              document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number correctly';
              return 1
          } else if(value.indexOf(' ')>=0) {
              document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number correctly';
               return 1
          }else if(!hasNumber(value)){
              document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number correctly';
              return 1
          } else {
              document.getElementById('phonenumberstatus').innerHTML ='X Please enter your phone number correctly';
              return 1
          }
      } else {
          if(value.indexOf(' ')>=0 && !hasNumber(value)) {
              document.getElementById('phonenumberstatus').innerHTML ='X Wrong phone number format';
              return 1
          } else if(value.indexOf(' ')>=0) {
               alert("Phonenumber must not contain whitespaces")
              document.getElementById('phonenumberstatus').innerHTML ='X Wrong phone number format';
               return 1
          }else if(!hasNumber(value)){
              document.getElementById('phonenumberstatus').innerHTML ='X Wrong phone number format';
              return 1
          } else {
              document.getElementById('phonenumberstatus').innerHTML ='';
              return 0
          }
      }
  }
function hasNumber(myString) {
    console.log(/^[0-9]+$/.test(myString));
    return /^[0-9]+$/.test(myString);
}
function hasAlphabet(myString) {
    return /[a-zA-Z]/.test(myString)
}