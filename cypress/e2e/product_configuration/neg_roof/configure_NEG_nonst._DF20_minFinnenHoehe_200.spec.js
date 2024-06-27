var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_fluegel_H_min",
    "product": "Chivasso 1231",
    "stoff_url": "chivasso-1231",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "100",
    "df_glashoehe_new": "200",
    "df_fluegelhoehe_new": "200",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}


describe('Testing error messages - DF20 - min. finnen height 200', () => {
    configurator.configure_NEG_roof(test)
})