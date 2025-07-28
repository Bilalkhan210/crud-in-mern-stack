import express from "express"

const router = express.Router()
import{getcontacts,getcontact,addcontactpage,addcontact,updatecontactpage,updatecontact,deletecontact} from '../controllers/contact.controllers.js'

router.get("/",getcontacts);

router.get("/show-contact/:id", getcontact);
router.get("/add-contact", addcontactpage);
router.post("/add-contact", addcontact);

router.get("/update-contact/:id",updatecontactpage);
router.post("/update-contact/:id", updatecontact);

router.get("/delete-contact/:id",deletecontact);

export default router