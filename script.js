$(document).ready(function(){
    $('#accForm').submit(function(event){
        event.preventDefault()
        let isValid = true
        
        let name = $('#name').val()
        if (name.length < 3 || name.length > 50) {
            $('#nameError').text('Name must be between 3 and 50 characters.')
            isValid = false
        }
        
        let email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!email) {
          $('#emailError').text('Email is required.')
          isValid = false
        } else if (!emailRegex.test(email)) {
          $('#emailError').text('Enter a valid email.')
          isValid = false
        }
        
        let phone = $('#phone').val()
        if (phone.length < 10 || phone.length > 14) {
            $('#phoneError').text('Phone number must be between 10 and 14 digits.')
            isValid = false
        }
        
        let age = $('#age').val()
        if (age < 18 || age > 120) {
            $('#ageError').text('Age must be between 18 and 120.')
            isValid = false
        }
        
        let gender = $('#gender').val()
        if (gender.length < 4 || gender.length > 15) {
            $('#genderError').text('Gender must be between 4 and 15 characters.')
            isValid = false
        }
        
        let address = $('#address').val();
        if (address.length > 50) {
            $('#addressError').text('Address must be under 50 characters.')
            isValid = false
        }

        if (isValid) {
            alert('Form submitted successfully!')
        }    

    })
})