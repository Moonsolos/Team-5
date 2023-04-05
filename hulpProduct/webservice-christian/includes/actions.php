<?php
/**
 * @return array
 */
function getCitys()
{
    return [
        [
            "id" => 1,
            "name" => "Gouda",
        ],
        [
            "id" => 2,
            "name" => "Rotterdam",
        ],
        [
            "id" => 3,
            "name" => "Utrecht",
        ],
        [
            "id" => 4,
            "name" => "Amsterdam",
        ],
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
                "id" => 1,
                "winkels" => ['Albert Heijn Markt', 'COOP Nieuwe-Marktpassage',],
//                    'JUMBO Ruigenburg', 'JUMBO Sportlaan', 'Lidl Sportlaan', 'Lidl Westerkade', 'Lidl Ruigenburg', 'PLUS van Ee', 'PLUS Koorneef', 'SPAR City'
                "image" => ['../hulpProduct/img/map1.png', '../hulpProduct/img/map2.png',]
            ],
            2 => [
                "id" => 2,
                "winkels" => ['Albert Heijn Burgemeester van Douwesingel', 'Albert Heijn Lekkenburg',],
                "image" => ['../hulpProduct/img/map3.png', '../hulpProduct/img/map4.png',]
            ],
            3 => [
                "id" => 3,
                "winkels" => ['COOP Vuurdoornlaan', 'Dirk Goverwelle',],
                "image" => ['../hulpProduct/img/map5.png', '../hulpProduct/img/map6.png',]
            ],
            4 => [
                "id" => 4,
                "winkels" => ['Hoogvliet Plataanstraat', 'Hoogvliet Nieuwe Gouwe',],
                "image" => ['../hulpProduct/img/map7.png', '../hulpProduct/img/map8.png',]
            ],
        ];

        return $tags[$id];
    }
