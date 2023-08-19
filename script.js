let movieData, userInput;

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

$('form').on('submit', handleGetData);

function handleGetData(event){
    event.preventDefault(); //Prevent loads
    userInput = $input.val();

   


    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
    }).then((data) => {
        movieData = data;
        render();
        

    }, (error) => {
        console.log("Error", error);
    })

}

function render(){
   $input.val('');
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
    
}