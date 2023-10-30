import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class TableUser20231030154145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'username',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'created_user',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'updated_user',
            type: 'varchar(50)',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'user',
      new TableIndex({
        name: 'index_user_username_email',
        columnNames: ['username', 'email'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE user');
  }
}
