import { JwtProtection } from '@Infrastructure/protections/jwt.protection';
import { UserRepository } from '@Domain/repositories/user.repository';
import { CreateJwtUseCase } from '@Usecases/jwt/create-jwt.usecase';

describe('[UseCases] - Jwt - CreateJwtUseCase', () => {
  let jwtProtection: JwtProtection;
  let userRepository: UserRepository;
  let createJwtUseCase: CreateJwtUseCase;

  beforeEach(() => {
    jwtProtection = new JwtProtection({} as any);
    userRepository = new UserRepository({} as any);
    createJwtUseCase = new CreateJwtUseCase(jwtProtection, userRepository);
  });

  it('[Execute] - SUCESS', async () => {
    jest
      .spyOn(userRepository, 'findOneByUsername')
      .mockResolvedValue({ uuid: 'uuid' } as any);
    jest.spyOn(jwtProtection, 'signIn').mockResolvedValue('token');

    const result = await createJwtUseCase.execute({
      username: 'username',
      password: 'password',
    });

    expect(result).not.toBeNull();
    expect(result.token).not.toBeNull();
  });
});
