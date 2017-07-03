"use strict";

function ValidCustomDataFormContents()
{
  var validForm = true;
  // $('#fileErrorId').html('&nbsp;');
  $('#customDataStartDateErrorId').html('&nbsp;');
  $('#customDataEndDateErrorId').html('&nbsp;');

  //validate dates
  var startDateAsString = $('#customFileStartDateId').val()
  if ( !(moment(startDateAsString, 'MM-DD-YYYY',true).isValid())   ) {
    validForm = false;
    $('#customDataStartDateErrorId').html('Invalid From Date')
  }
  var endDateAsString = $('#customFileEndDateId').val()
  if ( !(moment(endDateAsString, 'MM-DD-YYYY',true).isValid())   ) {
    validForm = false;
    $('#customDataEndDateErrorId').html('Invalid To Date')
  }

  //only do this date comparison when the start and end dates are valid
  if (validForm) {
    var momentStartDate = moment(startDateAsString);
    var momentEndDate = moment(endDateAsString);
    var momentCurrentDate = moment();

    if (momentStartDate.isAfter(momentCurrentDate, 'day')) {
      validForm = false;
      $('#customDataStartDateErrorId').html('From Date must not be in the future')
    }

    if (momentEndDate.isAfter(momentCurrentDate, 'day')) {
      validForm = false;
      $('#customDataEndDateErrorId').html('To Date must not be in the future')
    }

    if (momentStartDate.isAfter(momentEndDate, 'day')) {
      validForm = false;
      $('#customDataEndDateErrorId').html('To Date must not precede From Date')
    }
  }

  return validForm;
}

function validateAndSubmitCustomData()
{
  if (ValidCustomDataFormContents())
  {
    // Get rid of the upload dialog by simulating a click of the cancel button
    document.getElementById("customDataCancelButtonId").click();

    // Perform the upload
    $('#formRequestCustomDataId').submit()

  }
}


function priorityImpactDisplay(priority) {
  if(priority == 'need') {
    $('#priorityImpactPanelId').attr("style", "display:none");
  } else {
    $('#priorityImpactPanelId').attr("style", "display:block");
  }
}

$(document).ready(function(){

 // jQuery methods go here...
 // Close message alerts
 $('.message__icon-close').click(function() {
   $("#successPanelId").attr("style", "display:none");
   $("#errorPanelId").attr("style", "display:none");
 });

  $("#btnCustomDataId").click(validateAndSubmitCustomData)



  $( '#formRequestCustomDataId' )
    .submit( function( e ) {

      var dataJSON = {
        priority: $('input[name=radio--priority]:checked').val(),
        businessNeed: $('#businessNeedFieldId').val(),
        description: $('#descriptionFieldId').val(),
        fileStartDate: $("#customFileStartDateId").val(),
        fileEndDate: $("#customFileStartDateId").val()
      }

      if(dataJSON.priority != "NEED") dataJSON.priorityImpact = $('#priorityImpactFieldId').val()

      document.getElementById("successPanelId").style.display = "block";
      document.getElementById("errorPanelId").style.display = "none";
      document.getElementById("ulSuccessListId").innerHTML="Submitted successfully";

      window.scrollTo(0, 0);
      $('#businessNeedFieldId').val(""),
      $('#descriptionFieldId').val(""),
      $("#customFileStartDateId").val(""),
      $("#customFileEndDateId").val("")
      $('#priorityImpactFieldId').val("")


      e.preventDefault();

  } );
});
