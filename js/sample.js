$(document).ready(function(){
	
	$("#question5Input").hide();
	$("#question5Label").hide();

	

	$("#confirm").dialog({
		title: "Submit application?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
			  }
			},
			{
			  text: "Cancel",
			  icon: "ui-icon-cancel",
			  click: function() {
				$(this).dialog( "close" );
			  }
			}
		]
	});

	$("#testForm0").validate({
        rules: {
			selectmenuQuestion: "required",
			selectmenuCountry: "required",
            firstName: "required",
            lastName: "required",
			email: "required",
            phoneNumber: "required",
			ssn: "required"
        },
        messages: {
			selectmenuQuestion: {
				required: "You must pick an option"
			},
			selectmenuCountry: {
				required: "You must pick an option"
			},
            firstName: {
                required: "This field is required"
            },
            lastName: {
                required: "This field is required"
            },
            email: {
                required: "This field is required"
            },
			phoneNumber: {
                required: "This field is required"
            },
			ssn: {
				required: "This field is required"
			}
        }
    });

	$("#testForm1").validate({
        rules: {
            jobTitle: "required",
            company: "required",
			startEmployment: "required"

        },
        messages: {
            jobTitle: {
                required: "This field is required"
            },
            company: {
                required: "This field is required"
            },
            startEmployment: {
                required: "This field is required"
            }
        }
    });

	$("#phoneNumber").mask('(000) 000-0000', {
        placeholder: "(   ) ___-____"
    });

	$("#postalCode").mask("00000", {
        placeholder: "12345"
    });

	$("#ssn").mask("000-00-0000", {
        placeholder: "___-__-____"
    });

	$('#email').mask("A", {
		translation: {
			"A": { pattern: /[\w@\-.+]/, recursive: true }
		}
	});


	var dateToday = new Date();

	$(".textBoxInputStartDate").datepicker({
    	maxDate: dateToday,
    	onSelect: function(date){
			var selectedDate = new Date(date);
			var endDate = new Date(selectedDate.getTime());

        	$(".textBoxInputEndDate").datepicker( "option", "minDate", endDate );
        	$(".textBoxInputEndDate").datepicker( "option", "maxDate", '+2y' );
		}
    });
	$(".textBoxInputEndDate").datepicker();

	$("#testForm2").validate({
        rules: {
            schoolName: "required",
            major: "required",
			degree: "required",
			startSchool: "required",
			endSchool: "required",

        },
        messages: {
            jobTitle: {
                required: "This field is required"
            },
            company: {
                required: "This field is required"
            },
            startEmployment: {
                required: "This field is required"
            },
			degree: {
				required: "You must pick an option"
			},
			startSchool: {
				required: "this field is required"
			},
			endSchool: {
				required: "this field is required"
			}
        }
    });
	
	
	$("#testForm3").validate({
		rules: {
            question1: "required",
            question2: "required",
			question3: "required",
			question4: "required",
			question5: "required",

        },
        messages: {
            question1: {
                required: "You must pick an option"
            },
            question2: {
                required: "You must pick an option"
            },
            question3: {
                required: "You must pick an option"
            },
			question4: {
				required: "You must pick an option"
			},
			question5: {
				required: "Please fill out this field"
			}
        }
	});

	$('#question4').on('change', function() {
		if ( this.value == 'yes') {
		  $("#question5Input").show();
		  $("#question5Label").show();
		} else {
		  $("#question5Input").hide();
		  $("#question5Label").hide();
		}
	  });

	$("#tabs").tabs({
		
		disabled: [ 1, 2, 3, 4],
		active: 0,
		heightStyle: "fill"
		
	});
	
	$("#tab0submit").button();
	$("#tab0submit").click(function(){
		
		if( $("#testForm0").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4],
				active: 1
			});
			
		}
	});
	$("#tab0submit").on("click", function() {
		$(window).scrollTop(0);
	});


	
	
	$("#tab1submit").button();
	$("#tab1submit").click(function(){
		
		if( $("#testForm1").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4],
				active: 2
			});
		}
		
	});	
	$("#tab1submit").on("click", function() {
		$(window).scrollTop(0);
	});
	


	$("#tab2submit").button();
	$("#tab2submit").click(function(){
		
		if( $("#testForm2").valid() ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4],
				active: 3
			});
		}
		
	});
	$("#tab2submit").on("click", function() {
		$(window).scrollTop(0);
	});
	

	
	$("#tab3submit").button();
	$("#tab3submit").click(function(){
		
		if( $("#testForm3").valid() ){
			
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog({
				buttons: {
					"ok": function() {
						$(this).dialog("close");
						processResult(true);
					},
					"cancel": function() {
						$(this).dialog("close");
						processResult(false);
					}
				}
			});

			$("#confirm").dialog("open");
		}
	});	
	$("#tab3submit").on("click", function() {
		$(window).scrollTop(0);
	});

	function processResult(result) {
		if(result) {
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3],
				active: 4
			});
			randomNum();
		}
	}

	function randomNum() {
		var rand = Math.floor(Math.random() * 101);
		$("#randomNum").text(rand + "%");
		if(rand > 85) {
			$("#resultMessage").text("Your qualifications match our needs\nsomeone will be in contact with you to schedule an interview");
			return;
		}
		if(rand > 55){
			$("#resultMessage").text("We might contact you for an interview");
			return;
		}
		if(rand > 35){
			$("#resultMessage").text("We probably won't be in contact with you...");
			return;
		}
		if(rand <= 35){
			$("#resultMessage").text("Sorry, you aren't a good match.\n We won't be in contact with you...");
			return;
		}
		
		
		
		
	}
	

});

