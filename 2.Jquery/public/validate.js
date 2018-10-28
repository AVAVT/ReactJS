$("#register-form").on('submit', async (event) => {
  if ($("#register-form").hasClass('is-valid')) return;

  event.preventDefault();

  $("#register-form button").attr("disabled", "true");
  var results = [];
  results.push(await validateUsername($("#username").val()));
  results.push(validateFirstName($("#first-name").val()));
  results.push(validateLastName($("#last-name").val()));

  var isValid = true;
  for (var result of results) {
    if (result.error) {
      $(`#${result.id}`).addClass("is-invalid");
      $(`#${result.id}`).removeClass("is-valid");
      $(`#${result.id}-invalid`).html(result.error);
      isValid = false;
    }
    else {
      $(`#${result.id}`).removeClass("is-invalid");
      $(`#${result.id}`).addClass("is-valid");
    }
  }

  $("#register-form button").removeAttr("disabled");

  if (isValid) {
    $("#register-form").addClass('is-valid');
    $("#register-form").submit();
  }
});

const validateUsername = (username) => new Promise((resolve, reject) => {
  if (username.trim() == "") resolve({
    id: "username",
    error: "Please fill this field."
  });
  else {
    $.ajax({
      method: "post",
      url: "/checkUsernameAvailability",
      data: { username }
    })
      .then((result) => {
        if (result == 'true') resolve({ id: "username" })
        else resolve({
          id: "username",
          error: "This username is already used."
        })
      })
      .catch((err) => {
        console.error(err);
        resolve({ id: "username" })
      });
  }
});

const validateFirstName = (firstname) => {
  if (firstname.trim() == "") return {
    id: "first-name",
    error: "Please fill this field."
  };
  else return {
    id: "first-name"
  };
}

const validateLastName = (lastname) => {
  if (lastname.trim() == "") return {
    id: "last-name",
    error: "Please fill this field."
  };
  else return {
    id: "last-name"
  };
}