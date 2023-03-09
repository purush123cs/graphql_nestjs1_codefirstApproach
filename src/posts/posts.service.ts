import { Injectable } from '@nestjs/common';
//import { NewRecipeInput } from './dto/new-recipe.input';
//import { RecipesArgs } from './dto/recipes.args';
import { Post } from './models/post.model';
import { GetPostArgs } from './dto/get-post.args';
import { UpvotePostInput } from './dto/upvote-post-input.args';

@Injectable()
export class PostsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async findAll(getPostArgs: GetPostArgs): Promise<Post> {
    const obj: any =
    [
      {
      id: 1,
      title: "title",
      votes: 10
      },
      {
        id: 2,
        title: "title",
        votes: 21
      }
    ];
      
    return obj;
  }

  async upvoteById(postId: number): Promise<Post> {
    const obj: any =
      {
      id: postId,
      title: "title",
      votes: 10
      };
      
    return obj;
  }

}
