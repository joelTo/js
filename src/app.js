import { RecipesService } from './services/recipes.service';
import { PizzeriaService } from './services/pizzeria.service';

const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

// liste des recettes
recipesService.getRecipesNames()
.then(recipes => {
    $('#recipes')
        .html(recipes.map(recipe => `<li>${ recipe }</li>`).join(''));
    
    $('#recipes')
        .html(recipes.map(recipe => `<li>${ recipe }</li>`).join(''));
})




// pizzeriaService.start(1000);


