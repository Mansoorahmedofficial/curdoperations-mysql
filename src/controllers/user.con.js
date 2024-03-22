const express = require("express")
const DB  = require("../connections/connect")
const Getdata = async (req, res)=>{
    res.send("hey there api is ready")
}
const DBDATA = async(req, res)=>{
    const query ="select * from student"
    const data = DB.query(query, (Error, reuslt)=>{
   if(Error){
    console.log(Error);
   }
   else{
    res.send(reuslt)
    console.log(reuslt);
   }
    })

    
}
const AddData = async(req, res)=>{
  const name = req.body.name;
  const id = req.body.id;
  const address = req.body.address
  const number = req.body.number
  const user_insert = "insert into student(name,id,address,number) value(?,?,?,?)"
  DB.query(user_insert, [name, id, address, number], (error, result)=>{
    if(error) console.log(error);
    else res.send("done!!")
  })
}


 const Fetch_data = async(req, res)=>{
  const id = req.params.id  //  using id  it can  used as find one 
  const query = "select * from student where id=?"
  await DB.query(query, [id], (error, result)=>{
   if(error) console.log(error);
   else console.log(result); res.send("done")
  })
}
const Update_Data = async(req, res)=>{
  const name = req.body.name;
  const id = req.params.id
  const address = req.body.address
  const number = req.body.number
  const Update_query = "update student set name=?,address=?, number=? where id=?"
  // const Update_query = "SET SQL_SAFE_UPDATES=0 update student set name=?,address=?, number=? where id=? SET SQL_SAFE_UPDATES=1"
  DB.query(Update_query, [name,id, address,number], (error, result)=>{
    if(error) console.log(error);
    else res.send(result.affectedRows + " record(s) updated")
  })
}

const Delete_data = async(req, res)=>{
  const id = req.params.id;
  const Delete_query = "delete from student where id=?"
  DB.query(Delete_query, id, (error,result )=>{
    if(error) console.log(error);
    else console.log(result); res.send(result)
  })
}
module.exports = {Getdata, DBDATA,AddData, Fetch_data,
   Update_Data, Delete_data}