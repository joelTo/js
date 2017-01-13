const recipesService = new RecipesService();
const pizzeriaService = new PizzeriaService(recipesService);

pizzeriaService.start(1000);