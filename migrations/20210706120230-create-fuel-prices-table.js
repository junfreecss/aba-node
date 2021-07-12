'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('fuel_prices', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    company_service_id: {
      type: 'int'
    },
    name: {
      type: 'string',
      length: 499
    },
    price: {
      type: 'string'
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      defaultValue: new String('CURRENT_TIMESTAMP')
    }
  });
};

exports.down = function(db) {
  return  db.dropTable('fuel_prices');
};

exports._meta = {
  "version": 1
};
