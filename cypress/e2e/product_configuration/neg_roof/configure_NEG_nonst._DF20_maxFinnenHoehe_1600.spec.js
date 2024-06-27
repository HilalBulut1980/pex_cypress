var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_fluegel_H_max",
    "product": "Lecce 4914",
    "stoff_url": "lecce-4914",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1700",
    "df_fluegelhoehe_new": "1600",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}


describe('Testing error messages - DF20 - max. finnen height 1600', () => {
    configurator.configure_NEG_roof(test)
})