import { getConnection } from './database/provider';

export const context = async () => {
  const dbConn = await getConnection();

  return { dbConn };
};
