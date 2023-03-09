import { Module } from '@nestjs/common';
import { AuthorsPostResolver } from './authors-post.resolver';
import { AuthorsService } from './authors.service';
import { PostsModule } from '../posts/posts.module';

@Module({
    imports: [PostsModule],
    providers: [AuthorsPostResolver, AuthorsService, ],
})
export class AuthorsModule {}