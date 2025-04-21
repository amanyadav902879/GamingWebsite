<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sab fields receive kar rahe hain
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $company = $_POST['company-name'];
    $country = $_POST['country-name'];
    $streetAddress1 = $_POST['street-address1'];
    $streetAddress2 = $_POST['street-address2']; // 2nd line bhi same name hai form mein
    $city = $_POST['town-city'];
    $district = $_POST['district-name'];
    $zip = $_POST['zip-code'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $notes = $_POST['textarea'];
}
?>

<!DOCTYPE html>
<head>
    <title>Form Submitted</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 100px;
            background-color: #f4f4f4;
        }
        .message {
            font-size: 24px;
            color: green;
            padding: 20px;
            background-color: #fff;
            display: inline-block;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            align-items: center;
            height: 300px;

        }
    </style>
</head>
<body>
<div class="message">
        ✅ Your form submitted successfully.
        <br>
        <strong>First Name:</strong> <?php echo $firstName; ?>
        <br>
        <strong>Last Name:</strong> <?php echo $lastName; ?>
        <br>
        <strong>Email:</strong> <?php echo $email; ?>
        <!-- Add more fields to display if needed -->
    </div>
</body>
</html>
