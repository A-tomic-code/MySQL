function errorHandling(err, req, res, next){
    res.status(500)
    res.json({message: 'INTERNAL SERVER ERROR - ' + err.message})
}

module.exports = errorHandling;