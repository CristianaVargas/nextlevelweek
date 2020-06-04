import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points'); //Todo point_id deve ser um id valido na tabela points
        table.integer('item_id').notNullable().references('id').inTable('items');
    })
}

export async function down(){}