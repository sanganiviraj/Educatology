export const useradd="USER_ADD";
export const userdelete="USER_DELETE";

let userid=0;

export const Useradddata = (username,number,hobby) => ({
    type: useradd,
    userdatalist:{
        id:++userid,
        username,
        number,
        hobby:'f'
    }
});

export const Userdeletedata = id => ({
    type: userdelete ,
    userdatalist:{
        id,
    }
})


