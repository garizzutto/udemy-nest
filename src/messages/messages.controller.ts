import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      {
        id: 1,
        text: 'First message',
      },
      {
        id: 2,
        text: 'Second message',
      },
    ];
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }
}
