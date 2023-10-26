import { GetHealthCheckUseCase } from '@Usecases/health/get-health-check.usecase';

describe('[UseCases] - Health - GetHealthCheckUseCase', () => {
  let getHealthCheckUseCase: GetHealthCheckUseCase;

  beforeEach(() => {
    getHealthCheckUseCase = new GetHealthCheckUseCase();
  });

  it('[Execute] - SUCESS', () => {
    const result = getHealthCheckUseCase.execute();

    expect(result).not.toBeNull();
  });
});
