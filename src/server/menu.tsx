'use server';

import { sql } from '@vercel/postgres';

const defaultValue = [
  {
    name: 'Menu',
    path: '/menu',
  },
];

async function createTable() {
  try {
    const result = await sql`create table Menu (
        id serial PRIMARY KEY,
        name varchar(200),
        parentId int,
        path varchar(200),
        icon varchar(10),
    );
    insert INTO  Menu (name,parentId,path) values ${defaultValue
      .map((val: any) => ({
        name: val.name,
        parentId: val?.parentId || null,
        path: val?.path || null,
      }))
      .join(', ')}`;
    return result;
  } catch (error: any) {
    console.error(error.code);
    return [];
  }
}

export const getAllMenu = async () => {
  try {
    const result = await sql`select * from Menu`;
    return result.rows;
  } catch (error: any) {
    console.log(error);

    if (error.code == '42P01') {
      await createTable();
      return defaultValue;
    }
    return [];
  }
};
