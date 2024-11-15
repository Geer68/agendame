import { Inject, Injectable } from '@nestjs/common';
import { CreateEntrepreneurshipDto } from './dto/create-entrepreneurship.dto';
import { UpdateEntrepreneurshipDto } from './dto/update-entrepreneurship.dto';
import { ENTREPRENEURSHIP_REPOSITORY } from 'src/core/constants/constants';
import { EntrepreneurshipRepository } from './entrepreneurship.repository';

@Injectable()
export class EntrepreneurshipService {
  constructor(
    @Inject(ENTREPRENEURSHIP_REPOSITORY)
    private readonly entrepreneurshipRepository: EntrepreneurshipRepository,
  ) {}
  create(createEntrepreneurshipDto: CreateEntrepreneurshipDto) {
    return 'This action adds a new entrepreneurship';
  }

  findAll() {
    return `This action returns all entrepreneurship`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrepreneurship`;
  }

  update(id: number, updateEntrepreneurshipDto: UpdateEntrepreneurshipDto) {
    return `This action updates a #${id} entrepreneurship`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrepreneurship`;
  }
}
