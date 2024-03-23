<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
</head>
<body style="ml-3">
<h2>Preview</h2>

<?php
    if (!empty($_POST['name'])) {
        echo $_POST['name'] . "<br>";
    } else {   
        echo "Name: not provided<br>";
    }

    if (!empty($_POST['username'])) {
        echo $_POST['username'] . "<br>";
    } else {   
        echo "Username: not provided<br>";
    }

    if (!empty($_POST['password'])) {
        echo $_POST['password'] . "<br>";
    } else {   
        echo "Password: not provided<br>";
    }

    if (!empty($_POST['address'])) {
        echo $_POST['address'] . "<br>";
    } else {   
        echo "Address: not provided<br>";
    }

    if (!empty($_POST['country'])) {
        echo $_POST['country'] . "<br>";
    } else {   
        echo "Country not provided<br>";
    }

    if (!empty($_POST['zipcode'])) {
        echo $_POST['zipcode'] . "<br>";
    } else {   
        echo "Zip Code not provided<br>";
    }

    if (!empty($_POST['email'])) {
        echo $_POST['email'] . "<br>";
    } else {   
        echo "Email not provided<br>";
    }

    if (!empty($_POST['sex'])) {
        echo $_POST['sex'] . "<br>";
    } else {   
        echo "Sex not provided<br>";
    }

    if (!empty($_POST['language'])) {
        echo $_POST['language'] . "<br>";
    } else {   
        echo "Language not provided<br>";
    }

    if (!empty($_POST['about'])) {
        echo $_POST['about'] . "<br>";
    } else {   
        echo "About: not provided<br>";
    }
?>
</body>
</html>
