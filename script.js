
part = document.querySelector('.part')
joke = document.querySelector('.joke')
    // console.log(t.value)
    function myFunction() {
        // var x = t.value;
        console.log(part.value)
        if(part.value==""){
            alert("dand")
        }else{
            getJoke(part.value)
        }
      }
      async function getJoke(data){
        console.log(data)
        // var apiURL = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&format=txt&type="+data+"";
        var apiURL = "https://v2.jokeapi.dev/joke/"+data+"?format=txt&type=single";
        // var para = await fetch(apiURL); 
        // document.querySelector(".joke").innerHTML=para;
        var response = await fetch(apiURL);
    var jokeText = await response.text(); // Get the joke text from the response

    // Display the joke in the <h1> tag
    joke.textContent = jokeText;
      }
    