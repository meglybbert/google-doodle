// Randomize Image

//Store Image URLs
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get Random Number
var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);

//Show Randomized Images
$('#random').attr( 'src', eval('img' + numRand) );

//Hide Circle
$('#stage svg').hide();

//Click on Button
$('button').click(function(){
    
    //Show Circle
    $('#stage svg').show('slow');
    console.log('OK!');
})

