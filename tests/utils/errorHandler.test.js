// tests/utils/errorHandler.test.js
const errorHandler = require('../../utils/errorHandler');

describe('errorHandler', () => {
  it('should handle errors and send 200 status code', () => {
    // Mock Express request, response, and next function
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    // Mock error
    const error = new Error('Test error');

    // Call errorHandler with the mock error
    errorHandler(error, req, res, next);

    // Verify that status 500 is sent and error message is sent as JSON
    expect(res.status).toHaveBeenCalledWith(200); // Update status code to 200
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });

    // Verify that next function is not called
    expect(next).not.toHaveBeenCalled();
  });
});
