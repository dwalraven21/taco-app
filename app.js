$(() => {
// console.log("up and running!");


//================================
// Functions
//================================
// Allows button to expand and close all recipes at once

const expandAll = () => {
	if ($('.recipe').css('display') === 'none') {
		$('.recipe').css('display', 'block')
		$('.show-recipe').text("Hide Recipe")
	} else {
		$('.recipe').css('display', 'none')
		$('.show-recipe').text("Show Recipe")
	}
}

// Function to show or hide the recipe for the associated Button.
// Takes two parameters: the id for the recipe you want to display or hide and the id for the button that generates a new recipe for that specific type of ingredient. e.g. ('#base-recipe', '#new-base-button')
const showOrHideRecipe = (recipeID, buttonID) => {
	// If recipe is hidden the button will reveal recipe
	if ($(event.target).parent().siblings(recipeID).css('display') === 'none') {
			$(event.target).parent().siblings(recipeID).css('display', 'block')
			// $(event.target).siblings(buttonID).css('display', 'block')
			// and the button text will change to "Hide Recipe"
			$(event.target).text("Hide Recipe")
	// If the recipe is already showing the button will hide it
	} else {
			$(event.target).parent().siblings(recipeID).css('display', 'none')
			// $(event.target).siblings(buttonID).css('display', 'none')
			// and the button text will change to "Show Recipe"
			$(event.target).text("Show Recipe")
	}
}

// Function to update the text field and display the new taco
const changeTacoDescription  = () => {
	$displayName.empty()
	$displayName.text($base + ", with " + $condiment + ", garnished with " + $mixin + ", topped off with " + $seasoning + " and wrapped in delicious " + 	$shell)
	$('.display-full-name').append($displayName)
}

//Function to advance the carousel of images
const $advanceCarousel = () => {
		// current image to hide
		$currentImg.hide()
		//check if the currentIndex is at or below the number of images. If not, reset to zero.
		if (currentIndex < numOfImages) {
			//we want the next image to show
			//increment current image currentIndex
			currentIndex++
		} else {

			currentIndex = 0
		}
		//change the $currentImg
		$currentImg = $('.carousel-images').children().eq(currentIndex)
		$currentImg.show()
	}

setInterval(function(
	){
	$('.next').click()
},4000)

// Event handler to open the modal
const openModal = () => {
// $modal.css('display', 'block');
//Alternate Option: look up the jQuery method .show()
$modal.show()
}

const closeModal = () => {
// $modal.css('display', 'none');
// look up the jQuery method .hide()
$modal.hide()
}


// Create function that populates modal h3 with the name of recipe and the p with the full recipe

const populateModal = (name, recipeID) => {
	const $h3 = $('<h3>').text(name);
	const $p = $('<p>').text($(event.target).parent().siblings(recipeID).text())
	$('#modal-text').empty()
	$('#modal-text').prepend($p)
	$('#modal-text').prepend($h3)
}

const populateModalPrintAll = () => {
	const $h3 = $('<h3>').text($base + ", with " + $condiment + ", garnished with " + $mixin + ", topped off with " + $seasoning + " and wrapped in delicious " + 	$shell);
	const $p = $('<p>').text($allRecipes)
	$('#modal-text').empty()
	$('#modal-text').prepend($p)
	$('#modal-text').prepend($h3)
}

const populateFavoriteModal = () => {
	const $h3 = $('<h3>').text($favoriteRecipeName)
	const $p = $('<p>').text($favoriteRecipe)
	$('#modal-text').empty()
	$('#modal-text').prepend($p)
	$('#modal-text').prepend($h3)
}

//================================
// GLOBAL VARS
//================================

//counter var to keep track of the current image index
let currentIndex = 0
// current image Element
let $currentImg = $('.carousel-images').children().eq(currentIndex)
let numOfImages = $('.carousel-images').children().length - 1
//next button
const $next = $('.next')
//previous button
const $previous = $('.previous')


//names the full taco
let $displayName = $('<p>')

// names of all the taco componants
let $base = '';
let $baseRecipe = '';
let $condiment = '';
let $condimentRecipe = '';
let $mixin = '';
let $mixinRecipe = '';
let $seasoning = '';
let $seasoningRecipe = '';
let $shell = '';
let $shellRecipe = '';
let $allRecipes = [];

//vars for print modal
// var to open print modal
const $openPrint = $('.print');

// var for modal element
const $modal = $('#modal');

// var for button that closes modal
const $closePrint = $('.close');

let $modalText = $("#modal-text")

//vars to help user store a favorite recipe
let $favoriteRecipe = '';
let $favoriteRecipeName = '';
//================================
// Event Listeners & Handlers
//================================

//Save new taco to favorite taco and display Favorite
$(document).on('click', '#favorite', () => {
	localStorage.clear();
	localStorage.setItem('recipeName', $displayName.text())
	localStorage.setItem('recipe', $allRecipes)
	$favoriteRecipeName = localStorage.getItem('recipeName')
	$favoriteRecipe = localStorage.getItem('recipe')
	$('.favoriteName').empty()
	const $p = $('<p>').text($favoriteRecipeName)
	$('.favoriteName').append($p)
	$('.display_favorite_taco').css('display', 'block')

});


// Tried to set up a function to advance carousel after 2 seconds
// setTimeout($advanceCarousel(), 2000);

//print favorite recipes
$('#print-favorite').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateFavoriteModal()
	openModal()

});
//print all recipes
$('#print-all').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModalPrintAll()
	openModal()

});

