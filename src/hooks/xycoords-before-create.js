// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data } = context;

    // Throw an error if we didn't get a text
    if (!data.xValue) {
      throw new Error("An xValue coordinate must be set. "+Object.keys(data));
    }
    if (!data.yValue) {
      throw new Error("A yValue coordinate must be set. "+Object.keys(data));
    }
    context.data.createdAt = new Date().getTime();

    return context;
  };
};
