import mongoose from "mongoose";
import  contact  from "../models/contact.models.js"


export const getcontacts =  async (req, res) => {
  try {
    // const contacts = await contact.find(); ya jo hai ya data base se data find kar ny k laya hai
    const {page=1,limit=3} = req.query

    const options = {
      page:parseInt(page),
      limit:parseInt(limit),
    }
    // console.log("Fetched Contacts:", contacts); // <-- Add this line
const result = await contact.paginate({},options)
// res.send(result)
    // res.render("home", { contacts });
    res.render("home", { totalDocs: result.totalDocs,
limit: result.limit,
totalPages: result.totalPages,
currentpage: result.page,
counter: result.pagingCounter,
hasPrevPage: result.hasPrevPage,
hasNextPage: result.hasNextPage,
prevPage: result.prevPage,
nextPage: result.nextPage,
contacts:result.docs });
    // res.json(contacts)
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).send("Database error");
  }
}

 export const getcontact= async (req, res) => {
  // const contacts = await contact.findOne({_id:req.params.id})
  // ya id se search kar ka tare ka hai ya dono upr or nachy
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.redirect("404",{message:"Invalid Id"})
  }
  const contacts = await contact.findById(req.params.id);
  res.render("show-contact", { contacts: contacts });
  // res.json(contacts)
}


export const addcontactpage =(req, res) => {
  res.render("add-contact");
}

 export const addcontact =async (req, res) => {
  // ya no data ko store kar ta 
  // 1 
  // const contacts = await contact.insertOne({
  //   first_name:req.body.first_name,
  //   last_name:req.body.last_name,
  //   email:req.body.email,
  //   phone:req.body.phone,
  //   address:req.body.address,
  // });

  // 2
  // const { first_name, last_name, email, phone, address } = req.body;

  // try {
  //   await contact.create({ first_name, last_name, email, phone, address });
  //   res.redirect("/"); // after saving, go to home
  // } catch (err) {
  //   console.error("Error saving contact:", err);
  //   res.status(500).send("Failed to save contact");
  // }
  // 3
  await contact.create(req.body)
  res.redirect("/"); 
}

export const updatecontactpage = async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.redirect("404",{message:"Invalid Id"})
  }
  const contacts = await contact.findById(req.params.id);
 
  res.render("update-contact",{ contacts: contacts });
}

 export const updatecontact =  async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.redirect("404",{message:"Invalid Id"})
  }
  try {
    await contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/"); // 👈 redirect to home page
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send("Error updating contact");
  }
}

export const deletecontact = async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.redirect("404",{message:"Invalid Id"})
  }
  await contact.findByIdAndDelete(req.params.id)
  res.redirect('/')

}