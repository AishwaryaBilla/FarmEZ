$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Camera Capture
    $("#btn-camera").click(function () {
        // Use the mediaDevices API to access the camera
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Get the video stream from the camera
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                // Display the video stream in the video element
                var video = document.getElementById("videoPreview");
                video.srcObject = stream;
                video.play();

                // Show the video and hide the image preview
                $('.image-section').show();
                $('#btn-predict').show();
                $('#result').text('');
                $('#result').hide();
                $('.img-preview').hide();
            });
        }
    });

    // Take Picture
    $("#btn-snapshot").click(function () {
        // Pause the video playback and get the current video frame
        var video = document.getElementById("videoPreview");
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to a data URL and display the image preview
        var imgData = canvas.toDataURL();
        $('#imagePreview').css('background-image', 'url(' + imgData + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);

        // Stop the video playback and hide the video preview
        video.pause();  
        video.srcObject = null;
        $('.img-preview').show();

        // Hide the snapshot and show the upload button
        $('#btn-snapshot').hide();
        $('#btn-upload').show();
    });

    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });
});