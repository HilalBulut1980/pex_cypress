var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_glas_H_max",
    "product": "Bologna 2027",
    "stoff_url": "bologna-2027",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "2000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "2000",
    "df_glashoehe_new": "1900",
    "df_fluegelhoehe_new": "1900",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

describe('Testing error messages - DF20 Comfort - max. glass height 1900', () => {
    configurator.configure_NEG_roof(test)
})