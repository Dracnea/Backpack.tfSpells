// ==UserScript==
// @name         Backpack.tf Spells
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Add color and extra text to backpack.tf classifieds, listings, and premium search pages
// @author       Dracnea
// @match        https://backpack.tf/classifieds*
// @match        https://backpack.tf/u*
// @match        https://backpack.tf/premium*
// @grant        none
// ==/UserScript==

var Spells = {
    //voices
    VOICES: {name: "Voices", color: "#bfbfbf"},
    //colors
    PUTRESCENT: {name: "Putrescent Pigmentation", color: "#ccff33"},
    SINISTER: {name: "Sinister Staining", color: "#66ff66"},
    DIEJOB: {name: "Die Job", color: "#cccc00"},
    SPECTRAL: {name: "Spectral Spectrum", color: "#ff9900"},
    CHROMATIC: {name: "Chromatic Corruption", color: "#aa80ff"},
    //footprints
    VIOLET: {name: "Violent Violet", color: "#ffa366"},
    CORPSE: {name: "Corpse Gray", color: "#9fdfbf"},
    GANGREEN: {name: "Gangreen", color: "#ffff00"},
    BRUISED: {name: "Bruised Purple", color: "#ff6666"},
    TEAMSPIRIT: {name: "Team Spirit", color: "#ff471a"},
    ROTTEN: {name: "Rotten Orange", color: "#ff9933"},
    HEADLESS: {name: "Headless Horseshoes", color: "#300099"},
    //weapons
    EXORCISM: {name: "Exorcism", color: "#bfbfbf"},
    FIRE: {name: "Halloween Fire", color: "#33cc00"},
    BOMBS: {name: "Pumpkin Bombs", color: "#ff6600"},
};

(function() {
    'use strict';
    var url = window.location.href
    var newRows 
    if(url.includes("premium")) {
        newRows = document.querySelectorAll("li.item")
    }
    else {
        newRows = document.querySelectorAll("div.item")
    } 
    var newDesc = document.querySelectorAll("h5")

    for(var i = 0; i < newRows.length; i++){
        var spell1 = "data-spell_1"
        var spell2 = "data-spell_2"

        if(newRows[i].getAttribute(spell1) != null) {
            spellSearch(spell1, newRows[i]);
            newDesc[i].textContent += "\r\n" + newRows[i].getAttribute(spell1) + " ";

            if(newRows[i].getAttribute(spell2) != null){
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

    var currentColor
    if(spellName != null) {
        currentColor = determineSpell(spellName)

        switch(currentColor) {
        case Spells.FIRE.color:
        case Spells.BOMBS.color:
        case Spells.VIOLET.color:
        case Spells.CORPSE.color:
        case Spells.GANGREEN.color:
        case Spells.BRUISED.color:
        case Spells.TEAMSPIRIT.color:
        case Spells.ROTTEN.color:
        case Spells.HEADLESS.color:
            thisRowParent.setAttribute("style", currentStyle + ";background-color: " + currentColor)
            break
        default:
            thisRowGrandParent.setAttribute("style", currentStyle + ";background-color: " + currentColor)
            break
        }
    }
}

function determineSpell(spellName) {
    //loop through each spell within spells enum
    for(const spell in Spells) {
        //check for matching name
        if(spellName.includes(Spells[spell].name)){
            //return color
            return Spells[spell].color
        }
    }
    //return default color
    return "#f442bc"
}
