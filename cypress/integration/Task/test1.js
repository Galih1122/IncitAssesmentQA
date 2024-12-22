describe('Task QA INCIT', function() {
    it('Testcase 1 Contact Information Data Generate to QR Code', function() {
        
        cy.visit("http://zxing.appspot.com/generator/")
        cy.selectDropdown('Contact information');
        cy.CItextboxName().type('Galih');
        cy.CItextboxCompany().type('Test');
        cy.CItextboxTitle().type('Test Title');
        cy.CItextboxPhone().type('08412312312');
        cy.CItextboxEmail().type('Test@gmail.com');
        cy.CItextboxAddress().type('Batam ID');
        cy.CItextboxAddress2().type('Batam ID 2');
        cy.CItextboxWebsite().type('www.google.com');
        cy.CItextboxMemo().type('Hi This is Automated test');

        
        cy.selectDropdownEncoding('vCard');
        cy.selectDropdownBCSize('Medium');
        cy.selectDropdownEC('M');
        cy.selectDropdownCE('ISO-8859-1');

        
        cy.CIGenerateButton().click();

        
        cy.get(':nth-child(2) > table > tbody > :nth-child(4) > td').should('not.be.empty');
        cy.get(':nth-child(2) > table > tbody > :nth-child(3) > td').should('not.be.empty');
    });

    it('Downloading the QR Code', function() {
        const imageUrl = 'https://zxing.org/w/chart?cht=qr&chs=230x230&chld=M&choe=ISO-8859-1&chl=BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3AGalih%0AORG%3ATest%0ATITLE%3ATest+Title%0ATEL%3A08412312312%0AURL%3Awww.google.com%0AEMAIL%3ATest%40gmail.com%0AADR%3ABatam+ID+Batam+ID+2%0ANOTE%3AHi+This+is+Automated+test%0AEND%3AVCARD';
    
        
        cy.request({
            url: imageUrl,
            encoding: 'binary',  
        }).then((response) => {
            
            expect(response.status).to.eq(200);
    
            
            const filePath = 'C:/Users/galih/Downloads/QRCodeTaskIncit.png';
            cy.writeFile(filePath, response.body, 'binary').then(() => {
                
                cy.log('QR Code Downloaded to path on local: ' + filePath);
            });
            
        });

        

        
        

    });

    it('Navigate to Step 3 and upload QR Code', function() {
        cy.visit('https://m28dev.github.io/qrdecoder/')

        const originalPath = 'C:/Users/galih/Downloads/QRCodeTaskIncit.png';
        const targetPath = 'cypress/fixtures/QRCodeTaskIncit.png';
        const expectedDecodedData = 'BEGIN:VCARD\nVERSION:3.0\nN:Galih\nORG:Test\nTITLE:Test Title\nTEL:08412312312\nURL:www.google.com\nEMAIL:Test@gmail.com\nADR:Batam ID Batam ID 2\nNOTE:Hi This is Automated test\nEND:VCARD';

        
        cy.readFile(originalPath, 'binary').then((fileContent) => {
            cy.writeFile(targetPath, fileContent, 'binary');

            const filePath = 'QRCodeTaskIncit.png'; 
            cy.get('#qrcode').attachFile(filePath);

            cy.get('button').click();


            cy.get('#decoded', { timeout: 10000 })
            .should('have.value', expectedDecodedData);

            
        });
        

        
        
        
    });
    

    
    
});


