const myLookupObjects = {
    "Jamaican Creole": 601,
    "Krio": 602,
    "Hawaiian Pidgin": 603,
    "Pidgin": 604,
    "Gullah": 605,
    "Saramacca": 606,
    "German": 607,
    "Pennsylvania Dutch": 608,
    "Yiddish": 609,
    "Dutch": 610,
    "Afrikaans": 611,
    "Frisian": 612,
    "Luxembourgian": 613,
    "Swedish": 614,
    "Danish": 615,
    "Norwegian": 616,
    "Icelandic": 617,
    "Faroese": 618,
    "Italian": 619,
    "French": 620,
    "Provencal": 621,
    "Patois": 622,
    "French Creole": 623,
    "Cajun": 624,
    "Spanish": 625,
    "Catalonian": 626,
    "Ladino": 627,
    "Pachuco": 628,
    "Portuguese": 629,
    "Papia Mentae": 630,
    "Romanian": 631,
    "Rhaeto-romanic": 632,
    "Welsh": 633,
    "Breton": 634,
    "Irish Gaelic": 635,
    "Scottic Gaelic": 636,
    "Greek": 637,
    "Albanian": 638,
    "Russian": 639,
    "Bielorussian": 640,
    "Ukrainian": 641,
    "Czech": 642,
    "Kashubian": 643,
    "Lusatian": 644,
    "Polish": 645,
    "Slovak": 646,
    "Bulgarian": 647,
    "Macedonian": 648,
    "Serbocroatian": 649,
    "Croatian": 650,
    "Serbian": 651,
    "Slovene": 652,
    "Lithuanian": 653,
    "Lettish": 654,
    "Armenian": 655,
    "Persian": 656,
    "Pashto": 657,
    "Kurdish": 658,
    "Balochi": 659,
    "Tadzhik": 660,
    "Ossete": 661,
    "India n.e.c.": 662,
    "Hindi": 663,
    "Bengali": 664,
    "Panjabi": 665,
    "Marathi": 666,
    "Gujarathi": 667,
    "Bihari": 668,
    "Rajasthani": 669,
    "Oriya": 670,
    "Urdu": 671,
    "Assamese": 672,
    "Kashmiri": 673,
    "Nepali": 674,
    "Sindhi": 675,
    "Pakistan n.e.c.": 676,
    "Sinhalese": 677,
    "Romany": 678,
    "Finnish (OTHER)": 679,
    "Estonian (OTHER)": 680,
    "Lapp (OTHER)": 681,
    "Hungarian (OTHER)": 682,
    "Other Uralic Lang. (OTHER)": 683,
    "Chuvash": 684,
    "Karakalpak": 685,
    "Kazakh": 686,
    "Kirghiz": 687,
    "Karachay": 688,
    "Uighur": 689,
    "Azerabaijani": 690,
    "Turkish": 691,
    "Turkmen": 692,
    "Yakut": 693,
    "Mongolian": 694,
    "Tungus": 695,
    "Caucasian (OTHER)": 696,
    "Basque (OTHER)": 697,
    "Dravidian": 698,
    "Brahui": 699,
    "Gondi": 700,
    "Telugu": 701,
    "Kannada": 702,
    "Malayalam": 703,
    "Tamil": 704,
    "Kurukh": 705,
    "Munda": 706,
    "Burushaski": 707,
    "Chinese": 708,
    "Hakka": 709,
    "Kan, Hsiang": 710,
    "Cantonese": 711,
    "Mandarin": 712,
    "Fuchow": 713,
    "Formosan": 714,
    "Wu": 715,
    "Tibetan": 716,
    "Burmese": 717,
    "Karen": 718,
    "Kachin": 719,
    "Thai": 720,
    "Miao-yao, Mien": 721,
    "Miao, Hmong": 722,
    "Japanese": 723,
    "Korean": 724,
    "Laotian": 725,
    "Mon-Khmer, Cambodian": 726,
    "Paleo-siberian (also Siberian languages n.e.c)": 727,
    "Vietnamese": 728,
    "Muong": 729,
    "Buginese": 730,
    "Moluccan": 731,
    "Indonesian": 732,
    "Achinese": 733,
    "Balinese": 734,
    "Cham": 735,
    "Javanese": 736,
    "Madurese": 737,
    "Malagasy": 738,
    "Malay": 739,
    "Minangkabau": 740,
    "Sundanese": 741,
    "Tagalog": 742,
    "Bisayan": 743,
    "Sebuano": 744,
    "Pangasinan": 745,
    "Ilocano": 746,
    "Bikol": 747,
    "Pampangan": 748,
    "Gorontalo": 749,
    "Micronesian": 750,
    "Carolinian": 751,
    "Chamorro (NW Austronesian)": 752,
    "Gilbertese": 753,
    "Kusaiean": 754,
    "Marshallese": 755,
    "Mokilese": 756,
    "Mortlockese": 757,
    "Nauruan": 758,
    "Palau (NW Austronesian)": 759,
    "Ponapean": 760,
    "Trukese": 761,
    "Ulithean": 762,
    "Woleai-ulithi": 763,
    "Yapese": 764,
    "Melanesian (also Iindo-Pacific, n.e.c.)": 765,
    "Polynesian": 766,
    "Samoan": 767,
    "Tongan": 768,
    "Niuean": 769,
    "Tokelauan": 770,
    "Fijian": 771,
    "Marquesan": 772,
    "Rarotongan": 773,
    "Maori": 774,
    "Nukuoro": 775,
    "Hawaiian": 776,
    "Arabic": 777,
    "Hebrew": 778,
    "Syriac": 779,
    "Amharic": 780,
    "Berber": 781,
    "Chadic": 782,
    "Cushite": 783,
    "Sudanic": 784,
    "Nilotic": 785,
    "Nilo-hamitic": 786,
    "Nubian": 787,
    "Saharan": 788,
    "Nilo-sharan": 789,
    "Khoisan": 790,
    "Swahili": 791,
    "Bantu": 792,
    "Mande": 793,
    "Fulani": 794,
    "Gur": 795,
    "Kru, Ibo, Yoruba": 796,
    "Efik": 797,
    "Mbum (and Related)": 798,
    "African (not further specified)": 799,
    "Aleut": 800,
    "Pacific Gulf Yupik": 801,
    "Eskimo": 802,
    "Inupik": 803,
    "St Lawrence Is Yupik": 804,
    "Yupik": 805,
    "Algonquian": 806,
    "Arapaho": 807,
    "Atsina": 808,
    "Blackfoot": 809,
    "Cheyenne": 810,
    "Cree": 811,
    "Delaware": 812,
    "Fox": 813,
    "Kickapoo": 814,
    "Menomini": 815,
    "French Cree": 816,
    "Miami": 817,
    "Micmac": 818,
    "Ojibwa": 819,
    "Ottawa": 820,
    "Passamaquoddy": 821,
    "Penobscot": 822,
    "Abnaki": 823,
    "Potawatomi": 824,
    "Shawnee": 825,
    "Wiyot": 826,
    "Yurok": 827,
    "Kutenai": 828,
    "Makah": 829,
    "Kwakiutl": 830,
    "Nootka": 831,
    "Lower Chehalis": 833,
    "Upper Chehalis": 834,
    "Clallam": 835,
    "Coeur D'alene": 836,
    "Columbia": 837,
    "Cowlitz": 838,
    "Salish": 839,
    "Nootsack": 840,
    "Okanogan": 841,
    "Puget Sound Salish": 842,
    "Quinault": 843,
    "Tillamook": 844,
    "Twana": 845,
    "Haida": 846,
    "Athapascan": 847,
    "Ahtena": 848,
    "Han": 849,
    "Ingalit": 850,
    "Koyukon": 851,
    "Kuchin": 852,
    "Upper Kuskokwim": 853,
    "Tanaina": 854,
    "Tanana": 855,
    "Tanacross": 856,
    "Upper Tanana": 857,
    "Tutchone": 858,
    "Chasta Costa": 859,
    "Hupa": 860,
    "Other Athapascan-eyak": 861,
    "Apache": 862,
    "Kiowa (Tanoan)": 863,
    "Navaho": 864,
    "Eyak": 865,
    "Tlingit": 866,
    "Mountain Maidu": 867,
    "Northwest Maidu": 868,
    "Southern Maidu": 869,
    "Coast Miwok": 870,
    "Plains Miwok": 871,
    "Sierra Miwok": 872,
    "Nomlaki": 873,
    "Patwin": 874,
    "Wintun": 875,
    "Foothill No. Yokuts": 876,
    "Tachi": 877,
    "Santiam": 878,
    "Siuslaw": 879,
    "Klamath": 880,
    "Nez Perce": 881,
    "Sahaptian": 882,
    "Upper Chinook": 883,
    "Tsimshian": 884,
    "Achumawi": 885,
    "Atsugewi": 886,
    "Karok": 887,
    "Pomo": 888,
    "Shastan": 889,
    "Washo": 890,
    "up River Yuman": 891,
    "Cocomaricopa": 892,
    "Mohave": 893,
    "Yuma": 894,
    "Diegueno": 895,
    "Delta River Yuman": 896,
    "Upland Yuman": 897,
    "Havasupai": 898,
    "Walapai": 899,
    "Yavapai": 900,
    "Chumash": 901,
    "Tonkawa": 902,
    "Yuchi": 903,
    "Crow": 904,
    "Hidatsa": 905,
    "Mandan": 906,
    "Dakota": 907,
    "Chiwere": 908,
    "Winnebago": 909,
    "Kansa": 910,
    "Omaha": 911,
    "Osage": 912,
    "Ponca": 913,
    "Quapaw": 914,
    "Alabama": 915,
    "Choctaw": 916,
    "Mikasuki": 917,
    "Hichita": 918,
    "Koasati": 919,
    "Muskogee": 920,
    "Chetemacha": 921,
    "Yuki": 922,
    "Wappo": 923,
    "Keres": 924,
    "Iroquois": 925,
    "Mohawk": 926,
    "Oneida": 927,
    "Onondaga": 928,
    "Cayuga": 929,
    "Seneca": 930,
    "Tuscarora": 931,
    "Wyandot": 932,
    "Cherokee": 933,
    "Arikara": 934,
    "Caddo": 935,
    "Pawnee": 936,
    "Wichita": 937,
    "Comanche": 938,
    "Mono": 939,
    "Paiute": 940,
    "Northern Paiute": 941,
    "Southern Paiute": 942,
    "Chemehuevi": 943,
    "Kawaiisu": 944,
    "Ute": 945,
    "Shoshoni": 946,
    "Panamint": 947,
    "Hopi": 948,
    "Cahuilla": 949,
    "Cupeno": 950,
    "Luiseno": 951,
    "Serrano": 952,
    "Tubatulabal": 953,
    "Pima": 954,
    "Yaqui": 955,
    "Aztecan(Cent/South America)": 956,
    "Sonoran, nec(Cent/So America)": 957,
    "Indian (Not on the edited file)": 958,
    "Picuris": 959,
    "Tiwa": 960,
    "Sandia": 961,
    "Tewa": 962,
    "Towa": 963,
    "Zuni (Penutian)": 964,
    "Chinook Jargon (Penutian)": 965,
    "American Indian": 966,
    "Misumalpan": 967,
    "Mayan Languages": 968,
    "Tarascan (Penutian)": 969,
    "Mapuche": 970,
    "Oto - Manguen": 971,
    "Quechua": 972,
    "Aymara": 973,
    "Arawakian": 974,
    "Chibchan": 975,
    "Tupi-guarani": 976,
    "Jicarilla (Athapascan-Eyak)": 977,
    "Chiricahua (Athapascan-Eyak)": 978,
    "San Carlos (Athapascan-Eyak)": 979,
    "Kiowa-apache (Athapascan-Eyak)": 980,
    "Kalispel (Salish)": 981,
    "Spokane (Salish)": 982,
    "Not used (Not on the edited file)": 994,
    "English (Not on the edited file)": 995,
    "Uncodable (Not on the edited file)": 996,
    "Not used (Not on the edited file) 2": 997,
    "Not used (On the edited file only)": 997,
    "Specified Not Listed": 998,
    "Not Specified": 999,
};

