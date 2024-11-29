const pokemon = [
    // Treecko Line
    { nome: 'Treecko', img: './../../model/gen3/treecko2.png', numero: '252' },
    { nome: 'Grovyle', img: './../../model/gen3/grovyle2.png', numero: '253' },
    { nome: 'Sceptile', img: './../../model/gen3/sceptile2.png', numero: '254' },
    { nome: 'Mega Sceptile', img: './../../model/gen3/megasceptile.png', numero: '254-M' },

    // Torchic Line
    { nome: 'Torchic', img: './../../model/gen3/torchic.png', numero: '255' },
    { nome: 'Combusken', img: './../../model/gen3/combusken.png', numero: '256' },
    { nome: 'Blaziken', img: './../../model/gen3/blaziken.png', numero: '257' },
    { nome: 'Mega Blaziken', img: './../../model/gen3/megablaziken.png', numero: '257-M' },

    // Mudkip Line
    { nome: 'Mudkip', img: './../../model/gen3/mudkip.png', numero: '258' },
    { nome: 'Marshtomp', img: './../../model/gen3/marshtomp.png', numero: '259' },
    { nome: 'Swampert', img: './../../model/gen3/swampert.png', numero: '260' },
    { nome: 'Mega Swampert', img: './../../model/gen3/megaswampert.png', numero: '260-M' },

    // Poochyena Line
    { nome: 'Poochyena', img: './../../model/gen3/poochyena.png', numero: '261' },
    { nome: 'Mightyena', img: './../../model/gen3/mightyena.png', numero: '262' },

    // Zigzagoon Line
    { nome: 'Zigzagoon', img: './../../model/gen3/zigzagoon.png', numero: '263' },
    { nome: 'Linoone', img: './../../model/gen3/linoone.png', numero: '264' },

    // Wurmple Line
    { nome: 'Wurmple', img: './../../model/gen3/wurmple.png', numero: '265' },
    { nome: 'Silcoon', img: './../../model/gen3/silcoon.png', numero: '266' },
    { nome: 'Beautifly', img: './../../model/gen3/beautifly.png', numero: '267' },
    { nome: 'Cascoon', img: './../../model/gen3/cascoon.png', numero: '268' },
    { nome: 'Dustox', img: './../../model/gen3/dustox.png', numero: '269' },

    // Lotad Line
    { nome: 'Lotad', img: './../../model/gen3/lotad.png', numero: '270' },
    { nome: 'Lombre', img: './../../model/gen3/lombre.png', numero: '271' },
    { nome: 'Ludicolo', img: './../../model/gen3/ludicolo.png', numero: '272' },

    // Seedot Line
    { nome: 'Seedot', img: './../../model/gen3/seedot.png', numero: '273' },
    { nome: 'Nuzleaf', img: './../../model/gen3/nuzleaf.png', numero: '274' },
    { nome: 'Shiftry', img: './../../model/gen3/shiftry.png', numero: '275' },

    // Taillow Line
    { nome: 'Taillow', img: './../../model/gen3/taillow.png', numero: '276' },
    { nome: 'Swellow', img: './../../model/gen3/swellow.png', numero: '277' },

    // Wingull Line
    { nome: 'Wingull', img: './../../model/gen3/wingull.png', numero: '278' },
    { nome: 'Pelipper', img: './../../model/gen3/pelipper.png', numero: '279' },

    // Ralts Line
    { nome: 'Ralts', img: './../../model/gen3/ralts.png', numero: '280' },
    { nome: 'Kirlia', img: './../../model/gen3/kirlia.png', numero: '281' },
    { nome: 'Gardevoir', img: './../../model/gen3/gardevoir.png', numero: '282' },
    { nome: 'Mega Gardevoir', img: './../../model/gen3/megagardevoir.png', numero: '282-M' },

    // Surskit Line
    { nome: 'Surskit', img: './../../model/gen3/surskit.png', numero: '283' },
    { nome: 'Masquerain', img: './../../model/gen3/masquerain.png', numero: '284' },

    // Shroomish Line
    { nome: 'Shroomish', img: './../../model/gen3/shroomish.png', numero: '285' },
    { nome: 'Breloom', img: './../../model/gen3/breloom.png', numero: '286' },

    // Slakoth Line
    { nome: 'Slakoth', img: './../../model/gen3/slakoth.png', numero: '287' },
    { nome: 'Vigoroth', img: './../../model/gen3/vigoroth.png', numero: '288' },
    { nome: 'Slaking', img: './../../model/gen3/slaking.png', numero: '289' },

    // Nincada Line
    { nome: 'Nincada', img: './../../model/gen3/nincada.png', numero: '290' },
    { nome: 'Ninjask', img: './../../model/gen3/ninjask.png', numero: '291' },
    { nome: 'Shedinja', img: './../../model/gen3/shedinja.png', numero: '292' },

    // Whismur Line
    { nome: 'Whismur', img: './../../model/gen3/whismur.png', numero: '293' },
    { nome: 'Loudred', img: './../../model/gen3/loudred.png', numero: '294' },
    { nome: 'Exploud', img: './../../model/gen3/exploud.png', numero: '295' },

    // Makuhita Line
    { nome: 'Makuhita', img: './../../model/gen3/makuhita.png', numero: '296' },
    { nome: 'Hariyama', img: './../../model/gen3/hariyama.png', numero: '297' },

    // Azurill
    { nome: 'Azurill', img: './../../model/gen3/azurill.png', numero: '298' },

    // Nosepass
    { nome: 'Nosepass', img: './../../model/gen3/nosepass.png', numero: '299' },

    // Skitty Line
    { nome: 'Skitty', img: './../../model/gen3/skitty.png', numero: '300' },
    { nome: 'Delcatty', img: './../../model/gen3/delcatty.png', numero: '301' },

    // Sableye Line
    { nome: 'Sableye', img: './../../model/gen3/sableye.png', numero: '302' },
    { nome: 'Mega Sableye', img: './../../model/gen3/megasableye.png', numero: '302-M' },

    // Mawile Line
    { nome: 'Mawile', img: './../../model/gen3/mawile.png', numero: '303' },
    { nome: 'Mega Mawile', img: './../../model/gen3/megamawile.png', numero: '303-M' },

    // Aron Line
    { nome: 'Aron', img: './../../model/gen3/aron.png', numero: '304' },
    { nome: 'Lairon', img: './../../model/gen3/lairon.png', numero: '305' },
    { nome: 'Aggron', img: './../../model/gen3/aggron.png', numero: '306' },
    { nome: 'Mega Aggron', img: './../../model/gen3/megaaggron.png', numero: '306-M' },

    // Meditite Line
    { nome: 'Meditite', img: './../../model/gen3/meditite.png', numero: '307' },
    { nome: 'Medicham', img: './../../model/gen3/medicham.png', numero: '308' },
    { nome: 'Mega Medicham', img: './../../model/gen3/megamedicham.png', numero: '308-M' },

    // Electrike Line
    { nome: 'Electrike', img: './../../model/gen3/electrike.png', numero: '309' },
    { nome: 'Manectric', img: './../../model/gen3/manectric.png', numero: '310' },
    { nome: 'Mega Manectric', img: './../../model/gen3/megamanectric.png', numero: '310-M' },

    // Plusle and Minun
    { nome: 'Plusle', img: './../../model/gen3/plusle.png', numero: '311' },
    { nome: 'Minun', img: './../../model/gen3/minun.png', numero: '312' },

    // Volbeat and Illumise
    { nome: 'Volbeat', img: './../../model/gen3/volbeat.png', numero: '313' },
    { nome: 'Illumise', img: './../../model/gen3/illumise.png', numero: '314' },

    // Roselia
    { nome: 'Roselia', img: './../../model/gen3/roselia.png', numero: '315' },

    // Gulpin Line
    { nome: 'Gulpin', img: './../../model/gen3/gulpin.png', numero: '316' },
    { nome: 'Swalot', img: './../../model/gen3/swalot.png', numero: '317' },

    // Carvanha Line
    { nome: 'Carvanha', img: './../../model/gen3/carvanha.png', numero: '318' },
    { nome: 'Sharpedo', img: './../../model/gen3/sharpedo.png', numero: '319' },
    { nome: 'Mega Sharpedo', img: './../../model/gen3/megasharpedo.png', numero: '319-M' },

    // Wailmer Line
    { nome: 'Wailmer', img: './../../model/gen3/wailmer.png', numero: '320' },
    { nome: 'Wailord', img: './../../model/gen3/wailord.png', numero: '321' },

    // Numel Line
    { nome: 'Numel', img: './../../model/gen3/numel.png', numero: '322' },
    { nome: 'Camerupt', img: './../../model/gen3/camerupt.png', numero: '323' },
    { nome: 'Mega Camerupt', img: './../../model/gen3/megacamerupt.png', numero: '323-M' },

    // Torkoal
    { nome: 'Torkoal', img: './../../model/gen3/torkoal.png', numero: '324' },

    // Spoink Line
    { nome: 'Spoink', img: './../../model/gen3/spoink.png', numero: '325' },
    { nome: 'Grumpig', img: './../../model/gen3/grumpig.png', numero: '326' },

    // Spinda
    { nome: 'Spinda', img: './../../model/gen3/spinda.png', numero: '327' },

    // Trapinch Line
    { nome: 'Trapinch', img: './../../model/gen3/trapinch.png', numero: '328' },
    { nome: 'Vibrava', img: './../../model/gen3/vibrava.png', numero: '329' },
    { nome: 'Flygon', img: './../../model/gen3/flygon.png', numero: '330' },

    // Cacnea Line
    { nome: 'Cacnea', img: './../../model/gen3/cacnea.png', numero: '331' },
    { nome: 'Cacturne', img: './../../model/gen3/cacturne.png', numero: '332' },

    // Swablu Line
    { nome: 'Swablu', img: './../../model/gen3/swablu.png', numero: '333' },
    { nome: 'Altaria', img: './../../model/gen3/altaria.png', numero: '334' },
    { nome: 'Mega Altaria', img: './../../model/gen3/megaaltaria.png', numero: '334-M' },

    // Zangoose and Seviper
    { nome: 'Zangoose', img: './../../model/gen3/zangoose.png', numero: '335' },
    { nome: 'Seviper', img: './../../model/gen3/seviper.png', numero: '336' },

    // Lunatone and Solrock
    { nome: 'Lunatone', img: './../../model/gen3/lunatone.png', numero: '337' },
    { nome: 'Solrock', img: './../../model/gen3/solrock.png', numero: '338' },

    // Barboach Line
    { nome: 'Barboach', img: './../../model/gen3/barboach.png', numero: '339' },
    { nome: 'Whiscash', img: './../../model/gen3/whiscash.png', numero: '340' },

    // Corphish Line
    { nome: 'Corphish', img: './../../model/gen3/corphish.png', numero: '341' },
    { nome: 'Crawdaunt', img: './../../model/gen3/crawdaunt.png', numero: '342' },

    // Baltoy Line
    { nome: 'Baltoy', img: './../../model/gen3/baltoy.png', numero: '343' },
    { nome: 'Claydol', img: './../../model/gen3/claydol.png', numero: '344' },

    // Família Lileep
    { nome: 'Lileep', img: './../../model/gen3/lileep.png', numero: '345' },
    { nome: 'Cradily', img: './../../model/gen3/cradily.png', numero: '346' },

    // Família Anorith
    { nome: 'Anorith', img: './../../model/gen3/anorith.png', numero: '347' },
    { nome: 'Armaldo', img: './../../model/gen3/armaldo.png', numero: '348' },

    // Família Feebas
    { nome: 'Feebas', img: './../../model/gen3/feebas.png', numero: '349' },
    { nome: 'Milotic', img: './../../model/gen3/milotic.png', numero: '350' },

    // Pokémon únicos
    { nome: 'Castform', img: './../../model/gen3/castform.png', numero: '351' },
    { nome: 'Kecleon', img: './../../model/gen3/kecleon.png', numero: '352' },

    // Família Shuppet
    { nome: 'Shuppet', img: './../../model/gen3/shuppet.png', numero: '353' },
    { nome: 'Banette', img: './../../model/gen3/banette.png', numero: '354' },
    { nome: 'Mega Banette', img: './../../model/gen3/megabanette.png', numero: '354-M' },

    // Família Duskull
    { nome: 'Duskull', img: './../../model/gen3/duskull.png', numero: '355' },
    { nome: 'Dusclops', img: './../../model/gen3/dusclops.png', numero: '356' },

    // Pokémon único
    { nome: 'Tropius', img: './../../model/gen3/tropius.png', numero: '357' },

    // Pokémon único
    { nome: 'Chimecho', img: './../../model/gen3/chimecho.png', numero: '358' },

    // Família Absol
    { nome: 'Absol', img: './../../model/gen3/absol.png', numero: '359' },
    { nome: 'Mega Absol', img: './../../model/gen3/megaabsol.png', numero: '359-M' },

    // Família Wynaut
    { nome: 'Wynaut', img: './../../model/gen3/wynaut.png', numero: '360' },

    // Família Snorunt
    { nome: 'Snorunt', img: './../../model/gen3/snorunt.png', numero: '361' },
    { nome: 'Glalie', img: './../../model/gen3/glalie.png', numero: '362' },
    { nome: 'Mega Glalie', img: './../../model/gen3/megaglalie.png', numero: '362-M' },

    // Família Spheal
    { nome: 'Spheal', img: './../../model/gen3/spheal.png', numero: '363' },
    { nome: 'Sealeo', img: './../../model/gen3/sealeo.png', numero: '364' },
    { nome: 'Walrein', img: './../../model/gen3/walrein.png', numero: '365' },

    // Clamperl Line
    { nome: 'Clamperl', img: './../../model/gen3/clamperl.png', numero: '366' },
    { nome: 'Huntail', img: './../../model/gen3/huntail.png', numero: '367' },
    { nome: 'Gorebyss', img: './../../model/gen3/gorebyss.png', numero: '368' },

    // Relicanth
    { nome: 'Relicanth', img: './../../model/gen3/relicanth.png', numero: '369' },

    // Luvdisc
    { nome: 'Luvdisc', img: './../../model/gen3/luvdisc.png', numero: '370' },

    // Bagon Line
    { nome: 'Bagon', img: './../../model/gen3/bagon.png', numero: '371' },
    { nome: 'Shelgon', img: './../../model/gen3/shelgon.png', numero: '372' },
    { nome: 'Salamence', img: './../../model/gen3/salamence.png', numero: '373' },
    { nome: 'Mega Salamence', img: './../../model/gen3/megasalamence.png', numero: '373-M' },

    // Beldum Line
    { nome: 'Beldum', img: './../../model/gen3/beldum.png', numero: '374' },
    { nome: 'Metang', img: './../../model/gen3/metang.png', numero: '375' },
    { nome: 'Metagross', img: './../../model/gen3/metagross.png', numero: '376' },
    { nome: 'Mega Metagross', img: './../../model/gen3/megametagross.png', numero: '376-M' },

    // Regi Trio
    { nome: 'Regirock', img: './../../model/gen3/regirock.png', numero: '377' },
    { nome: 'Regice', img: './../../model/gen3/regice.png', numero: '378' },
    { nome: 'Registeel', img: './../../model/gen3/registeel.png', numero: '379' },

    // Latias and Latios
    { nome: 'Latias', img: './../../model/gen3/latias.png', numero: '380' },
    { nome: 'Mega Latias', img: './../../model/gen3/megalatias.png', numero: '380-M' },
    { nome: 'Latios', img: './../../model/gen3/latios.png', numero: '381' },
    { nome: 'Mega Latios', img: './../../model/gen3/megalatios.png', numero: '381-M' },

    // Kyogre, Groudon, Rayquaza
    { nome: 'Kyogre', img: './../../model/gen3/kyogre.png', numero: '382' },
    { nome: 'Primal Kyogre', img: './../../model/gen3/primal_kyogre.png', numero: '382-P' },
    { nome: 'Groudon', img: './../../model/gen3/groudon.png', numero: '383' },
    { nome: 'Primal Groudon', img: './../../model/gen3/primal_groudon.png', numero: '383-P' },
    { nome: 'Rayquaza', img: './../../model/gen3/rayquaza.png', numero: '384' },
    { nome: 'Mega Rayquaza', img: './../../model/gen3/megarayquaza.png', numero: '384-M' },

    // Jirachi
    { nome: 'Jirachi', img: './../../model/gen3/jirachi.png', numero: '385' },

    // Kyogre
    { nome: 'Kyogre', img: './../../model/gen3/kyogre.png', numero: '382' },

    // Deoxys Forms
    { nome: 'Deoxys-Attack' },
];

export default pokemon;