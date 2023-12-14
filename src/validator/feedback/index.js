const InvariantError = require('../../exception/InvariantError');
const { FeedbackPayloadSchema } = require('./schema');

const FeedbackValidator = {
  validateFeedbackPayload: (payload) => {
    const validationResult = FeedbackPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = FeedbackValidator;
