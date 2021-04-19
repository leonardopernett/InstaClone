const mongoose = require('mongoose')


mongoose.connect(process.env.DB_DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})
.then(()=>console.log('db is connected'))
.catch((e)=>console.log(e)) 