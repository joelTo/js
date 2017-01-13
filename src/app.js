import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';

const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

window.toto = function (x) {
     console.log(x);
 }

// liste des recettes
recipesService.getRecipes()
.then(recipes => {
    
    $('#recipes')
        .html(recipes.map(recipe => `
        <li><button onClick="toto('${recipe.name}')">
            ${recipe.name.toUpperCase()}
        </button></li>`));

   

});

//pizzeriaService.start(1000);

//  recipesService.getToppings()
//      .then(toppings => {
//         $('#toppings')
//              .html(recipes.map(recipe => ` <li data-recipe="${ recipe }"> ${ recipe.toUpperCase() } </li>
//              `).join(''));
//     })




