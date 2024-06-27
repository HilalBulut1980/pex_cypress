
var checkEmptyInputs = require("../../../support/checkEmptyInputs.js");

var test = {
    "name": "Neg.PEX-fdf20_falz_empty",
    "url": "bologna-2028",
    "tab": "Dachfenster",
    "plisseetyp": "df20",
    "glashoehe": "1500",
    "glasbreite": "1000",
    "falz_new": "50",
    "finnenhoehe": "1500",
    "finnenbreite": "1000",
    "message": "Bitte geben Sie die Glasleistentiefe in Millimeter im Bereich von 30 mm und 200 mm ein."
}

describe('Testing error messages - DF20 - empty falz', () => {

    it(test.name, function () {

        checkEmptyInputs.checkEmptyInputs_DF(test.url, test.tab, test.plisseetyp, test.stoffgruppe, test.stoffnummer, test.glasbreite, test.glashoehe, test.falz, test.finnenbreite, test.finnenhoehe, test.glasbreite_new, test.glashoehe_new, test.falz_new, test.finnenbreite_new, test.finnenhoehe_new, test.message)

    })
})