var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_falz_min",
    "product": "Uni Topar 4225",
    "stoff_url": "Uni-Topar-4225",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1000",
    "df_glashoehe": "800",
    "df_falztiefe": "20",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "900",
    "df_falztiefe_new": "30",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}


describe('Testing error messages - DF20 - min. falz 30', () => {
    configurator.configure_NEG_roof(test)
})