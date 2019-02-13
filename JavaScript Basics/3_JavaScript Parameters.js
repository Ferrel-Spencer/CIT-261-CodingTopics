/**Parameters
 * Parameters are simply a way to add arguments to a function that are out of it's scope. They come in handy
 * when doing form entry or arrays
 */

function formEntry(fname,bday,lname) {
    var result = [];
    result.append.concat = fname,bday, lname;
    return result;
}
formEntry("Spencer","02/17/1988","Ferrel");

/**
 * The parameters are passed at the time of the call, instead of being defined. This works great when requesting info
 * from the user
 */