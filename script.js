const movieIds = [["tt0111161"], ["tt0068646"], ["tt0468569"], ["tt0071562"], ["tt0050083"], ["tt0108052"], ["tt0167260"], ["tt0110912"], ["tt0120737"], ["tt0060196"], ["tt0109830"], ["tt0137523"], ["tt0167261"], ["tt1375666"], ["tt0080684"], ["tt0133093"], ["tt0099685"], ["tt0073486"], ["tt0114369"], ["tt0047478"], ["tt0038650"], ["tt0102926"], ["tt0120815"], ["tt0317248"], ["tt0816692"], ["tt0118799"], ["tt0120689"], ["tt0076759"], ["tt0103064"], ["tt0088763"], ["tt0245429"], ["tt0253474"], ["tt0054215"], ["tt6751668"], ["tt0110413"], ["tt0110357"], ["tt0172495"], ["tt0120586"], ["tt0407887"], ["tt0114814"], ["tt0482571"], ["tt2582802"], ["tt0034583"], ["tt0095327"], ["tt0056058"], ["tt1675434"], ["tt0027977"], ["tt0064116"], ["tt0095765"], ["tt0047396"], ["tt0078748"], ["tt0021749"], ["tt0078788"], ["tt0209144"], ["tt1853728"], ["tt0082971"], ["tt0910970"], ["tt0405094"], ["tt0043014"], ["tt0050825"], ["tt0081505"], ["tt0032553"], ["tt4154756"], ["tt0051201"], ["tt0090605"], ["tt4633694"], ["tt0169547"], ["tt0057012"], ["tt1345836"], ["tt0364569"], ["tt0361748"], ["tt0086879"], ["tt2380307"], ["tt0114709"], ["tt7286456"], ["tt0112573"], ["tt0082096"], ["tt4154796"], ["tt0119698"], ["tt0087843"], ["tt0119217"], ["tt5311514"], ["tt0045152"], ["tt1187043"], ["tt0180093"], ["tt0057565"], ["tt0435761"], ["tt8267604"], ["tt0086190"], ["tt0062622"], ["tt0338013"], ["tt0105236"], ["tt0091251"], ["tt2106476"], ["tt0033467"], ["tt0022100"], ["tt0056172"], ["tt0053125"], ["tt0044741"], ["tt0052357"], ["tt0053604"], ["tt0211915"], ["tt0066921"], ["tt0036775"], ["tt0093058"], ["tt0086250"], ["tt8503618"], ["tt1255953"], ["tt0113277"], ["tt0056592"], ["tt0070735"], ["tt1049413"], ["tt1745960"], ["tt1832382"], ["tt0017136"], ["tt0075314"], ["tt0119488"], ["tt0095016"], ["tt0208092"], ["tt0097576"], ["tt0040522"], ["tt0986264"], ["tt8579674"], ["tt0363163"], ["tt5074352"], ["tt0059578"], ["tt0372784"], ["tt0012349"], ["tt0053291"], ["tt10272386"], ["tt0042192"], ["tt0993846"], ["tt6966692"], ["tt0055031"], ["tt0089881"], ["tt0112641"], ["tt0120382"], ["tt0457430"], ["tt0469494"], ["tt0105695"], ["tt0167404"], ["tt1130884"], ["tt0268978"], ["tt0107290"], ["tt0055630"], ["tt0040897"], ["tt0071853"], ["tt0057115"], ["tt0477348"], ["tt0266697"], ["tt0042876"], ["tt10872600"], ["tt0084787"], ["tt0266543"], ["tt0080678"], ["tt0071315"], ["tt0081398"], ["tt0434409"], ["tt0031381"], ["tt0120735"], ["tt2096673"], ["tt0046912"], ["tt1305806"], ["tt0347149"], ["tt5027774"], ["tt0050212"], ["tt0117951"], ["tt1392214"], ["tt1291584"], ["tt0116282"], ["tt1205489"], ["tt0096283"], ["tt0264464"], ["tt0405159"], ["tt0118849"], ["tt0083658"], ["tt0015864"], ["tt4729430"], ["tt0112471"], ["tt1201607"], ["tt2024544"], ["tt0047296"], ["tt0052618"], ["tt2278388"], ["tt2267998"], ["tt0050986"], ["tt0017925"], ["tt0107207"], ["tt0041959"], ["tt0072684"], ["tt0077416"], ["tt2119532"], ["tt0046268"], ["tt0353969"], ["tt0015324"], ["tt3011894"], ["tt0031679"], ["tt1392190"], ["tt0978762"], ["tt0050976"], ["tt0892769"], ["tt0198781"], ["tt3170832"], ["tt0073195"], ["tt0097165"], ["tt0118715"], ["tt0046438"], ["tt0019254"], ["tt1950186"], ["tt0395169"], ["tt0075148"], ["tt0091763"], ["tt0382932"], ["tt1895587"], ["tt0088247"], ["tt3315342"], ["tt0092005"], ["tt1979320"], ["tt0074958"], ["tt0381681"], ["tt0758758"], ["tt0032138"], ["tt0036868"], ["tt0048473"], ["tt0107048"], ["tt0070047"], ["tt0035446"], ["tt0317705"], ["tt0113247"], ["tt0325980"], ["tt0058946"], ["tt1028532"], ["tt0032551"], ["tt15097216"], ["tt0476735"], ["tt0245712"], ["tt0032976"], ["tt0061512"], ["tt4016934"], ["tt0053198"], ["tt0059742"], ["tt0025316"], ["tt0060827"], ["tt0079470"], ["tt0129167"], ["tt0071411"], ["tt1454029"], ["tt0103639"], ["tt0083987"], ["tt0099348"]]

