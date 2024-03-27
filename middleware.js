const express = require('express');

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); 
};

const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  };

// Register the logging middleware
// app.use(loggerMiddleware);
module.exports = { 
    loggerMiddleware,
    errorHandler
};