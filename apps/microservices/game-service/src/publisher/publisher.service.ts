// TODO:Gameを検索する方を優先したため未完成
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Publisher, Prisma } from '@prisma/client_game';

@Injectable()
export class PublisherService {
  constructor(private prisma: PrismaService) {}

  async publisher(
    publisherWhereUniqueInput: Prisma.PublisherWhereUniqueInput,
  ): Promise<Publisher | null> {
    return this.prisma.publisher.findUnique({
      where: publisherWhereUniqueInput,
    });
  }

  async publishers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PublisherWhereUniqueInput;
    where?: Prisma.PublisherWhereUniqueInput;
    orderBy?: Prisma.PublisherOrderByWithRelationInput;
  }): Promise<Publisher[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.publisher.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPublisher(data: Prisma.PublisherCreateInput): Promise<Publisher> {
    return this.prisma.publisher.create({
      data,
    });
  }

  async updatePublisher(params: {
    where: Prisma.PublisherWhereUniqueInput;
    data: Prisma.PublisherUpdateInput;
  }): Promise<Publisher> {
    const { where, data } = params;
    return this.prisma.publisher.update({
      data,
      where,
    });
  }

  async deletePublisher(
    where: Prisma.PublisherWhereUniqueInput,
  ): Promise<Publisher> {
    return this.prisma.publisher.delete({
      where,
    });
  }
}
