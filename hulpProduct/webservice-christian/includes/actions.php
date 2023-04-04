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
                "winkels" => ['Albert Heijn Burgemeester van Douwesingel', 'Albert Heijn Lekkenburg', 'Albert Heijn Markt', 'COOP Nieuwe-Marktpassage', 'COOP Vuurdoornlaan', 'Dirk Goverwelle', 'Hoogvliet Plataanstraat', 'Hoogvliet Nieuwe Gouwe', 'JUMBO Ruigenburg', 'JUMBO Sportlaan', 'Lidl Sportlaan', 'Lidl Westerkade', 'Lidl Ruigenburg', 'PLUS van Ee', 'PLUS Koorneef', 'SPAR City']
            ],
            2 => [
                "winkels" => ['unox', 'healthy', 'stamppot', 'boerenkool']
            ],
            3 => [
                "winkels" => ['omnomnom']
            ],
            4 => [
                "winkels" => ['kapsalon', 'tasty', 'meat']
            ],
        ];

        return $tags[$id];
    }
