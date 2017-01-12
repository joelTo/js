class RecipesService {
    constructor(){}

    // return Promise<[recipe]>
    getRecipes(){
        return fetch('http://localhost:3000/recipes')
            .then(response => response.json())
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

    }

    handleError(err) {
        alert('Une erreur est survenue')
    }
}
