var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20_fluegel_H_max_1500",
    "product": "Wabe-Twine-4737",
    "stoff_url": "wabe-twine-4737",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "1000",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "1700",
    "df_fluegelhoehe_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 200 mm und 1500 mm ein." //Wabe-Light and Wabe-Twine only till 1500 mm --> PEX-4084
}


describe('Testing error messages - DF20 - max. finnen height 1500', () => {
    configurator.configure_NEG_roof(test)
})