import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class ForeingKeyStoreAddressId1710342888666
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'store',
      new TableForeignKey({
        name: 'fk_store_address_id',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'address',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
