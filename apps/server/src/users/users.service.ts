import { Body, Injectable } from '@nestjs/common';

import { User } from '@server/users/users.types';
// line below fixes the problem \/ but shouldn't be needed
// import type { User } from '@server/users/users.types';

@Injectable()
export class UsersService {
  // using @Body purely to show the effect of using any decorator with an imported type
  foo(@Body() user: User) {
    return user;
  }
}
