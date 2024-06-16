async function fetchPostcodeInfo() {
    const postcode = document.getElementById('postcode').value;
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const data = await response.json();

    if (data.status === 200) {
        const result = data.result;
        document.getElementById('output').innerHTML = `
            <h2>Geographical Information for Postcode: ${postcode}</h2>
            <p>Country: ${result.country}</p>
            <p>Region: ${result.region}</p>
            <p>Parish: ${result.parish}</p>
            <p>County: ${result.admin_county}</p>
            <p>Admin District: ${result.admin_district}</p>
            <p>NHS Health Authority: ${result.nhs_ha}</p>
            <p>Parliamentary Constituency: ${result.parliamentary_constituency}</p>
            <p>Primary Care Trust: ${result.primary_care_trust}</p>
            <p>Latitude: ${result.latitude}</p>
            <p>Longitude: ${result.longitude}</p>
        `;
    } else {
        document.getElementById('output').innerHTML = `<p>Postcode not found.</p>`;
    }
}