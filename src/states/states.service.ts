import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import {State} from "./entities/state.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class StatesService {

  constructor(
      @InjectRepository(State)
      private statesRepository: Repository<State>,
  ) {
  }
  create(createStateDto: CreateStateDto) {
    const state : State = new State();
    state.isActive = createStateDto.isActive;
    return this.statesRepository.save(state);
  }

  findAll(): Promise<State[]> {
    return this.statesRepository.find();
  }

  findOne(id: number): Promise<State> {
    return this.statesRepository.findOneBy({id})
  }

  update(id: number, updateStateDto: UpdateStateDto){
    return this.statesRepository.update(id,updateStateDto);
  }

  remove(id: number) {
    return this.statesRepository.delete(id);
  }
}
