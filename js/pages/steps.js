
  var form1 = $(".validation-wizard").show();
  
  $(".validation-wizard").steps({
      headerTag: "h6"
      , bodyTag: "section"
      , transitionEffect: "none"
      , titleTemplate: '<span class="step">#index#</span> #title#'
      , labels: {
          finish: "Submit"
      }
      , onStepChanging: function (event, currentIndex, newIndex) {
          return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form1.find(".body:eq(" + newIndex + ") label.error").remove(), form1.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form1.validate().settings.ignore = ":disabled,:hidden", form1.valid())
      }
      , onFinishing: function (event, currentIndex) {
          return form1.validate().settings.ignore = ":disabled", form1.valid()
      }
      , onFinished: function (event, currentIndex) {
        //   swal("Your Submitted!", "Thank you.");
          $("#tap_step1").removeClass("active show");
          $("#step_1").removeClass("active show");

          $("#tap_step2").addClass("active show");
          $("#step_2").addClass("active show");
        //   window.location.reload();
        }
  }), $(".validation-wizard").validate({
      ignore: "input[type=hidden]"
      , errorClass: "text-danger"
      , successClass: "text-success"
      , highlight: function (element, errorClass) {
          $(element).removeClass(errorClass)
      }
      , unhighlight: function (element, errorClass) {
          $(element).removeClass(errorClass)
      }
      , errorPlacement: function (error, element) {
          error.insertAfter(element)
      }
      , rules: {
          email: {
              email: !0
          }
      }
  });
  
   var form2 = $(".validation-wizard2").show();
    
    $(".validation-wizard2").steps({
        headerTag: "h6"
        , bodyTag: "section"
        , transitionEffect: "none"
        , titleTemplate: '<span class="step">#index#</span> #title#'
        , labels: {
            finish: "Submit"
        }
        , onStepChanging: function (event, currentIndex, newIndex) {
            return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form2.find(".body:eq(" + newIndex + ") label.error").remove(), form2.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form2.validate().settings.ignore = ":disabled,:hidden", form2.valid())
        }
        , onFinishing: function (event, currentIndex) {
            return form2.validate().settings.ignore = ":disabled", form2.valid()
        }
        , onFinished: function (event, currentIndex) {
           
            $("#tap_step2").removeClass("active show");
            $("#step_2").removeClass("active show");
  
            $("#tap_step3").addClass("active show");
            $("#step_3").addClass("active show");
          //   window.location.reload();
          }
    }), $(".validation-wizard2").validate({
        ignore: "input[type=hidden]"
        , errorClass: "text-danger"
        , successClass: "text-success"
        , highlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        }
        , unhighlight: function (element, errorClass) {
            $(element).removeClass(errorClass)
        }
        , errorPlacement: function (error, element) {
            error.insertAfter(element)
        }
        , rules: {
            email: {
                email: !0
            }
        }
    });
	
	var form3 = $(".validation-wizard3").show();
        
        $(".validation-wizard3").steps({
            headerTag: "h6"
            , bodyTag: "section"
            , transitionEffect: "none"
            , titleTemplate: '<span class="step">#index#</span> #title#'
            , labels: {
                finish: "Submit"
            }
            , onStepChanging: function (event, currentIndex, newIndex) {
                return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form3.find(".body:eq(" + newIndex + ") label.error").remove(), form3.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form3.validate().settings.ignore = ":disabled,:hidden", form3.valid())
            }
            , onFinishing: function (event, currentIndex) {
                return form3.validate().settings.ignore = ":disabled", form3.valid()
            }
            , onFinished: function (event, currentIndex) {
              //   window.location.reload();
              }
        }), $(".validation-wizard3").validate({
            ignore: "input[type=hidden]"
            , errorClass: "text-danger"
            , successClass: "text-success"
            , highlight: function (element, errorClass) {
                $(element).removeClass(errorClass)
            }
            , unhighlight: function (element, errorClass) {
                $(element).removeClass(errorClass)
            }
            , errorPlacement: function (error, element) {
                error.insertAfter(element)
            }
            , rules: {
                email: {
                    email: !0
                }
            }
        });
		
		 var form4 = $(".validation-wizard4").show();
            
            $(".validation-wizard4").steps({
                headerTag: "h6"
                , bodyTag: "section"
                , transitionEffect: "none"
                , titleTemplate: '<span class="step">#index#</span> #title#'
                , labels: {
                    finish: "Submit"
                }
                , onStepChanging: function (event, currentIndex, newIndex) {
                    return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form4.find(".body:eq(" + newIndex + ") label.error").remove(), form4.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form4.validate().settings.ignore = ":disabled,:hidden", form4.valid())
                }
                , onFinishing: function (event, currentIndex) {
                    return form4.validate().settings.ignore = ":disabled", form4.valid()
                }
                , onFinished: function (event, currentIndex) {
                    swal("Your Submitted!", "Thank you.");
                  //   window.location.reload();
                  }
            }), $(".validation-wizard4").validate({
                ignore: "input[type=hidden]"
                , errorClass: "text-danger"
                , successClass: "text-success"
                , highlight: function (element, errorClass) {
                    $(element).removeClass(errorClass)
                }
                , unhighlight: function (element, errorClass) {
                    $(element).removeClass(errorClass)
                }
                , errorPlacement: function (error, element) {
                    error.insertAfter(element)
                }
                , rules: {
                    email: {
                        email: !0
                    }
                }
            });