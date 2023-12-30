const inputDiv = document.getElementById( "input-div" );

const readout = document.createElement( "h3" );
readout.id = "readout";
readout.style.overflowY = "scroll";
readout.style.display = "block";

const chuggaCount = document.createElement( "h4" );
chuggaCount.id = "chugga-count";
chuggaCount.style.display = "block";

function getReadout( chuggas ) {
    let result = "";
    for( let a = 0 ; a < chuggas ; a += 1 ) {
        result += "CHUGGA-";
    }
    result += "CHOO-CHOO!"
    return result;
}

function updateReadout( e ) {
    document.getElementById( "readout" ).textContent = getReadout( e.target.value );
    document.getElementById( "chugga-count" ).textContent = `${ e.target.value }`;
}

const chuggaSlider = document.createElement( "input" );
chuggaSlider.id = "chuggaSlider";
chuggaSlider.name = "chuggaSlider";
chuggaSlider.type = "range";
chuggaSlider.min = 1;
chuggaSlider.max = 144;
chuggaSlider.step = 1;
chuggaSlider.value = 2;
chuggaSlider.style.display = "block";
chuggaSlider.style.width = "80%";
chuggaSlider.style.padding = "12px";
chuggaSlider.oninput = updateReadout;

const chuggaSliderLabel = document.createElement( "label" );
chuggaSliderLabel.for = "chuggaSlider";
chuggaSliderLabel.textContent = "How Many Chuggas?";

readout.textContent = getReadout( chuggaSlider.value );
chuggaCount.textContent = `${ chuggaSlider.value }`;

const sliderEl = inputDiv.appendChild( chuggaSlider );
const labelEl = inputDiv.appendChild( chuggaSliderLabel );
const countEl = inputDiv.appendChild( chuggaCount );
const outputEl = inputDiv.appendChild( readout )