import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableSupplier1709677979528 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'supplier',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'uuid',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'cnpj',
            type: 'varchar(14)',
            isNullable: false,
          },
          {
            name: 'fantasy_name',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'social_reason',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'state_inscription',
            type: 'varchar(14)',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar(90)',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar(90)',
            isNullable: false,
          },
          {
            name: 'address_id',
            type: 'int',
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
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
