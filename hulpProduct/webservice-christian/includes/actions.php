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
                "winkels" => ['cheese', 'oven']
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
            5 => [
                "winkels" => ['fish']
            ],
        ];

        return $tags[$id];
    }
