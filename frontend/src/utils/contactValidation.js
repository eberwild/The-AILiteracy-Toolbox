export const validateContact = (input) => {

    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if(!input.email || input.email.trim() === '' || !emailRegex.test(input.email)){
        return {
            status: false ,
            text: 'Please enter a valid email adress.'
        }
    }

    if(!input.message || input.message.trim() === ''){
        return {
            status: false ,
            text: 'Please enter a message..'
        }
    }

    return {
        status: true
    }

}