<?php

/**
 * @return array
 */
function getShoppingbuddies()
{
    /** @var $db */
    require_once __DIR__ . '/../../includes/connection.php';
    $query = "SELECT shoppingbuddies.id, shoppingbuddies.name, shoppingbuddies.city, categories.name as categorie_name 
            FROM shoppingbuddies 
            LEFT JOIN category_shoppingbuddy ON category_shoppingbuddy.shoppingbuddy_id = shoppingbuddies.id 
            LEFT JOIN categories ON categories.id = category_shoppingbuddy.category_id;";

    $result = mysqli_query($db, $query)
    or die('Error ' . mysqli_error($db) . ' with query ' . $query);

//safe data of selected appointment in array
    $shoppingbuddies = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $shoppingbuddies[] = $row;
    }
// Close the connection
    mysqli_close($db);

    return $shoppingbuddies;
}

/**
 * @param $id
 * @return mixed
 */
function getShoppingbuddiesDetails($id)
{
    /** @var $db */
    require_once __DIR__ . '/../../includes/connection.php';
    $query = "SELECT phone_number, email 
            FROM shoppingbuddies WHERE id = '$id';";

    $result = mysqli_query($db, $query)
    or die('Error ' . mysqli_error($db) . ' with query ' . $query);

//safe data of selected appointment in array
    $shoppingbuddiesDetails = mysqli_fetch_assoc($result);

// Close the connection
    mysqli_close($db);

}
