import { WsException } from '@nestjs/websockets';
import { ArgumentsHost, Catch, WsExceptionFilter } from '@nestjs/common';

@Catch()
export class WebSocketExceptionFilter implements WsExceptionFilter {
  catch(_exception: WsException, host: ArgumentsHost) {
    const socket = host.switchToWs().getClient();
    socket.emit('exception', {
      status: 'error',
      message: 'Ws message is invalid',
    });
  }
}
