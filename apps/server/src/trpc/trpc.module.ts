import { Module } from '@nestjs/common';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';
import { UsersService } from '@server/users/users.service';

@Module({
  imports: [],
  providers: [UsersService, TrpcService, TrpcRouter],
})
export class TrpcModule {}