let globalI = 0;
let markerCluster;
let uluru = {
    lat: 34.0489,
    lng: -111.0937
};
let map;
let popupWindow = null;
let markerlocCounter = 0;

initMap = function () {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: uluru
    });

    markerCluster = new MarkerClusterer(map, [], {
        imagePath: './m'
    });

    const queryTarget = $('.js-query');
    queryTarget.val()
    $(watchSubmit);
}

function watchSubmit() {
    $('.js-search-form').submit(event => {
        event.preventDefault();
        RemoveAllMarkers();
        globalI = 0;
        markerlocCounter = 0;
        $('progress').removeAttr('value');
        $('progress').removeClass('hidden');
        $('#errorMessage').text('');
        const queryTarget = $(event.currentTarget).find('.js-query');
        const query = queryTarget.val();
        if  (! Object.keys(myLookupObjects).includes(query)) {
            $('#errorMessage').text('Your input is invalid, please select an option from the dropdown.')
        }
        getDataFromApi(query, geoCode);
    });

}   

function getDataFromApi(searchTerm, callback) {
    let langCode = myLookupObjects[searchTerm]
    let urlString = `https://api.census.gov/data/2013/language?get=NAME,EST,LANLABEL&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*&LAN=${langCode}&key=2144eb32ff7a053724f7ab2949cbe8b407e33363`
    const settings = {
        url: urlString,
        dataType: 'json',
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}

function geoCode(censusData = []) {
    console.log(globalI, censusData)
    if (censusData.length === 0) {
        $('#errorMessage').text('There is no data for the selected language, please choose another.')
    }

    if (globalI === censusData.length) {
        return
    }

    let i;
    let limit = 50
    if (censusData.length - globalI < limit) {
        limit = censusData.length - globalI
    }
    for (i = 0; i < limit; i++) {
        let cityData = {
            stats: (censusData[globalI + i][1]),
            cityname: (censusData[globalI + i][0])
        }
        geocodeAddress(cityData.cityname, geocodeCallback(cityData, censusData.length));
    }
    globalI = globalI + i;

    setTimeout(geoCode.bind(this, censusData), 500);
}

function geocodeAddress(cityStateString, callback) {
    let urlString = `https://google-maps-geocoding-api-tpvjoimshu.now.sh`;
    const param = {
        data: {
            address: cityStateString,
            key: 'AIzaSyAsuYMNTF8_0AiUIbgZLhT_AJkZZJxP7dc',
        },
        url: urlString,
        dataType: 'json',
        type: 'GET',
        success: callback,
    };
    $.ajax(param);

}

function geocodeCallback(cityData, arrayLength) {

    return function markerLoc(results, status) {
        const progressElement = $('progress');
        const progressValue = progressElement.val();
        progressElement.val(progressValue + (100 / arrayLength));
        console.count();
        
        markerlocCounter++;

        if (markerlocCounter === arrayLength) {
            $('progress').addClass('hidden');
        }

        if (cityData.stats === null || cityData.stats === 'EST') {
            return
        }



        if (status === 'success') {
            var marker = new google.maps.Marker({
                map: map,
                position: results.json.results[0].geometry.location,
                title: 'Click to zoom'
            });

            markerCluster.addMarker(marker);
        
            let contentString = `<div class = "info-content">
            <h3>${cityData.stats} native speakers in ${cityData.cityname}</h3>
            </div>`;

            let infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200,
            });

            marker.addListener('click', function () {
                marker.infowindow = infowindow;
                let markersArray = markerCluster.getMarkers();
                for (let i = 0; i < markersArray.length; i++) {
                    if (markersArray[i].infowindow !== undefined) {
                        markersArray[i].infowindow.close();
                    }
                }
                infowindow.open(map, marker);
            });
        }
    }
}

function RemoveAllMarkers() {
    if (markerCluster !== undefined) {
        markerCluster.clearMarkers();
    }
}

$('.js-query').autocomplete({
    source: Object.keys(myLookupObjects),
    minLength: 2,
    classes: {
        "ui-autocomplete": "highlight"
    }
});