//print base recipe
$('#print-base').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModal($base, '#base-recipe')
	openModal()

});

//print condiment recipe
$('#print-condiment').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModal($condiment, '#condiment-recipe')
	openModal()

});

//print mixin recipe
$('#print-mix').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModal($mixin, '#mixin-recipe')
	openModal()

});

//print seasoning recipe
$('#print-seasoning').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModal($seasoning, '#seasoning-recipe')
	openModal()

});

//print seasoning recipe
$('#print-shell').on('click', () => {
	// function to populate the modal with a h1 that equals the name of recipe and a p that contains the full recipe
	populateModal($shell, '#shell-recipe')
	openModal()

});

//Add event listener to Close button
$(document).on('click', '#close', () => {
	closeModal()
});

$(document).on('click', '#confirm-print', () => {
	window.print();
})


// Advances carousel when next button is clicked
$next.on('click', () => {
	$advanceCarousel();
})

$previous.on('click', () => {
	// we want the current image to hide
	$currentImg.hide()
	//check if the currentIndex is at or below the number of images. If not, reset to zero.
	if (currentIndex !== 0) {
		//we want the next image to show
		//increment current image currentIndex
		currentIndex--
	} else {

		currentIndex = numOfImages
	}
	//change the $currentImg
	$currentImg = $('.carousel-images').children().eq(currentIndex)
	$currentImg.show()
})

	// Generate All-New Taco on Generate Taco Button Click

	$('#generate-taco').on('click', () => {

		$advanceCarousel();

		$.ajax({
        url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
        dataType: 'json'

    }).then(
        (data)=>{
            $('#base').html(data.base_layer.name);
						$base = data.base_layer.name
						$('#base-recipe').html(data.base_layer.recipe);
						$baseRecipe = data.base_layer.recipe
            $('#condiment').html(data.condiment.name);
						$condiment = data.condiment.name;
						$('#condiment-recipe').html(data.condiment.recipe);
						$condimentRecipe = data.condiment.recipe
            $('#mixin').html(data.mixin.name);
						$mixin = data.mixin.name;
						$('#mixin-recipe').html(data.mixin.recipe);
						$mixinRecipe = data.mixin.recipe
						$('#seasoning').html(data.seasoning.name);
						$seasoning = data.seasoning.name
						$('#seasoning-recipe').html(data.seasoning.recipe);
						$seasoningRecipe = data.seasoning.recipe
						$('#shell').html(data.shell.name);
						$shell = data.shell.name
						$('#shell-recipe').html(data.shell.recipe);
						$shellRecipe = data.shell.recipe

						// Diplay taco Name
						changeTacoDescription();

						$allRecipes.length = 0;
						$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)

					// console.log(data.base_layer.name);

        },
        (error)=>{
            console.log(error);
        })
			// When you generate the taco for the first time, multiple new buttons and sections appear on the screen
			// Name of recipe should appear
			$('.type').css('display', 'block')
			// Show Recipe Button should appear
			$('.show-recipe').css('display', 'block')
			//show favorite button
			$('#favorite').css('display', 'block')
			// show print option
			$('.print').css('display', 'block')
			// show try a different recipe button
			$('.new-recipe').css('display', 'block')
			// show the name of the taco with all componants
			$('.display-full-name').css('display', 'flex')
			// show the expand /close all button
			$('.expand').css('display', 'block')
			// show the print all button
			$('#print-all').css('display', 'block')

	})


	// Show or Hide Recipes (Individually)

	// Base
	$('#show-base-button').on('click', () => {
		showOrHideRecipe('#base-recipe', '#new-base-button')
	})
	// Condiment
	$('#show-condiment-button').on('click', () => {
		showOrHideRecipe('#condiment-recipe', '#new-condiment-button')
	})
	// Mixins
	$('#show-mixin-button').on('click', () => {
		showOrHideRecipe('#mixin-recipe', '#new-mixin-button')
	})
	// Seasoning
	$('#show-seasoning-button').on('click', () => {
		showOrHideRecipe('#seasoning-recipe', '#new-seasoning-button')
	})
	// Shell
	$('#show-shell-button').on('click', () => {
		showOrHideRecipe('#shell-recipe', '#new-shell-button')
	})

