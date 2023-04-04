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
            "id" => 1,
            "cijfer" => 8,
            "text" => "Bol.com is de grootste online winkel van Nederland en België. Bij bol.com kun je terecht voor alles wat je nodig hebt, van boeken en muziek tot elektronica en kleding. Of je nu op zoek bent naar de nieuwste bestseller, een mooi cadeau voor een vriend of familielid, of gewoon iets leuks voor jezelf, bij bol.com vind je het allemaal.",
        ],
        2 => [
            "id" => 2,
            "cijfer" => 7,
            "text" => "Met de Albert Heijn webshop hoef je de deur niet meer uit voor je dagelijkse boodschappen. Bestel gemakkelijk en snel online en laat je boodschappen thuisbezorgen of haal ze op bij een pick-up point bij jou in de buurt. Ontdek het ruime assortiment en profiteer van de beste aanbiedingen en service.",
        ],
        3 => [
            "id" => 3,
            "cijfer" => 7,
            "text" => "Bij de Hema webshop vind je alles wat je nodig hebt voor een leuk en gemakkelijk leven. Of je nu op zoek bent naar kleding, woonaccessoires, schoolspullen, of iets lekkers voor bij de koffie, bij Hema vind je het allemaal. Bestel nu gemakkelijk online en profiteer van de beste deals en snelle levering.",
        ],
        4 => [
            "id" => 4,
            "cijfer" => 8,
            "text" => "Bij About You vind je de nieuwste fashion trends en de beste deals van de grootste merken. Of je nu op zoek bent naar casual kleding, feestelijke outfits of sportieve looks, bij About You ben je aan het juiste adres. Shop nu gemakkelijk online en ontdek een wereld van fashion en stijl.",
        ],
        5 => [
            "id" => 5,
            "cijfer" => 8,
            "text" => "Bij de A.Vogel webshop vind je een breed assortiment aan natuurlijke gezondheidsproducten, waaronder kruidenpreparaten, homeopathische geneesmiddelen en voedingssupplementen. A.Vogel biedt oplossingen voor uiteenlopende gezondheidsklachten en streeft naar een gezonde en duurzame levensstijl. Bestel nu gemakkelijk online en profiteer van de hoogwaardige kwaliteit en expertise van A.Vogel.",
        ],
        6 => [
            "id" => 6,
            "cijfer" => 4,
            "text" => "Bij de Action webshop vind je de leukste en handigste producten voor de laagste prijzen. Of je nu op zoek bent naar huishoudelijke artikelen, speelgoed, kleding, of decoratie, bij Action vind je het allemaal. Bestel nu gemakkelijk online en profiteer van de scherpe prijzen en snelle levering.",
        ],
        7 => [
            "id" => 7,
            "cijfer" => 4,
            "text" => "Amazon is de grootste online retailer ter wereld en biedt een ongekend assortiment aan producten, van elektronica en boeken tot kleding en meubels. Met Amazon Prime profiteer je van snelle levering, exclusieve kortingen en gratis verzending. Ontdek het gemak van online winkelen bij Amazon en vind alles wat je nodig hebt, snel en eenvoudig.",
        ],
        8 => [
            "id" => 8,
            "cijfer" => 6,
            "text" => "Zalando is dé online fashion retailer waar je alles vindt op het gebied van kleding, schoenen en accessoires. Met een uitgebreid aanbod van meer dan 3000 merken vind je bij Zalando altijd de nieuwste trends en stijlen. Bestel nu gemakkelijk online en profiteer van snelle levering, gratis verzending en gratis retourneren.",
        ],
        9 => [
            "id" => 9,
            "cijfer" => 5,
            "text" => "Bij de Zeeman webshop vind je betaalbare en duurzame kleding voor het hele gezin. Van basics tot trendy items, bij Zeeman vind je het allemaal. Bestel nu gemakkelijk online en profiteer van de hoge kwaliteit en lage prijzen die Zeeman te bieden heeft. Zo bespaar je geld én draag je bij aan een duurzame wereld.",
        ],
        10 => [
            "id" => 10,
            "cijfer" => 3,
            "text" => "Bij de Gall&Gall webshop vind je een uitgebreid assortiment aan wijn, bier en sterke drank. Of je nu op zoek bent naar een goede fles wijn voor bij het eten, speciaalbier voor in het weekend of een mooie fles whisky om cadeau te geven, bij Gall&Gall vind je het allemaal. Bestel nu gemakkelijk online en laat het thuisbezorgen.",
        ]
    ];

    return $tags[$id];
}
