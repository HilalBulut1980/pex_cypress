var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF30C_glas_H_min",
    "product": "Tarent 1272",
    "stoff_url": "tarent-1272",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 30 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1100",
    "df_glashoehe_new": "400",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 400 mm und 1900 mm ein."
}

describe('Testing error messages - DF30 Comfort - min. glass height 400', () => {
    configurator.configure_NEG_roof(test)
})