// const ratingbtn = document.querySelector('#ratingbtn'); 
// const ratingbtn1 = document.querySelector('#ratingbtn1');
// const ratingbtnd2 = document.querySelector('#ratingbtn2');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const test = document.querySelector('.test');

const title1 = document.querySelector('#title1');
const title2 = document.querySelector('#title2');

const year = document.querySelector('#year')

const cast1 = document.querySelector('#cast1')
const cast2 = document.querySelector('#cast2')

const poster1 = document.querySelector('#image1')
const poster2 = document.querySelector('#image2')

const posterLink1 = document.querySelector('#imglink1')
const posterLink2 = document.querySelector('#imglink2')

const resetButton = document.querySelector('#resetbtn');

// ratingbtn.addEventListener('click', checkGuess);
// ratingbtn1.addEventListener('click', checkGuess);
// ratingbtn2.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);
let randomIndex;
let movId;
//let omdb;
//let omdb1;
let rating;

let roundCount = 1;
let userScore = 0;
newRound()

//function Get1(movieId){
    //var Httpreq = new XMLHttpRequest();
    //Httpreq.open("GET",'http://www.omdbapi.com/?apikey=f69f0628&i='+movieId+'&r=json',false);
    //Httpreq.send(null);
    //return JSON.parse(Httpreq.responseText);          
//}
function Get1(movieId){
	fetch('https://www.omdbapi.com/?apikey=44dfdf1a&i='+movieId+'&r=json', {mode: 'cors'})
		.then(function(response) {
				return response.json();
		})
		.then(function(omdb) {
			rating = parseFloat(omdb.imdbRating).toFixed(1);
		title1.textContent = omdb.Title + " (" +omdb.Year+")"
		cast1.textContent = omdb.Actors.split(", ")[0] + ", " + omdb.Actors.split(", ")[1]
		poster1.src = omdb.Poster
		poster1.title = omdb.Plot +" (Country: "+omdb.Country+", Type: "+omdb.Type.charAt(0).toUpperCase() + omdb.Type.slice(1)+", Votes: "+omdb.imdbVotes+", Metacritic: "+omdb.Metascore+")"
		// randBtns(rating)
		})
}

