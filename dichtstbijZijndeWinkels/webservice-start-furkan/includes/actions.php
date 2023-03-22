<?php
/**
 * @return array
 */
function getCitys()
{
    return [
        "state" =>  [
            "Amsterdam",
            "Rotterdam",
            "Den Haag",
            "Utrecht",
            "Groningen"
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCityShops($id)
{
    $tags = [
        "winkels" => [
            "Albert Heijn",
            "Jumbo",
            "Action",
            "Dirk van den Broek",
            "Lidl"
        ]
    ];

    return $tags[$id];
}
