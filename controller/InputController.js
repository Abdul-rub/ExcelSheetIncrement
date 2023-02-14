const  mongoose  = require("mongoose");
const InputModel = require("../model/InputSchema");

//GET ALL CALCDATA
const getAllCalcData = async (req, res) => {
  try {
    const data =await InputModel.find()
    return res.send(data)
  } catch (error) {
    return console.log(error);
  }

  return res.status(200).json();
};

//ADD BLOG  TO SPECIFIC ID
const PostInputData = async (req, res) => {
  const { input } = req.body;

  try {
    
        let valid = await InputModel.findOne({input})
if(valid){
    console.log(valid )
     return res.send(valid);
}



        // Split the input string into an array of substrings
        var substrings = input.split(/([A-Z]+\d+)/);
        
        // Iterate over the substrings and modify any cell references
        for (var i = 0; i < substrings.length; i++) {
          var substring = substrings[i];
          if (/^[A-Z]+\d+$/.test(substring)) {
            // Increment row number
            var column = substring.match(/[A-Z]+/)[0];
            var row = Number(substring.match(/\d+/)[0]);
            row++;
            substrings[i] = column + row;
          }
        }
        
        // Remove last argument "0" if present
        var lastSubstring = substrings[substrings.length - 1];
        if (lastSubstring === "0") {
          substrings.splice(substrings.length - 2, 2);
        }
        
        let result=substrings.join("")
        // Join the substrings back into a single string and return it\
        let data = await InputModel.create({...req.body,output:result}) 
        return res.send(data);
      
  } catch (error) {
    return console.log(error);
  }

};

module.exports = { getAllCalcData, PostInputData };
