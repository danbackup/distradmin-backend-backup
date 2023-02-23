"use strict";

import { factories } from '@strapi/strapi';

export default factories.createCoreController("api::event-type.event-type", {
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    return convertToDataAndTotal(data, meta);
  },
  async count(ctx) {
    try {
      const { data, meta } = await super.find(ctx);
      return convertToDataAndTotal(data, meta);
    } catch (e) {
      ctx.body = e;
      return;
    }
  },
});

const convertToDataAndTotal = (data, meta) => {
  return { data, total: meta.pagination.total };
};