import { Injectable } from '@nestjs/common';
//import { NewRecipeInput } from './dto/new-recipe.input';
//import { RecipesArgs } from './dto/recipes.args';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findOneById(id: number): Promise<Author> {
    const obj: any = 
    {
      id: id,
      firstName: "firstName",
      lastName: "lastName"
    }
    return obj;
  }

}
