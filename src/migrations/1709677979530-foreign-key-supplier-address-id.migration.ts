import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ForeingKeySupplierAddressId1709677979530
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'supplier',
      new TableForeignKey({
        name: 'fk_supplier_address_id',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
