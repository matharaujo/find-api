import { UserRepository } from '@Domain/repositories/user.repository';
import { CreateUserUseCase } from '@Usecases/user/create-user.usecase';

describe('[UseCases] - User - CreateUserUseCase', () => {
  let userRepository: UserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepository = new UserRepository({} as any);
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it('[Execute] - SUCESS', async () => {
    jest
      .spyOn(userRepository, 'save')
      .mockResolvedValue({ uuid: 'uuid' } as any);

    const result = await createUserUseCase.execute({
      name: 'name',
      email: 'email',
      username: 'username',
      password: 'password',
    });

    expect(result).not.toBeNull();
    expect(result.uuid).not.toBeNull();
  });
});
