module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'super secret passphrase',
    // Database connection information
    'database': 'mongodb://test:test@ds117605.mlab.com:17605/node-auth-api',
    // Setting port for server
    'port': process.env.PORT || 3000
}