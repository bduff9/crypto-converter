'use strict';

const axios = require('axios');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
module.exports = {
  convert: async ctx => {
    //post values
    const amount = ctx.request.body.amount;
    const baseCoin = ctx.request.body.baseCoin;
    const compareCoin = ctx.request.body.compareCoin;
    // fetch all rates in USD
    const baseCoinRate = await getRate(baseCoin);
    const compareCoinRate = await getRate(compareCoin);
    // get rate in crypto currency
    const exchange = await calculateExchange(baseCoinRate, compareCoinRate, amount);

    return exchange;
  },
};

//get exchange rate
async function getRate(coin){
  //API key should be passed along as key in the URL below
  const url = `https://api.nomics.com/v1/currencies/ticker?key=cdb59346243df527fe2aebb1400795dba9c13267&ids=${coin}`;

  console.log({ url });

  const { data } = await axios.get(url);

  return data[0].price;
}

// calculate and return result
async function calculateExchange (base, compare, amount){
  console.log({
    base, compare, amount,
  });

  const rate = base / compare;
  const result = rate * amount

  return result;
}
