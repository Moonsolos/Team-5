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
            "winkel" => ['Kies een winkel','Albert Heijn','Dirk','Plus','Jumbo','Aldi','Lidl']
        ],
        2 => [
            "winkel" => ['Kies een winkel','Dirk','Plus','Jumbo','Aldi','Lidl','Albert Heijn']
        ],
        3 => [
            "winkel" => ['Kies een winkel','Jumbo','Aldi','Lidl','Albert Heijn','Dirk','Plus']
        ],
        4 => [
            "winkel" => ['Kies een winkel','Aldi','Lidl','Albert Heijn','Dirk','Plus','Jumbo']
        ],
        5 => [
            "winkel" => ['Kies een winkel','Lidl','Alber Heijn','Plus','Spar','Gall&Gall','De Eekhoorn']
        ],
    ];

    return $tags[$id];
}
