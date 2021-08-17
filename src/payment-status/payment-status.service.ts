import { Get, Injectable } from '@nestjs/common';
import { Any, Connection, Repository, JoinColumn } from 'typeorm';

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('PaymentBillingV5', 'servp', 'nmnsdklwee', {

  host: '10.5.1.251',
  dialect: 'mssql',
  operatorsAliases: false,
  "dialectOptions": {
    options: { "requestTimeout": 300000 }
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 500000,
    idle: 500000,
  },
});

  
@Injectable()
export class PaymentStatusService {
    constructor(private Connection: Connection) {}
    async GetOrderStatus(req: any, res: any, next: any) {
        try {
          var query = `Exec XPayBill_getvoid_Payment_Status_Code`;
          let data = await this.Connection.query(query);
          return data;
        } catch (err) {
          console.log(err);
        }
      }
    
    // async GetOrderStatus(req: any, res: any, next: any) {
    //     try {
    //       let From_Order_ID=req.query.From_Order_ID;
    //       await sequelize.authenticate();
    //       //sequelize.query(`exec XPayBill_GetPaymentStatusName '${From_Order_ID}'`).then(function (result: any) {
    //         sequelize.query(`exec XPayBill_getvoid_Payment_Status_Code`).then(function (result: any) {
    //         res.json({ data: result, IsSuccess: true });
    //       });
    //     } catch (err: any) {
    //       console.log("err", err);
    //       res.json({
    //         err,
    //       });
    //       return res;
    //     }
    //   }

}
