import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentStatusModule } from './payment-status/payment-status.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '10.1.5.238',
      port: 1433,
      username: 'servp',
      password: 'nmnsdklwee',
      database: 'PaymentBillingV5',
      requestTimeout: 300000,
      entities: ['./dist/**/entities/*.entity{.ts,.js}'],
      //entities: [Student, StudentStatus],
      autoLoadEntities: true,
      synchronize: false,
      //trustServerCertificate: true,
      options: { useUTC: true },
    }),
    PaymentStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
