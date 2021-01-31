// ==UserScript==
// @name         Classfied Spells
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Add color and extra text to backpack.tf listings with spells
// @author       Dracnea
// @match        https://backpack.tf/classifieds*
// @grant        none
// ==/UserScript==

const SpellColors  = {
    //voices (and doubles for exorcism)
    VOICES: "bfbfbf",
    //colors
    PUTRESCENT: "ccff33",
    //thiswill double for halloween fire
    SINISTER: "66ff66",
    DIEJOB: "cccc00",
    SPECTRAL: "ff9900",
    CHROMATIC: "aa80ff",
    //footprints
    VIOLET: "ffa366",
    CORPSE: "9fdfbf",
    GANGREEN: "ffff00",
    BRUISED: "ff6666",
    TEAMSPIRIT: "ff471a",
    //this will double for pumpkin bombs
    ROTTEN: "ff9933",
    HEADLESS: "300099",
    //error/new spells
    DEFAULT: "f442bc"

}

const SpellNames = {
    //voices
    VOICES: "Voices From Below",
    //colors
    PUTRESCENT: "",
    SINISTER: "",
    DIEJOB: "",
    SPECTRAL: "",
    CHROMATIC: "",
    //footprints
    VIOLET: "",
    CORPSE: "",
    GANGREEN: "",
    BRUISED: "",
    TEAMSPIRIT: "",
    ROTTEN: "",
    HEADLESS: "",
    //weapons
    EXORCISM: "",
    FIRE: "",
    BOMBS: "",
    //error/new spells
    DEFAULT: "f442bc"
}

(function() {
    'use strict';

})();

function spellSearch(spellNum, thisRow) {
    var thisRowParent = thisRow.parentNode;
    var thisRowGrandParent = thisRow.parentNode.parentNode;
    
    var spellName = thisRow.getAttribute(spellNum);

    var currentStyle = thisRowGrandParent.getAttribute("style")




}

function determineSpell(spellName) {    PUTRESCENT: "ccff33",
//thiswill double for halloween fire
    var start = "Halloween Spell: "
    switch(spellName) {
        case start + SpellNames.VOICES:
            return SpellColors.VOICES
        default:
            return 
    }
}

