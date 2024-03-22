const con = require('mysql')
const cn = con.createConnection(
    {
     host:"localhost", 
     user:"root",
     password:"yourpassword",
     database:"testing"   
    }
)


cn.connect((Error)=>{
    if(Error){
        console.log('DB connection error ');
    }
    else{
        console.log('connected !!');
    }
})


module.exports = cn