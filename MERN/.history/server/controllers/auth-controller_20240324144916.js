const home = async(req,res) => {
    try{
        res.status(200).send("Welcome by router routing");
    } 
    catch(error){
        console.log(error);
    }
};

// ....................Registration logic...........


module.exports = { home } ;