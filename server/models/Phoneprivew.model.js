import mongoose from 'mongoose';

const PhonePreviewSchema = new mongoose.Schema({
  avatar: String,
  username: String,
  bio: String,
  profileTitle: String,
  bgColor: String,
  textColor: String,
  fontColor: String,
  fontChange: {
    id: Number,
    font: String,
    url: String,
  },
  layoutbox: {
    id: String,
    name: String,
    src: String,
  },
  selectedButtonStyle: {
    id: Number,
    backgroundColor: String,
    borderRadius: String,
    border: String,
    boxShadow: String,
    height: String,
  },
  userLinks: [
    {
      title: String,
      url: String,
      icon: String,
    },
  ],
  userShop: [
    {
      name: String,
      price: Number,
      link: String,
    },
  ],
  theam: {
    id: Number,
    name: String,
    bgColor: String,
    barBorder: String,
    barColor: String,
  },
}, { timestamps: true });

export const PhonePreview = mongoose.model('PhonePreview', PhonePreviewSchema);



