import { EncryptionTransformer } from 'typeorm-encrypted';
import * as dotenv from 'dotenv';
import * as path from 'path';

const env = process.env.NODE_ENV ? `/.env.${process.env.NODE_ENV}` : '/.env';
dotenv.config({ path: path.resolve(process.cwd() + env) });

export const DataProtection = new EncryptionTransformer({
  algorithm: process.env.ENCRYPTION_ALGORITHM,
  key: process.env.ENCRYPTION_KEY,
  iv: process.env.ENCRYPTION_IV,
  ivLength: Number(process.env.ENCRYPTION_IV_LENGHT),
});