// Show or Hide ALl Recipes

$('.expand').on('click', () => {
	expandAll()

})


	// Generate New Recipes for one specifiic ingredient type
	// Could be more DRY

	//
	$('#new-base-button').on('click', () => {
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
				dataType: 'json'
    }).then(
        (data)=>{
            $('#base').html(data.base_layer.name);
						$base = data.base_layer.name
						$('#base-recipe').html(data.base_layer.recipe);
						$baseRecipe = data.base_layer.recipe

						changeTacoDescription();

						$allRecipes.length = 0;
						$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)

        },
        (error)=>{
            console.log(error);
        })
	})
	// Condiment
	$('#new-condiment-button').on('click', () => {
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
				dataType: 'json'
    }).then(
        (data)=>{
					$('#condiment').html(data.condiment.name);
					$condiment = data.condiment.name
					$('#condiment-recipe').html(data.condiment.recipe);
					$condimentRecipe = data.condiment.recipe

					changeTacoDescription();

					$allRecipes.length = 0;
					$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)
        },
        (error)=>{
            console.log(error);
        })
	})
	// Mix-Ins
	$('#new-mixin-button').on('click', () => {
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
				dataType: 'json'
    }).then(
        (data)=>{
					$('#mixin').html(data.mixin.name);
					$mixin = data.mixin.name
					$('#mixin-recipe').html(data.mixin.recipe);
					$mixinRecipe = data.mixin.recipe

					changeTacoDescription();

					$allRecipes.length = 0;
					$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)
        },
        (error)=>{
            console.log(error);
        })
	})
	// Seasoning
	$('#new-seasoning-button').on('click', () => {
		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
				dataType: 'json'
		}).then(
				(data)=>{
					$('#seasoning').html(data.seasoning.name);
					$seasoning = data.seasoning.name
					$('#seasoning-recipe').html(data.seasoning.recipe);
					$seasoningRecipe = data.seasoning.recipe

					changeTacoDescription();

					$allRecipes.length = 0;
					$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)


				},
				(error)=>{
						console.log(error);
				})
	})
	// Shell
	$('#new-shell-button').on('click', () => {

		$.ajax({
				url:'https://taco-randomizer.herokuapp.com/random/',
				type: 'GET',
				dataType: 'json'
		}).then(
				(data)=>{
					$('#shell').html(data.shell.name);
					$shell = data.shell.name
					$('#shell-recipe').html(data.shell.recipe);
					$shellRecipe = data.shell.recipe

					changeTacoDescription();

					$allRecipes.length = 0;
					$allRecipes.push($baseRecipe, $condimentRecipe, $mixinRecipe, $seasoningRecipe, $shellRecipe)

				},
				(error)=>{
						console.log(error);
				})
	})

	if (localStorage.getItem('recipeName') !== null) {
		$favoriteRecipeName = localStorage.getItem('recipeName')
		$favoriteRecipe = localStorage.getItem('recipe')
		const $p = $('<p>').text($favoriteRecipeName)
		$('.favoriteName').empty()
		$('.favoriteName').append($p)
		$('.display_favorite_taco').css('display', 'block')
	}


//=> AirTables Hurts My Brain. Maybe for the next project
	  // $.ajax(
	  //   {
	  //     url: 'https://api.airtable.com/v0/applhpubOTCieAGet/Table%201/recqhnwyeO2mK8ojB',
	  //     headers: {Authorization: "Bearer keyAKIpJ2HOwEqMZM"}
	  //   }
	  // ).then((data) => {
	  //   $favoriteRecipe = data.fields.recipe
		// 	$favoriteRecipeName = data.fields.recipe_name
		// 	$favoriteRecipeType = data.fields.recipe_type
		// 	$contributer = data.fields.contributer
		//
		// 	console.log(data);
	  // })


})
