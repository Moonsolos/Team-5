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
                "title" => 'Albert Heijn',
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 51.92083806608491, "longitude" => 4.486908626984608],
            ],

            2 => ["winkel" => ['Kies een winkel', 'Dirk', 'Plus', 'Jumbo', 'Aldi', 'Lidl', 'Albert Heijn'],
                "id" => 2,
                "title" => 'Action',
                "image" => 'img-dichtbij-winkelen/action-logo.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 52.366570212885314, "longitude" => 4.866287655056095],

            ],
            3 => ["winkel" => ['Kies een winkel', 'Jumbo', 'Aldi', 'Lidl', 'Albert Heijn', 'Dirk', 'Plus'],
                "id" => 3,
                "title" => 'Hema',
                "image" => 'img-dichtbij-winkelen/hema-logo.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 52.01449344685689, "longitude" =>4.710258015545088],
            ],
            4 => ["winkel" => ['Kies een winkel', 'Aldi', 'Lidl', 'Albert Heijn', 'Dirk', 'Plus', 'Jumbo'],
                "id" => 4,
                "title" => 'Albert Heijn',
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 52.080329, "longitude" => 4.30965],
            ],
            5 => ["winkel" => ['Kies een winkel', 'Lidl', 'Alber Heijn', 'Plus', 'Spar', 'Gall&Gall', 'De Eekhoorn'],
                "id" => 5,
                "title" => 'Albert Heijn',
                "image" => 'img-dichtbij-winkelen/Albert_Heijn_logo.svg.png',
                "info" => 'De winkel is 1km verder op! ',
                "location" => ["latitude" => 51.94818900, "longitude" => 4.85392100],
            ],
        ];

    return $tags[$id];
}
