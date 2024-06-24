import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UpdateUserInput } from 'src/graphql';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query('user')
  getUser(@Args('id') id: number) {
    return this.userService.findUser(id);
  }

  @Mutation('updateUser')
  updateUser(@Args('id') id: number, @Args('input') input: UpdateUserInput) {
    return this.userService.updateUser(id, input);
  }
}
