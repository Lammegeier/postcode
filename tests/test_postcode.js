QUnit.module('fetchPostcodeInfo', {
    beforeEach: () => {
        // Set up the DOM for each test
        document.getElementById('postcode').value = '';
        document.getElementById('output').innerHTML = '';
    }
});

QUnit.test('Valid Geographical Fields for London, no space in postcode', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'SE37LZ'; // Replace with a valid postcode
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: England'), 'Correct country displayed');
        assert.ok(output.includes('Region: London'), 'Correct region displayed');
        assert.ok(output.includes('County: null'), 'Correct county displayed');
        assert.ok(output.includes('Parish: Greenwich, unparished area'), 'Correct parish displayed');
        assert.ok(output.includes('Admin District: Greenwich'), 'Correct admin district displayed');
        assert.ok(output.includes('NHS Health Authority: London'), 'Correct NHS health authority displayed');
        assert.ok(output.includes('Parliamentary Constituency: Greenwich and Woolwich'), 'Correct parliamentary constituency displayed');
        assert.ok(output.includes('Primary Care Trust: Greenwich Teaching'), 'Correct primary care trust displayed');
        assert.ok(output.includes('Latitude: 51.482362'), 'Correct latitude displayed');
        assert.ok(output.includes('Longitude: 0.016023'), 'Correct longitude displayed'); 
        done();
    });
});

QUnit.test('Valid Geographical Fields for Ballymena, no space in postcode', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'BT437QA'; // Replace with a valid postcode
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: Northern Ireland'), 'Correct country displayed');
        assert.ok(output.includes('Region: null'), 'Correct region displayed');
        assert.ok(output.includes('County: null'), 'Correct county displayed');
        assert.ok(output.includes('Parish: null'), 'Correct parish displayed');
        assert.ok(output.includes('Admin District: Mid and East Antrim'), 'Correct admin district displayed');
        assert.ok(output.includes('Parliamentary Constituency: '), 'Correct parliamentary constituency displayed');
        assert.ok(output.includes('Primary Care Trust: Northern'), 'Correct primary care trust displayed');
        assert.ok(output.includes('Latitude: 54.870118'), 'Correct latitude displayed');
        assert.ok(output.includes('Longitude: -6.257236'), 'Correct longitude displayed');
        done();
    });
});

QUnit.test('Valid Geographical Fields for Newcastle, with space in postcode', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'NE2 1LE'; // Replace with a valid postcode
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: England'), 'Correct country displayed');
        assert.ok(output.includes('Region: North East'), 'Correct region displayed');
        done();
    });
});


QUnit.test('Invalid Postcode', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'INVALID'; // Replace with an invalid postcode
    fetchPostcodeInfo().then(() => {
        assert.ok(document.getElementById('output').innerHTML.includes('Postcode not found'), 'Postcode not found message displayed');
        done();
    });
});

QUnit.test('Empty Postcode', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = ''; // Empty postcode
    fetchPostcodeInfo().then(() => {
        assert.ok(document.getElementById('output').innerHTML.includes('Postcode not found'), 'Postcode not found message displayed');
        done();
    });
});

QUnit.test('Postcode with Non-Alphanumeric Characters', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'NE2@1LE'; // Postcode with special character
    fetchPostcodeInfo().then(() => {
        assert.ok(document.getElementById('output').innerHTML.includes('Postcode not found'), 'Postcode not found message displayed');
        done();
    });
});

QUnit.test('Postcode with Leading or Trailing Spaces', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = ' TF12BF '; // Postcode with leading and trailing spaces
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: England'), 'Correct country displayed');
        done();
    });
});

QUnit.test('Postcode with Lower Case', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'ne21le'; // Postcode with mixed case
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: England'), 'Correct country displayed');
        done();
    });
});

QUnit.test('Postcode with Mixed Case', assert => {
    const done = assert.async();
    document.getElementById('postcode').value = 'Ne21lE'; // Postcode with mixed case
    fetchPostcodeInfo().then(() => {
        const output = document.getElementById('output').innerHTML;
        assert.ok(output.includes('Country: England'), 'Correct country displayed');
        done();
    });
});