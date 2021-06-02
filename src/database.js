const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/difer');
then(db => console.log('Ya esta conectado'))
.catch((err) =>console.error(err));
