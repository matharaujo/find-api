import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TableAddress1709677979527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
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
            name: 'zip_code',
            type: 'varchar(8)',
            isNullable: false,
          },
          {
            name: 'street',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'complement',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'reference',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'district',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'country',
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
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
