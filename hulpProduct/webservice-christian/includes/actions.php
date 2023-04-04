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
                "winkels" => ['Albert Heijn Markt', 'COOP Nieuwe-Marktpassage',],
//                    'JUMBO Ruigenburg', 'JUMBO Sportlaan', 'Lidl Sportlaan', 'Lidl Westerkade', 'Lidl Ruigenburg', 'PLUS van Ee', 'PLUS Koorneef', 'SPAR City'
                "image" => ['../img/citySelectBox.png', 'test',]
            ],
            2 => [
                "winkels" => ['Albert Heijn Burgemeester van Douwesingel', 'Albert Heijn Lekkenburg',],
                "image" => ['test', 'test',]
            ],
            3 => [
                "winkels" => ['COOP Vuurdoornlaan', 'Dirk Goverwelle',],
                "image" => ['test', 'test',]
            ],
            4 => [
                "winkels" => ['Hoogvliet Plataanstraat', 'Hoogvliet Nieuwe Gouwe',],
                "image" => ['test', 'test',]
            ],
        ];

        return $tags[$id];
    }
