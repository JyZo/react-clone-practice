const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// const stripe = require('stripe')();

const Stripe = require('stripe');
const stripe = Stripe(
  'sk_test_51OX6lfEIuGUBwrn0JTDQPn2BvZqoKrw1TGn5B7q4cZwLJy69bKSo5PiisNrCHZLM9xqf5KSLlFsFH8m904soe0Wu003h1IyknK',
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('안녕'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log(' payment.js에서 가져온 total의 양은 다음과 같다!!  ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
