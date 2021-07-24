const mongoose = require('mongoose')

const db_connection = ()=>{
mongoose.connect('mongodb+srv://ines:mongo_db21@cluster0.na9b0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',  
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
  )
.then(()=> {console.log('db_connected')})
.catch(()=>{console.log('error')})
}
module.exports = db_connection