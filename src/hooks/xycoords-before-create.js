// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    const { data } = context;

    // Throw an error if we didn't get a text
    if (!data.x) {
      throw new Error("An X coordinate must be set.");
    }
    if (!data.x) {
      throw new Error("A Y coordinate must be set.");
    }
    context.data.createdAt = new Date().getTime();

    return context;
  };
};
