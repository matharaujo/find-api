import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class IndexUserUsernameEmail1709677979526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'user',
      new TableIndex({
        name: 'index_user_username_email',
        columnNames: ['username', 'email'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
