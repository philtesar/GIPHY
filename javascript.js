     var animals = ["shark", "aligator", "crocodile", "elephant"];

     function displayAnimalImage(animal) {
      var newAnimal = $(this).attr("data-info");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).done(function(response) {
        console.log(response);
        displayGifs(response.data[0].images.downsized.url);
      });
    }

    function renderButtons() {
      $("#animals-view").empty();
      for (var i = 0; i < animals.length; i++) {
        var x = $("<button>");
        x.addClass("animal");
        x.attr("data-name", animals[i]);
        x.text(animals[i]);
        $("#animals-view").append(x);
      }
    }

    function displayGifs(url) {
      $("#animal-images").text(url);
      // var z = $("<img>");
      // x.attr("src", response.data[0].images.downsized.url);

    };

    $("#add-animal").on("click", function(event) {
      // event.preventDefault();
      var animal = $("#animal-input").val().trim();
      animals.push(animal);
      renderButtons();
    });

    $(document).on("click", ".animal", function(event) {
      var animal = $(this).attr("data-name");
      displayAnimalImage(animal);
    });

    renderButtons();

    console.log(animals);