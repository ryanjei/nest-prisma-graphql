import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Post } from './post.model';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async findMany(): Promise<Post[] | null> {
    return this.prisma.post.findMany();
  }

  async create(title: string, content: string): Promise<Post> {
    return this.prisma.post.create({
      data: {
        title,
        content,
      },
    });
  }

  async update(id: number, title: string, content: string): Promise<Post> {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });
  }

  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
