// contact.models.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const contactSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  address: String
});
contactSchema.plugin(mongoosePaginate)


const contact = mongoose.model('Contact', contactSchema, 'contacts');
export default contact

