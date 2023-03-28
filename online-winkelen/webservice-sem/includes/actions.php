<?php
/**
 * @return array
 */
function getOnlineShops()
{
    return [
        [
            "id" => 1,
            "name" => "Bol.com",
            "img" => "../img/bolcom.png",
        ],
        [
            "id" => 2,
            "name" => "Albert Heijn",
            "img" => "img-online-winkelen/Albert_Heijn_Logo.svg.png",
        ],
        [
            "id" => 3,
            "name" => "Hema",
            "img" => "img-online-winkelen/hema-logo.png",
        ],
        [
            "id" => 4,
            "name" => "About You",
            "img" => "img-online-winkelen/about-you-logo.png",
        ],
        [
            "id" => 5,
            "name" => "A.Vogel",
            "img" => "img-online-winkelen/avogel-logo.png",
        ],
        [
            "id" => 6,
            "name" => "Action",
            "img" => "img-online-winkelen/action-logo.png",
        ],
        [
            "id" => 7,
            "name" => "Amazon",
            "img" => "img-online-winkelen/amazon-logo.png",
        ],
        [
            "id" => 8,
            "name" => "Zalando",
            "img" => "img-online-winkelen/zalando-logo.png",
        ],
        [
            "id" => 9,
            "name" => "Zeeman",
            "img" => "img-online-winkelen/zeeman-logo.jpg",
        ],
        [
            "id" => 10,
            "name" => "Gall & Gall",
            "img" => "img-online-winkelen/gall&gall-logo.jpg",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getOnlineShopsDetails($id)
{
    $tags = [
        1 => [
            "cijfer" => 8,
        ],
        2 => [
            "cijfer" => 7,
        ],
        3 => [
            "cijfer" => 7,
        ],
        4 => [
            "cijfer" => 8,
        ],
        5 => [
            "cijfer" => 8,
        ],
        6 => [
            "cijfer" => 4,
        ],
        7 => [
            "cijfer" => 4,
        ],
        8 => [
            "cijfer" => 6,
        ],
        9 => [
            "cijfer" => 5,
        ],
        10 => [
            "cijfer" => 3,
        ]
    ];

    return $tags[$id];
}
