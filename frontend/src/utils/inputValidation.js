export const checkToolInput = (object) => {

    // check name 
    if(object.name.trim() === ''){
        alert('Please enter a valid userName!');
        return;
    }

    // check email
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if(!emailRegex.text(object.email)){
        alert('Please enter a valid email adress!');
        return;
    }

    // check title 
    if(object.title.trim() === ''){
        alert('Please enter a valid userName!');
        return;
    }
    
}