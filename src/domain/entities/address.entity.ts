import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: false })
  public uuid: string;

  @Column({ nullable: false })
  public zipcode: string;

  @Column({ nullable: false })
  public street: string;

  @Column({ nullable: false })
  public number: string;

  @Column({ nullable: true })
  public complement?: string;

  @Column({ nullable: true })
  public reference?: string;

  @Column({ nullable: false })
  public district: string;

  @Column({ nullable: false })
  public city: string;

  @Column({ nullable: false })
  public state: string;

  @Column({ nullable: false })
  public country: string;

  @Column({ nullable: false })
  public createdAt: Date;

  @Column({ nullable: false })
  public updatedAt: Date;

  @Column({ nullable: false })
  public createdUser: string;

  @Column({ nullable: false })
  public updatedUser: string;
}
