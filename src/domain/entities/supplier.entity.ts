import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Address } from '@Domain/entities/address.entity';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public uuid: string;

  @Column({ nullable: false })
  public cnpj: string;

  @Column({ nullable: false })
  public fantasyName: string;

  @Column({ nullable: false })
  public socialReason: string;

  @Column({ nullable: false })
  public stateInscription: string;

  @Column({ nullable: false })
  public email: string;

  @Column({ nullable: false })
  public phone: string;

  @Column({ nullable: false })
  public addressId: number;

  @Column({ nullable: false })
  public createdAt: Date;

  @Column({ nullable: false })
  public updatedAt: Date;

  @Column({ nullable: false })
  public createdUser: string;

  @Column({ nullable: false })
  public updatedUser: string;

  @OneToOne(() => Address)
  @JoinColumn()
  public address: Address;
}
