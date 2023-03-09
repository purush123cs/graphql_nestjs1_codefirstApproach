import { Resolver, ResolveField, Query, Args, Parent, Int, ObjectType,
            Mutation } from '@nestjs/graphql';
import { Author } from './models/author.model';
import { AuthorsService } from './authors.service';
import { PostsService } from '../posts/posts.service';
import { Post } from '../posts/models/post.model';
import { GetAuthorArgs } from './dto/get-author.args';
import { UpvotePostInput } from '../posts/dto/upvote-post-input.args';

@Resolver(of => Author)
export class AuthorsPostResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args() args: GetAuthorArgs) {
    return this.authorsService.findOneById(args.id);
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  @Mutation(returns => Post)
  async upvotePost(@Args('upvotePostData') upvotePostData: UpvotePostInput) {
    return this.postsService.upvoteById(upvotePostData.postId);
  }
}