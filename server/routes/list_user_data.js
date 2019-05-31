const express = require('express');

const router = express.Router();

const admin = require('firebase-admin');
const serviceAccount = require('../shoelace-6a341-firebase-adminsdk-4r7q2-bc43d3758d.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shoelace-6a341.firebaseio.com"
});

const db = admin.database();

const ref = db.ref("default/X8FecGV2ZFp9Yt1bwX1G");

/* GET a guid. */
router.get('/', function (req, res) {
  const response = [{
    id: 'fake-id',
    name: 'Xingeng Wang',
    template: 'singleImageAd',
    repeat: 'weekly',
    isActivate: true,
    date: Date.now()
  }];
  ref.once("value", function (snapshot) {
    console.log(snapshot.val());
  });
  res.end(JSON.stringify(response));
});

module.exports = router;
