<?php
/**
 * @return array
 */
function getCitys()
{
    return [
        [
            "id" => 1,
            "state" => "Amsterdam"
        ],
        [   "id" => 2,
            "state" => "Rotterdam"
        ],
        [   "id" => 3,
            "state" => "Den Haag"
        ],
        [   "id" => 4,
            "state" => "Gouda"
        ],
        [   "id" => 5,
            "state" => "Schoonhoven",
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
        1 => [
            "shops" => ['Albert Heijn', 'Aldi','Dirk','lidl','Jumbo']
        ],
        2 => [
            "shops" => ['Albert Heijn', 'Aldi','Dirk','lidl','Jumbo']
        ],
        3 => [
            "shops" => ['Albert Heijn', 'Aldi','Dirk','lidl','Jumbo']
        ],
        4 => [
            "shops" => ['Albert Heijn', 'Aldi','Dirk','lidl','Jumbo']
        ],
        5 => [
            "shops" => ['Albert Heijn', 'Aldi','Dirk','lidl','Jumbo']
        ],
    ];

    return $tags[$id];
}
