var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF30C_falz_max",
    "product": "Sinfonia 4446",
    "stoff_url": "sinfonia-4446",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 30 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "800",
    "df_falztiefe": "250",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "900",
    "df_falztiefe_new": "200",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}

describe('Testing error messages - DF30 Comfort - max. falz 200', () => {
    configurator.configure_NEG_roof(test)
})