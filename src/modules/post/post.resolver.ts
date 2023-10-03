import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => Post, { nullable: true })
  async post(@Args('id') id: number): Promise<Post | null> {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post, { nullable: true })
  async createPost(
    @Args('title') title: string,
    @Args('content') content: string | null,
  ): Promise<Post> {
    return this.postService.create(title, content);
  }
}
