import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class IndexStoreCnpj1710342888665 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'store',
      new TableIndex({
        name: 'index_store_cnpj',
        columnNames: ['cnpj'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
