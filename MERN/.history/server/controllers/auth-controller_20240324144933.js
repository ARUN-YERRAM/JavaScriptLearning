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
    res.status(200).send("Welcome to register by router");
});

module.exports = { home } ;