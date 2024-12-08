const home = async(req,res) => {
    try{
        res.status(200).send("Welcome by router routing");
    } 
    catch(error){
        console.log(error);
    }
};

// ....................Registration logic...........

const register = ((req,res)=>{
    try {

    } catch{
        res.status(400).send({m})
    }
    res.status(200).send("Welcome to register by router");
});
/* The comment `// Registration logic...........` is simply providing a placeholder or a hint that
suggests that the registration logic should be implemented or added at that point in the code. It
serves as a reminder or a marker for the developer to come back and fill in the registration logic
details in that section of the code. */

module.exports = { home } ;