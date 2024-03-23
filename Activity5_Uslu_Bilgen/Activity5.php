<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
</head>
<body>
    <h2>Registriation Form</h2>
    <form action="Activity5-preview.php" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name"><br>

        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br>

        <label for="address">Address:</label><br>
        <input type="text" id="address" name="address"><br>

        <label for="country">Country:</label><br>
        <select id="country" name="country">
            <option value="">(Please select a country)</option>
            <option value="Türkiye">Türkiye</option>
            <option value="France">France</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Russia">Russia</option>
        </select><br>

        <label for="zipcode">Zip Code:</label><br>
        <input type="text" id="zipcode" name="zipcode"><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email"><br>

        <label for="sex">Sex:</label>
        <input type="radio" id="male" name="sex" value="Male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="sex" value="Female">
        <label for="female">Female</label><br>
        
        <label for="language">Languages</label>
        <input type="radio" id="lang1" name="language" value="English">
        <label for="eng">English</label>
        <input type="radio" id="lang2" name="language" value="French">
        <label for="fr">French</label>
        <input type="radio" id="lang2" name="language" value="German">
        <label for="fr">German</label><br><br>
        

        <label for="about">About:</label><br>
        <textarea id="about" name="about" rows="4" cols="50"></textarea><br><br>
        <input type="submit" value="Submit">
    </form>
</body>

</html>