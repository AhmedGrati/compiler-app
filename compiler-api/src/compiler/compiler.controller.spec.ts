import { Test, TestingModule } from '@nestjs/testing';
import { CompilerController } from './compiler.controller';

describe('CompilerController', () => {
  let controller: CompilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompilerController],
    }).compile();

    controller = module.get<CompilerController>(CompilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
