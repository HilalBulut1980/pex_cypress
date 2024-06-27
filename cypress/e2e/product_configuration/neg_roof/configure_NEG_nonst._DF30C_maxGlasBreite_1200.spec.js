var configurator = require("../../../support/configurator_NEG_roof.js");

var test = {
    "name": "Neg.PEX-DF30C_glas_B_max_1200",
    "product": "Tarent 1272",
    "stoff_url": "tarent-1272",
    "produkttyp": "Dachfenster",
    "plisseetyp": "DF 30 Comfort",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1300",
    "df_glashoehe": "1600",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1300",
    "df_fluegelhoehe": "1600",
    "df_glasbreite_new": "1200",
    "df_fluegelbreite_new": "1200",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 1900 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

describe('Testing error messages - DF30 Comfort - max. glass width 1200', () => {
    configurator.configure_NEG_roof(test)
})