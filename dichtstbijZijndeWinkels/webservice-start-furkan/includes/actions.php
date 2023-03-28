<?php
/**
 * @return array
 */
function getCitys()
{
    return [
        [
            "id" => 1,
            "state" => "Rotterdam",

        ],
        [
            "id" => 2,
            "state" => "Amsterdam",
        ],
        [
            "id" => 3,
            "state" => "Gouda",
        ],
        [
            "id" => 4,
            "state" => "Den haag",
        ],
        [
            "id" => 5,
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
            "winkel" => "Albert Heijn"
        ],
        2 => [
            "winkel" => "Dirk"
        ],
        3 => [
            "winkel" => "Jumbo"
        ],
        4 => [
            "winkel" => "Aldi"
        ],
        5 => [
            "winkel" => "Lidl"
        ],
    ];

    return $tags[$id];
}
