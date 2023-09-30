import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { InhabitantDto, UpdateInhabitantDto } from './dtos';
import { InhabitantServiceInterface } from './interfaces/inhabitant.service.interface';

@Controller('inhabitant')
export class InhabitantController {

    constructor(
        @Inject('InhabitantServiceInterface')
        private inhabitantService: InhabitantServiceInterface) {

    }
    @Get()
    async getAllInhabitant(): Promise<Array<InhabitantDto>> {
        return await this.inhabitantService.getAll();
    }

    @Get(':id')
    async getInhabitant(id: string): Promise<InhabitantDto> {
        return await this.inhabitantService.getById(id);
    }

    @Post(':name')
    async create(@Body() data: UpdateInhabitantDto): Promise<Array<InhabitantDto>> {
        return await this.inhabitantService.createByName(data, '');
    }

    @Put()
    async update(@Body() updateInhabitantDto: UpdateInhabitantDto): Promise<Array<InhabitantDto>> {
        return await this.inhabitantService.updateInhabitant(updateInhabitantDto, '');
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.inhabitantService.deleteById(id, '');
    }
}
