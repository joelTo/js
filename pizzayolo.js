class RecipesService {
    constructor(){
       this.recipes =null;
    }


//recup depuis un serveur retroune une promesse de recettes
    // return Promise<[recipe]>
    getRecipes(){
        if(this.recipes) return  Promise.resolve(this.recipes);
        return fetch('http://localhost:3000/recipes')
            .then(response => response.json())
            .then(recipes => {
                this.recipes =recipes;
               return recipes;
            })
    }


//Retrourne si la pizza crée à toute la liste des toppings à l'interieur
    isRecipeCompliant(recipe, pizza) {

    }


//recup une recette avec son nom. Retourne une promesse
    getRecipe(name) {
        return this.getRecipes()
            .then(recipes => recipes.find(recipe => recipe.name === name))
            .catch(this.handleError)
    }


//recup un tableau de nom de recettes, Retourne une promesse 
    getRecipesNames() {
        return this.getRecipes()
            .then(recipes => recipes.map(recipe => recipe.name))
            .catch(this.handleError)
    }


// recup les recettes dont le nom contient query , retourne une promesse
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


class PizzeriaService {

    constructor(recipesService) {
        this.pool = [];
        this.recipesService = recipesService;
    }

    start (time) {
        // every time seconds add a new recipe name to the pool
        this.recipesService.getRecipesNames()
        .then(recipesNames => {
            setInterval(() => {
                // Permet d'avoir un nombre aléatoire entre 0 - 5.
                const index = Math.floor(Math.random() * recipesNames.length);
                const recipeName = recipesNames[index];
                this.pool.push(recipeName);
                console.log(
                    'POOL : ', 
                    this.pool
                )
            }, time);






}




