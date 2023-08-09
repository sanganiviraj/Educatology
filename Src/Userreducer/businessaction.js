export const businessadd="BUSINESS_ADD";
export const businessdelete="BUSINESS_DELETE";

// let userid=0;
let businessid= 0;

export const Businessadddata = (busername,bnumber,buid,bhobby) => ({
    type: businessadd,
    businesslist:{
        bid:++businessid,
        busername,
        bnumber,
        bhobby:'f',
        buisid : buid
    }
});

export const Businessdeletedata = (bid) => ({
    type: businessdelete ,
    businesslist:{
        bid,
    }
})


