export const add_api = 'ADD_API';
export const delete_api = 'DELETE_API';
export const add_data = 'ADD_DATA';
export const add_businessdata = 'ADD_BUSINESSDATA';

let bid = 0;

export const add_apidata = datapokemon => ({
  type: add_api,
  apidatalist: {
    // apiid: ++apiid,
    datapokemon,
  },
});

export const add_datas = dp => ({
  type: add_data,
  datalist: {
    dp,
  },
});

export const addingbusinessdata = (name, number) => ({
  type: add_businessdata,
  businessdatalist: {
    bid: ++bid,
    name,
    number,
  },
});
