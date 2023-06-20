import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('./messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages.find((message: { id: string }) => message.id === id);
  }

  async findAll() {
    const contents = await readFile('./messages.json', 'utf-8');
    return JSON.parse(contents);
  }

  async create(content: string) {
    const contents = await readFile('./messages.json', 'utf-8');
    const messages = JSON.parse(contents) as { id: string; content: string }[];
    const uuid = randomUUID();

    messages.push({ id: uuid, content });

    await writeFile('./messages.json', JSON.stringify(messages));
    return { id: uuid, content };
  }
}
