import { Controller, Get } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Connection as conn } from 'typeorm';
import { PaymentStatusService } from '../payment-status/payment-status.service';

@Controller('paymentstatus')
export class PaymentStatusController {
  constructor(
    private connection: Connection,
    private PaymentStatusService: PaymentStatusService,
  ) {}

  @Get('/GetPaymentStatus')
  async GetOrderStatus(req: any, res: any, next: any) {
    var response: any = {
      StatusCode: 200,
    };
    try {
      var result = await this.PaymentStatusService.GetOrderStatus(res,req,next);
      console.log(response.StatusCode);
      response.Data = result;
      console.log(result);
    } catch (e) {
      console.log('An Error Occured: ', e);
    }
    return response;
  }
}

// @Get('/getwayAccount/')
//  async function GetGetwayAccount(req: any, res: any, next: any) {
//   try {
//     let paymentStatusService = new PaymentStatusService();
//     res = paymentStatusService.GetGetwayAccount(req, res, next);
//     var data = await this.PaymentStatusService.GetGetwayAccount();
//     console.log(res);
//     return res;
//   } catch (err) {
//     next(err);
//   }

// }
