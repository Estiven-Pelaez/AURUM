const express = require('express');
const app = express();
const paymentRoutes = require('./routes/paymentRoutes');
const productRoutes = require('./routes/productRoutes');

// middlewares
app.use(express.json());

// rutas
app.use('/api/payment', paymentRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 500;
app.listen(PORT, () => console.log('Server runing on port ' + PORT));