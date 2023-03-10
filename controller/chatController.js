const {Configuration, OpenAIApi} = require('openai')
require("dotenv").config();

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY 
})


const openAi =  new OpenAIApi(configuration);

exports.processChat = async function (req,res,next){


    const requestBody = req.body;

    const question = requestBody.question;
    if(!question||question===""){
        const responseObject={
            hasError:true,
            errorStatus:"Question is required"
        }
        res.send(responseObject);
    }
    else{
        try{
            const completion = await openAi.createCompletion({
                model:"text-davinci-003",
                prompt:question,
                max_tokens:1000,
                temperature:0,
                top_p:1.0,
                frequency_penalty:0.0,
                presence_penalty:0.0,
                
            });
    
            const answer = completion.data.choices[0].text;
            const responseObject={
                hasError:false,
                answer
            }
            res.send(responseObject);
        }
        catch(error){
            const responseObject={
                hasError:true,
                errorStatus:error
            }
            res.send(responseObject);
        }
    }
  
    
    }