const paymentService = require('../services/paymentService');

exports.processPayment = (req, res) => {
    const { cardDetails, amount } = req.body;

    // llamar servicios para verificar el pago 
    const isSuccesss = paymentService.validateAndProcess(cardDetails, amount);

    if (isSuccesss) {
        return res.status(200).json({ message: 'Pago exitoso' });
    } else {
        return res.status(400).json( { message: 'Error de pago' });
    }
};