var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_falz_min",
    "product": "Wabe Ultima 4793",
    "stoff_url": "wabe-ultima-4793",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "800",
    "df_falztiefe": "20",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "900",
    "df_falztiefe_new": "30",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}

describe('Testing error messages - DF20 Comfort - min. falz 30', () => {
    configurator.configure_NEG_roof(test)
})