<?php
/** @var mysqli $db */
/** @var $name */
/** @var $city */
/** @var $phoneNumber */
/** @var $email */
/** @var $categoryIds */

//Require database in this file
require_once "includes/connection.php";

//Check if Post isset, else do nothing
if (isset($_POST['submit'])) {

    //require form validation
    require_once 'includes/form_validation.php';

    //if everything is filled in correctly by the user
    if (empty($errors)) {

        //save filled in data in the database
        $query = "INSERT INTO `shoppingbuddies` (name, city, email, phone_number)
                  VALUES ('$name', '$city', '$email', '$phoneNumber')";
        $result = mysqli_query($db, $query) or die('Error: ' . mysqli_error($db) . ' with query ' . $query);

        $shoppingbuddyId= mysqli_insert_id($db);

        foreach($categoryIds as $categoryId) {
            $query = "INSERT INTO category_shoppingbuddy (shoppingbuddy_id, category_id)
                  VALUES ('$shoppingbuddyId', '$categoryId')";
            $result = mysqli_query($db, $query) or die('Error: ' . mysqli_error($db) . ' with query ' . $query);
        }

        //Close connection with the database
        mysqli_close($db);

        // Redirect
        header('Location: start.html');
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Winkelende senioren</title>
    <link rel="stylesheet" href="../css/winkelmaatje.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<header>
    <a href="../winkelmaatje/start.html">terug</a>
</header>

<main>
    <div class="background-page-title">
        <h1 class="page-title">Ik wil me opgeven als winkelmaatje</h1>
    </div>
    <section class="main-section">
        <form action="" method="post" enctype="multipart/form-data">
            <label class="label" for="name">Naam*</label>
            <input class="input" id="name" type="text" name="name"
                   value="<?= isset($name) ? htmlentities($name) : '' ?>"/>
            <p class="error">
                <?= $errors['name'] ?? '' ?>
            </p>

            <label class="label" for="email">Email*</label>
            <input class="input" id="email" type="text" name="email"
                   value="<?= isset($email) ? htmlentities($email) : '' ?>"/>
            <p class="error">
                <?= $errors['email'] ?? '' ?>
            </p>

            <label class="label" for="phoneNumber">Telefoonnummer</label>
            <input class="input" id="phoneNumber" type="text" name="phoneNumber"
                   value="<?= isset($phoneNumber) ? htmlentities($phoneNumber) : '' ?>"/>
            <p class="error">
                <?= $errors['phoneNumber'] ?? '' ?>
            </p>

            <label class="label" for="city">Woonplaats*</label>
            <input class="input" id="city" type="text" name="city"
                   value="<?= isset($city) ? htmlentities($city) : '' ?>"/>
            <p class="error">
                <?= $errors['city'] ?? '' ?>
            </p>

            <label>Categorie winkel(s):</label><br>
            <input type="checkbox" name="category_ids[]" value="1" />Supermarkt
            <input type="checkbox" name="category_ids[]" value="2" />Kledingwinkels
            <input type="checkbox" name="category_ids[]" value="3" />Overig

            <p class="error">
                <?= $errors['categoryShop'] ?? '' ?>
            </p>

            <button class="submit" type="submit" name="submit">Geef me op</button>
        </form>
    </section>
</main>

</body>
</html>