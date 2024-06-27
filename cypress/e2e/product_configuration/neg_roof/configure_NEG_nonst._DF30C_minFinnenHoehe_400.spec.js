var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF30C_fluegel_H_min",
    "product": "Chiara 1549",
    "stoff_url": "chiara-1549",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 30 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "100",
    "df_glashoehe_new": "400",
    "df_fluegelhoehe_new": "400",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

describe('Testing error messages - DF30 Comfort - min. finnen height 400', () => {
    configurator.configure_NEG_roof(test)
})
