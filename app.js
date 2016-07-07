

    var age = 15;
    var pi = 3.1416000;
    var date = new Date();
    var computeArea = function (l,w) {
        return l * w;
        
    } 
    
    var name = "Aurique John Cespon";
    
    console.log('Age:' + age);
    console.log('PI:' + pi.toFixed(2));
    console.log('Date:' + date);
    console.log('Name:' + name);
    console.log(computeArea (10,60));
    
    var x = 1;
    var y = null;
    var nothing=undefined;
    
    if(x)
        console.log ('x is true');
        
    if(!y)
        console.log ('y is fales');
        
    if(!nothing)
        console.log ('nothing is undefined');    
        
        
 // ======= JSON Javascript Object Notation; 
 
    var jsonObject = {
        name: 'Rique',
        lastname: 'John',
        address: 'Tagbilaran'
       
    };
    
    console.log('Name:' + jsonObject.name);
    console.log('Last Name' + jsonObject.lastname);
    console.log('Address:' + jsonObject.address);
    console.log(jsonObject);
    