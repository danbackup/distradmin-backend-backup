"use strict";

module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/admins/check",
      handler: "admin.check",
    },
  ],
};