function Get2(movieId){
	fetch('https://www.omdbapi.com/?apikey=44dfdf1a&i='+movieId+'&r=json', {mode: 'cors'})
		.then(function(response) {
				return response.json();
		})
		.then(function(omdb) {
			rating = parseFloat(omdb.imdbRating).toFixed(1);
		title2.textContent = omdb.Title + " (" +omdb.Year+")"
		cast2.textContent = omdb.Actors.split(", ")[0] + ", " + omdb.Actors.split(", ")[1]
		poster2.src = omdb.Poster
		poster2.title = omdb.Plot +" (Country: "+omdb.Country+", Type: "+omdb.Type.charAt(0).toUpperCase() + omdb.Type.slice(1)+", Votes: "+omdb.imdbVotes+", Metacritic: "+omdb.Metascore+")"
		// randBtns(rating)
		})
}

function newRound() {
	randomIndex1 = Math.floor(Math.random() * Math.floor(movieIds.length));
	randomIndex2 = Math.floor(Math.random() * Math.floor(movieIds.length));
	movId1 = movieIds[randomIndex1];
	movId2 = movieIds[randomIndex2];
	Get1(movId1);
	Get2(movId2);
	//omdb1 = Get(movId)
	//rating = parseFloat(omdb.imdbRating).toFixed(1);
	//title.textContent = omdb.Title + " (" +omdb.Year+")"
	//cast.textContent = omdb.Actors.split(", ")[0] + ", " + omdb.Actors.split(", ")[1]
	posterLink1.href = "https://www.imdb.com/title/"+movId1;
	posterLink2.href = "https://www.imdb.com/title/"+movId2;
	
	//poster.src = omdb.Poster
	//poster.title = omdb.Plot +" (Country: "+omdb.Country+", Type: "+omdb.Type.charAt(0).toUpperCase() + omdb.Type.slice(1)+", Votes: "+omdb.imdbVotes+", Metacritic: "+omdb.Metascore+")"
	ratingbtn.style.background=''
	ratingbtn1.style.background=''
	ratingbtn2.style.background=''
	ratingbtn.style.boxShadow=''
	ratingbtn1.style.boxShadow=''
	ratingbtn2.style.boxShadow=''
	lastResult.textContent = (11 - roundCount) +" guesses remaining. Score: "+userScore+"/10"
	//randBtns()
}
function checkGuess() {
	//console.log(rating)
	let userGuess = Number(this.value);
	if (roundCount < 10) {
		if (userGuess.toFixed(1) === rating) {
			//guesses.textContent = 'Correct!';
			//guesses.style.backgroundColor = '#009900';
			this.style.background = '#009900'
			this.style.boxShadow = 'inset 0px -3px 7px 0px #005500'
			userScore++
			roundCount++
			newRound() 
			lastResult.textContent = (11 - roundCount) +" guesses remaining. Score: "+userScore+"/10"
			//lowOrHi.textContent = "Total Guesses: " + roundCount;
		} else if (userGuess !== rating) {
			//guesses.textContent = 'Wrong';
			//guesses.style.backgroundColor = '#990000';
			this.style.background = '#990000'
			this.style.boxShadow = 'inset 0px -3px 7px 0px #550000'
			roundCount++
			lastResult.textContent = (11 - roundCount) +" guesses remaining. Score: "+userScore+"/10"
			//lowOrHi.textContent = "Total Guesses: " + roundCount;
		}
	} else {
	if (userGuess.toFixed(1) === rating) {
		//guesses.style.backgroundColor = '#009900';
		userScore++
		this.style.background = '#009900'
		this.style.boxShadow = 'inset 0px -3px 7px 0px #005500'
			//guesses.textContent = 'Correct - Game Over';
			lastResult.textContent = "You got " + (userScore / roundCount)*100 + "% right!";
			setGameOver();
		} else if (userGuess !== rating) {
			//guesses.style.backgroundColor = '#990000';
			this.style.background = '#990000'
			this.style.boxShadow = 'inset 0px -3px 7px 0px #550000'
			//guesses.textContent = 'Wrong - Game Over';
			lastResult.textContent = "You got " + (userScore / roundCount)*100 + "% right!";
			setGameOver();
		}	    
		}
}
function setGameOver() {
	const resultParas1 = document.querySelector('.resultParas');
	ratingbtn.disabled = true
	ratingbtn1.disabled = true
	ratingbtn2.disabled = true
	//resetButton = document.createElement('button');
	//resetButton.textContent = 'New Game';
	//resetButton.classList.add("ratingbtn");
	//resultParas1.appendChild(resetButton);
	//resetButton.addEventListener('click', resetGame);
}











