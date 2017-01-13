import { RecipesService } from '../src/services/recipes.service';

describe("RecipesService", function() {
  let recipesService;

  beforeEach(function(done) {
    recipesService = new RecipesService();
  });

  it("recipesService instance", function() {
    expect(recipesService instanceof RecipesService).toBe(true);
  });

  
});