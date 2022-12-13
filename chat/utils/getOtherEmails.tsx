const getOtherEmails = (emails:any, email:any) => {
    return emails?.filter((e:any) => e !== email.email)[0];
    };
export default getOtherEmails;