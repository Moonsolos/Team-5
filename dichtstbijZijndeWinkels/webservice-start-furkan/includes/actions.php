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
//jh
/**
 * @param $id
 * @return mixed
 */
function getCityShops($id)
{
    $tags =
        [
            1 => ["winkel" => ['Kies een winkel', 'Albert Heijn', 'Dirk', 'Plus', 'Jumbo', 'Aldi', 'Lidl'],
                "id" => 1,
                "title" =>'Albert Heijn',
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 51.926517, "longitude" => 4.462456],
                ],

            2 => ["winkel" => ['Kies een winkel', 'Dirk', 'Plus', 'Jumbo', 'Aldi', 'Lidl', 'Albert Heijn'],
                "location" => ["latitude" => 52.370241, "longitude" => 4.897300],
                "id" => 2,
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',

            ],
            3 => ["winkel" => ['Kies een winkel', 'Jumbo', 'Aldi', 'Lidl', 'Albert Heijn', 'Dirk', 'Plus'],
                "location" => ["latitude" => 52.011112, "longitude" => 4.711111],
                "id" => 3,
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
            ],
            4 => ["winkel" => ['Kies een winkel', 'Aldi', 'Lidl', 'Albert Heijn', 'Dirk', 'Plus', 'Jumbo'],
                "location" => ["latitude" => 52.080329, "longitude" => 4.30965],
                "id" => 4,
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
            ],
            5 => ["winkel" => ['Kies een winkel', 'Lidl', 'Alber Heijn', 'Plus', 'Spar', 'Gall&Gall', 'De Eekhoorn'],
                "location" => ["latitude" => 51.94818900, "longitude" => 4.85392100],
                "id" => 5,
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
            ],
        ];

    return $tags[$id];
}
