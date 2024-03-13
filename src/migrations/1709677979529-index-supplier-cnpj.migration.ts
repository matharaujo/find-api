import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class IndexSupplierCnpj1709677979529 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'supplier',
      new TableIndex({
        name: 'index_supplier_cnpj',
        columnNames: ['cnpj'],
        isUnique: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
