var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_glas_H_max",
    "product": "Sinfonia 4447",
    "stoff_url": "sinfonia-4447",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "1700",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1700",
    "df_fluegelhoehe_new": "1600",
    "df_glashoehe_new": "1600",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1600 mm ein."
}


describe('Testing error messages - DF20 - max. glass height 1600', () => {
    configurator.configure_NEG_roof(test)
})