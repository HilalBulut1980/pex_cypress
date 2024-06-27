//
//
// DOWNLOAD FILE FROM URL, 
// STORE IN NEW FOLDER
// READ PDF
//



describe('download and save file in cypress', () => {

    it('read PDF file from URL', function () {

        cy.downloadFile('http://www.delphinus-test.de/Rechnung_100000005.pdf','invoicesPEX','Test.pdf')

        cy.task('readPDF', 'invoicesPEX/Test.pdf').then((textOrNull) => { 
            cy.log(textOrNull)
        })
    })
})