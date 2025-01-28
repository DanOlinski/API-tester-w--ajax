const express = require('express');
const router  = express.Router();
const axios = require('axios');


//http://localhost:8110/tester
//API request testers (refresh the page http://localhost:8110/tester then check the console log in the terminal that is serving this app)
router.get('/', (req, res) => {

//----------------------------
// axios.get("http://localhost:8100/notes")
// .then((response) =>{
// // console.log(response.data)
// })


//----------------------------
// const newNotePackage = {
//   user_id: 1,
//   note: "FINAL TEST"
// }
// axios
//   .put(`http://localhost:8100/notes/new`, newNotePackage)
//   .then((resp) =>{
// console.log(resp.data)
// })

//----------------------------
// const deleteNotePackage = {
//   id: 1,
// }
// axios
//   .put(`http://localhost:8100/notes/delete`, deleteNotePackage)
//   .then((resp) =>{
// console.log(resp.data)
// })

//----------------------------
const updateNotePackage = {
  id: 3,
  note: '###########'
}
axios
  .put(`http://localhost:8100/notes/update`, updateNotePackage)
  .then((resp) =>{
console.log(resp.data)
})


//-----------this will appear on browser--------------
res.json("this it an API tester rout")
});

module.exports = router;