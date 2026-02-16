export const checkToolInput = async (object) => {

    // check name and set a default value
    if(object.name.trim() === ''){
        object.name = 'Guest';
    }

    // check email
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if(!object.email || !emailRegex.test(object.email)){
        alert('Please enter a valid email adress!');
        return false;
    }

    // check title 
    if(!object.title || object.title.trim() === ''){
        alert('Please enter a valid title for your tool!');
        return false;
    }

    // check type 
    const types = ["game" , "education" , "quiz" , "other"];
    if(!types.includes(object.type)){
        alert('Please enter a valid type.')
        return false;
    }

    // check GitHub URL
    const gitRegex = /^https?:\/\/github\.com\/[^/\s]+\/[^/\s]+\/?$/;
    if(!object.gitURL || !gitRegex.test(object.gitURL)){
        alert('Please enter a valid GitHub Repository Link!')
        return false;
    }

    // check thumbnail URL
    // helper function to check if we can use the submitted thumbnail URL
    const isValidThumbnailURL = async (url) => {
    // 1. is the URL valid ?
    try {
        new URL(url);
    } catch {
        return false;
    }

    // 2. is the image able to be loaded ?
    return await new Promise((resolve) => {
        const img = new Image();

        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);

        img.src = url;

        });
    };

    // await Thumbnail-Check
    const thumbnailValid = await isValidThumbnailURL(object.imgURL);
    if (!thumbnailValid) {
        alert("Invalid thumbnail URL!");
        return false;
    }

    //check ageRecommandation
    if(!object.ageRecom ) {
        alert('Please select a valid age recommandation!');
        return false;
    }

    // check description
    const minDescriptionLength = 15;
    if(!object.description || object.description.trim().length < minDescriptionLength){
        alert(`Please enter a description of at least ${minDescriptionLength} characters!`);
        return false;
    }

    //check checkbox
    if(!object.consent){
        alert('Please except the consent.');
        return false;
    }

    // return true if every input is valid
    return true;

}