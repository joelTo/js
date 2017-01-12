class RecipesService {
    constructor(){
        this.recipes = null;
    }

    // return Promise<[recipe]>
    getRecipes() {
        if (this.recipes) return Promise.resolve(this.recipes);

        return fetch('http://localhost:3000/recipes')
        .then(response => response.json())
        .then(recipes => this.recipes = recipes);
    }

    isRecipeCompliant(recipe, pizza) {

    }

    getRecipe(name) {
        return this.getRecipes()
        .then(recipes => recipes.find(recipe => recipe.name === name))
        .catch(this.handleError)
    }

    getRecipesNames() {
        return this.getRecipes()
        .then(recipes => recipes.map(recipe => recipe.name))
        .catch(this.handleError)
    }

    queryRecipes(query) {
        return this.getRecipes()
        .then(recipes =>
            recipes
            .filter(recipe => 
                recipe.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }

    handleError(err) {
        alert('Une erreur est survenue')
    }
}

class PizzeriaService {

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
        // si pizza correspondante est trouvée dans le pool on l'enlève du pool
    }

}