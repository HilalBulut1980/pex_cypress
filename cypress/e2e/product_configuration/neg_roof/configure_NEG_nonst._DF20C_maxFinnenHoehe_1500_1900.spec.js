var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF20C_fluegel_H_max",
    "product": "Brigid 4428",
    "stoff_url": "brigid-4428",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 20 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1300",
    "df_glashoehe": "1600",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1300",
    "df_fluegelhoehe": "1600",
    "df_glashoehe_new": "1500",
    "df_fluegelhoehe_new": "1500",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 1900 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - DF20 Comfort - max. finnen height 1500/1900', () => {
    configurator.configure_NEG_roof(test)
})
