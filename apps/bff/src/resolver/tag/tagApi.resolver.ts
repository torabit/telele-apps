import { UseInterceptors } from '@nestjs/common';
import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { TagApiService } from './tagApi.service';
import { TagInterceptor } from 'src/interceptor/tag.interceptor';
import { TagsInterceptor } from 'src/interceptor/tags.interceptor';

@Resolver('TagApi')
export class TagApiResolver {
  constructor(private readonly tagApiService: TagApiService) {}

  @Query('getTag')
  @UseInterceptors(TagInterceptor)
  getTag(@Args('tagId', Int) id: number, @Args('tagName') name: string) {
    const fetchedTag = this.tagApiService.getTag({ id, name });

    return fetchedTag;
  }

  @Query('listTag')
  @UseInterceptors(TagsInterceptor)
  listTag(
    @Args('tagIds') tagIds: number[],
    @Args('tagNames') tagNames: string[],
    @Args('tagCategoryId') tagCategoryId: number,
    @Args('tagCategoryName') tagCategoryName: string,
    @Args('gameId') gameId: number,
  ) {
    const ids = tagIds ? { ids: tagIds } : null;
    const names = tagNames ? { names: tagNames } : null;

    const fetchedTags = this.tagApiService.listTag({
      tagIds: ids,
      tagNames: names,
      tagCategoryId,
      tagCategoryName,
      gameId,
    });

    return fetchedTags;
  }
}
