// Problem: hints are shown even when input is valid
// Solution: hide when input is valid
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");
// Hide hints
$("form span").hide();

function isUsernamePresent() {
  if($("#username").val().length > 0) {
    return true;
  } else {
    return false;
  }
}

function isPasswordValid() {
  return $password.val().length > 8
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val()
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent(); 
}

function passwordEvent(){
  // Verify is password is valid
  if(isPasswordValid()) {
    // Hide hint if valid
    $password.next().hide();
  } else {
    // Else show hint
    $(this).next().show();
  }
}

function confirmPasswordEvent() {
  // Find out if password and confirmation match
  if(arePasswordsMatching()) {
    // Hide hint if match
    $confirmPassword.next().hide();
  } else {
    // Else show hint
    $confirmPassword.next().show();
  }    
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

function usernameEvent() {
  if(isUsernamePresent()) {
    $username.next().hide();
  } else {
    $username.next().show();
  } 
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
// When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

enableSubmitEvent();