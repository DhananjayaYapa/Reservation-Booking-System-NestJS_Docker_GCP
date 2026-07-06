import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreateChargeDto } from './dto/create-charge.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  @UsePipes(new ValidationPipe())
  async createCharge(@Payload() data: CreateChargeDto) {
    return this.paymentsService.createCharge(data);
  }
}
