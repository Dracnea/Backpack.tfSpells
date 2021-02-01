// ==UserScript==
// @name         Classfied Spells
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  Add color and extra text to backpack.tf listings with spells
// @author       Dracnea
// @match        https://backpack.tf/classifieds*
// @grant        none
// ==/UserScript==

var SpellColors = {
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
    //weapons
    EXORCISM: "bfbfbf",
    FIRE: "66ff66",
    BOMBS: "ff9933",
    //error/new spells
    DEFAULT: "f442bc"
}

var SpellNames = {
    //voices
    VOICES: "Voices From Below",
    //colors
    PUTRESCENT: "Putrescent Pigmentation",
    SINISTER: "Sinster Staining",
    DIEJOB: "Die Job",
    SPECTRAL: "Spectral Spectrum",
    CHROMATIC: "Chromatic Corruption",
    //footprints
    VIOLET: "Violent Violent",
    CORPSE: "Corpse Gray",
    GANGREEN: "Gangreen",
    BRUISED: "Bruised Purple",
    TEAMSPIRIT: "Team Sprit",
    ROTTEN: "Rotten Orange",
    HEADLESS: "Headless Horseshoes",
    //weapons
    EXORCISM: "Exorcism",
    FIRE: "Halloween Fire",
    BOMBS: "Pumpkin Bombs",
    //error/new spells
    DEFAULT: "Default"
}

(function() {
    'use strict';
    var newRows = document.querySelectorAll("div.item")
    var newDesc = document.querySelectorAll("h5")

    for(var i = 0; i < newRows.length; i++){
        var spell1 = "data-spell_1"
        var spell2 = "data-spell_2"

        if(newRows[i].hasAttributes(spell1)) {
            spellSearch(spell1, newRows[i]);
            newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";

            if(newRows[i].hasAttributes(spell2)){
                spellSearch(spell2, newRows[i])
                newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell2);
            }
        }
    }
})();

function spellSearch(spellNum, thisRow) {
    var thisRowParent = thisRow.parentNode;
    var thisRowGrandParent = thisRow.parentNode.parentNode;

    var spellName = thisRow.getAttribute(spellNum);

    var currentStyle = thisRowGrandParent.getAttribute("style")

    var currentColor = determineSpell(spellName)

    switch(currentColor) {
        case SpellColors.FIRE:
        case SpellColors.BOMBS:
        case SpellColors.VIOLET:
        case SpellColors.CORPSE:
        case SpellColors.GANGREEN:
        case SpellColors.BRUISED:
        case SpellColors.TEAMSPIRIT:
        case SpellColors.ROTTEN:
        case SpellColors.HEADLESS:
            thisRowParent.setAttributes("style", currentStyle + ";background-color: " + currentColor)
            break
        default:
            thisRowGrandParent.setAttributes("style", currentStyle + ";background-color: " + currentColor)
            break
    }

}

function determineSpell(spellName) {
//thiswill double for halloween fire
    var start = "Halloween Spell: "
    var footprints = " Footprints"
    switch(spellName) {
        case start + SpellNames.VOICES:
            return SpellColors.VOICES
        case start + SpellNames.PUTRESCENT:
            return SpellColors.PUTRESCENT
        case start + SpellNames.SINISTER:
            return SpellColors.SINISTER
        case start + SpellNames.DIEJOB:
            return SpellColors.DIEJOB
        case start + SpellNames.SPECTRAL:
            return SpellColors.SPECTRAL
        case start + SpellNames.CHROMATIC:
            return SpellColors.CHROMATIC
        case start + SpellNames.VIOLET + footprints:
            return SpellColors.VIOLET
        case start + SpellNames.CORPSE + footprints:
            return SpellColors.CORPSE
        case start + SpellNames.GANGREEN + footprints:
            return SpellColors.GANGREEN
        case start + SpellNames.BRUISED + footprints:
            return SpellColors.BRUISED
        case start + SpellNames.TEAMSPIRIT + footprints:
            return SpellColors.TEAMSPIRIT
        case start + SpellNames.ROTTEN + footprints:
            return SpellNames.ROTTEN
        case start + SpellNames.HEADLESS:
            return SpellColors.HEADLESS
        case start + SpellNames.EXORCISM:
            return SpellColors.EXORCISM
        case start + SpellNames.FIRE:
            return SpellColors.FIRE
        case start + SpellNames.BOMBS:
            return SpellColors.BOMBS
        default:
            return SpellColors.DEFAULT
    }
}
