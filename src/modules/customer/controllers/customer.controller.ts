import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { GetReviews } from '../dto/getReviews.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('review')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  create(@Body() createUserDto: GetReviews) {
    return this.customerService.create(createUserDto);
  }

  //   @Get()
  //   findAll() {
  //     return this.usersService.findAll();
  //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.usersService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //     return this.usersService.update(+id, updateUserDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.usersService.remove(+id);
  //   }
}
