const response = (res, statusCode, status, message, data) => {
    // Set the response status code, message, data and status to the response object and send the response to the client
    try {
      return res.status(statusCode).json({
        status,
        message,
        data
      })
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: 'Internal server error',
        data: {
          error: error.message
        }
      })
    }
  }
  
  module.exports = response
  