import { Injectable } from '@nestjs/common';
import { UsersService } from '@server/users/users.service';
import { initTRPC } from '@trpc/server';

@Injectable()
export class TrpcService {
  constructor(private readonly users: UsersService) {}

  trpc = initTRPC.create();
  procedure = this.trpc.procedure;
  router = this.trpc.router;
  mergeRouters = this.trpc.mergeRouters;
}
