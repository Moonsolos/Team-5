<?php

/**
 * @return array
 */
function getShoppingbuddies()
{
    /** @var $db */
    require_once __DIR__ . '/../../includes/connection.php';
    $query = "SELECT shoppingbuddies.id, shoppingbuddies.name, shoppingbuddies.city, categories.name as category_name 
            FROM shoppingbuddies 
            LEFT JOIN category_shoppingbuddy ON category_shoppingbuddy.shoppingbuddy_id = shoppingbuddies.id 
            LEFT JOIN categories ON categories.id = category_shoppingbuddy.category_id;";

    $result = mysqli_query($db, $query)
    or die('Error ' . mysqli_error($db) . ' with query ' . $query);

//safe data of selected shoppingbuddies in array
    $shoppingbuddies = [];

    while ($row = mysqli_fetch_assoc($result)) {
        if (!isset($shoppingbuddies[$row['id']])) {
            $shoppingbuddies[$row['id']] = $row;
            unset($shoppingbuddies[$row['id']]['category_name']);
        }
        $shoppingbuddies[$row['id']]['categories'][] = $row['category_name'];
    }


// Close the connection
    mysqli_close($db);

    return array_values($shoppingbuddies);
}

/**
 * @param $city
 * @return mixed
 */

function getShoppingbuddiesCity($city)
{
    /** @var $db */
    require_once __DIR__ . '/../../includes/connection.php';
    $query = "SELECT shoppingbuddies.id, shoppingbuddies.name, shoppingbuddies.city, categories.name as category_name 
            FROM shoppingbuddies 
            LEFT JOIN category_shoppingbuddy ON category_shoppingbuddy.shoppingbuddy_id = shoppingbuddies.id 
            LEFT JOIN categories ON categories.id = category_shoppingbuddy.category_id WHERE shoppingbuddies.city = '$city';";

    $result = mysqli_query($db, $query)
    or die('Error ' . mysqli_error($db) . ' with query ' . $query);

//safe data of selected shoppingbuddies in array
    $shoppingbuddiesCity = [];

    while ($row = mysqli_fetch_assoc($result)) {
        if (!isset($shoppingbuddiesCity[$row['id']])) {
            $shoppingbuddiesCity[$row['id']] = $row;
            unset($shoppingbuddiesCity[$row['id']]['category_name']);
        }
        $shoppingbuddiesCity[$row['id']]['categories'][] = $row['category_name'];
    }

// Close the connection
    mysqli_close($db);

    return array_values($shoppingbuddiesCity);
}

/**
 * @param $id
 * @return mixed
 */

function getShoppingbuddiesDetails($id)
{
    /** @var $db */
    require_once __DIR__ . '/../../includes/connection.php';
    $query = "SELECT name, phone_number, email 
            FROM shoppingbuddies WHERE id = '$id';";

    $result = mysqli_query($db, $query)
    or die('Error ' . mysqli_error($db) . ' with query ' . $query);

//safe data of selected appointment in array
    $shoppingbuddiesDetails = mysqli_fetch_assoc($result);


// Close the connection
    mysqli_close($db);

    return $shoppingbuddiesDetails;
}
