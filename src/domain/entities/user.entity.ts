import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { DataProtection } from '@Infrastructure/protections/data.protection';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public username: string;

  @Column({ nullable: false })
  public email: string;

  @Column({ nullable: false, transformer: DataProtection })
  public password: string;

  @Column({ nullable: false })
  public createdAt: Date;

  @Column({ nullable: true })
  public updatedAt: Date;

  @Column({ nullable: false })
  public createdUser: string;

  @Column({ nullable: true })
  public updatedUser: string;
}
