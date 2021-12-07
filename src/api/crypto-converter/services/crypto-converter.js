'use strict';

/**
 * crypto-converter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crypto-converter.crypto-converter');
