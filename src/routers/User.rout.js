const express = require("express")
const router = express.Router()
const Cont = require("../controllers/user.con")


router.get('/api', Cont.Getdata)
router.get('/data', Cont.DBDATA)

router.post("/add", Cont.AddData)
router.get("/fetchid/:id", Cont.Fetch_data)
router.put("/update/:id", Cont.Update_Data)
router.delete("/delete/:id", Cont.Delete_data)


module.exports = router


