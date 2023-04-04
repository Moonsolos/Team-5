<?php
/** @var $db */
$name   = mysqli_escape_string($db, $_POST['name']);
$phoneNumber = mysqli_escape_string($db, $_POST['phoneNumber']);
$email  = mysqli_escape_string($db, $_POST['email']);
$city = mysqli_escape_string($db, $_POST['city']);
$categoryIds = [];
if (isset($_POST['category_ids'])){
    foreach($_POST['category_ids'] as $categoryId){
        $categoryIds[] = mysqli_escape_string($db, $categoryId);
    }
}

//Check if data is valid & generate error if not so
$errors = [];
if ($name == "") {
    $errors['name'] = 'Vul alstublieft uw naam in';
}

if ($email == "") {
    $errors['email'] = 'Vul alstublieft uw email in';
}

if ($city == "") {
    $errors['city'] = 'Vul alstublieft uw stad in';
}

if (empty($categoryIds)) {
    $errors['categoryIds'] = 'Vul alstublieft een categorie in';
}