function resetGame() {
	roundCount = 1;
	userScore = 0;
	ratingbtn.disabled = false
	ratingbtn1.disabled = false
	ratingbtn2.disabled = false
	const resetParas = document.querySelectorAll('.resultParas p');
	for(let i = 0 ; i < resetParas.length ; i++) {
		resetParas[i].textContent = '';
	}
	//resetButton.parentNode.removeChild(resetButton);
	newRound()
}

function randBtns(rating) {
	let start;
	let ratingArr = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10.0]
		let ratingX = [Number(((rating-0.1).toFixed(1))),Number(rating),Number(((Number(rating)+0.1).toFixed(1)))]
	let avail = ratingArr.filter(x => !ratingX.includes(x));
		let availvar = Number(rating) + 1.5
		let availx = avail.filter(function(x) { return x < availvar });	
	let availy = avail.filter(function(x) { return x > (rating - 1.5) });		
	let avail2 = availx.filter(x => availy.includes(x))	
	let seed1 = avail2[Math.floor(Math.random() * Math.floor(avail2.length - 1))].toFixed(1)
		let seedArr = [Number(((seed1-0.1).toFixed(1))),Number(seed1),Number(((Number(seed1)+0.1).toFixed(1)))] 
	let avail3 = avail2.filter(x => !seedArr.includes(x));
	let seed2 = avail3[Math.floor(Math.random() * Math.floor(avail3.length - 1))].toFixed(1);
	start = Math.floor(Math.random() * Math.floor(3)) + 1;
	//console.log("Rating: "+rating)
	//console.log("Avail: " +avail)
	//console.log("avail2: "+avail2)
	//console.log("avail3: "+avail3)
	//console.log("seed1: " +seed1)
	//console.log("seed2: "+seed2)
	
	if (start === 1) {
		ratingbtn.value = rating
		//ratingbtn.onclick= function() {ratingbtn.style.background='#009900'}
		ratingbtn1.value = seed1
		//ratingbtn1.onclick= function() {ratingbtn1.style.background='#990000'}
		ratingbtn2.value = seed2
		//ratingbtn2.onclick= function() {ratingbtn2.style.background='#990000'}
	}
	else if (start === 2) {
		ratingbtn.value = seed1
		//ratingbtn.onclick= function() {ratingbtn.style.background='#990000'}
			ratingbtn1.value = rating
			//ratingbtn1.onclick= function() {ratingbtn1.style.background='#009900'}
			ratingbtn2.value = seed2
			//ratingbtn2.onclick= function() {ratingbtn2.style.background='#990000'}
	}
	else {
		ratingbtn.value = seed1
		//ratingbtn.onclick= function() {ratingbtn.style.background='#990000'}
		ratingbtn1.value = seed2
		//ratingbtn1.onclick= function() {ratingbtn1.style.background='#990000'}
		ratingbtn2.value = rating
		//ratingbtn2.onclick= function() {ratingbtn2.style.background='#009900'}
	}
 }