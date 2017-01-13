export class PizzeriaService {

    constructor (recipesService) {
        this.pool = [];
        this.recipesService = recipesService;
    }

    start (time) {
        // every time seconds add a new recipe name to the pool
        this.recipesService.getRecipesNames()
        .then(recipesNames => {
            const intervalId = setInterval(() => {
                const index = Math.floor(Math.random() * recipesNames.length);
                const recipeName = recipesNames[index];
                this.pool.push(recipeName);
                console.log('POOL : ', this.pool);

                if (this.pool.length >= 10) {
                    console.log('GAME OVER');
                    clearInterval(intervalId);
                }
            }, time);

        })
    }

    // { id: 1, toppings: ['', ''] }
    sendPizza (pizza) {
        this.recipesService.getRecipes()
        .then(recipes => {
            // if (this.recipesService.isRecipeCompliant(recipe, ))
        })
        console.log('pizza', pizza);
        // si pizza correspondante est trouvée dans le pool on l'enlève du pool
    }

}