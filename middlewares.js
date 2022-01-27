const blocking = (req, res, next) => {
if (validation()) res.redirect("/freez")
else next();
}


const notFound = (req, res, next) => {
    return res.status(404).redirect("/page-not-found")
    }

function validation(){
    var currentDate = new Date();
    if (   
        currentDate.getDay() == 0 ||
        currentDate.getDay() == 6 ||
        currentDate.getHours() < 9 ||
        currentDate.getHours() > 17) 
        {
        return true;
    } 
    else {
        return false
    };
    
}

module.exports = { blocking , notFound}