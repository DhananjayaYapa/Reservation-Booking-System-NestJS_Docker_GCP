import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp!: Date;

  @Prop()
  userId!: string;

  @Prop()
  startDate!: Date;

  @Prop()
  endDate!: Date;

  @Prop()
  invoiceId!: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
