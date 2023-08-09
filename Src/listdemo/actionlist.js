export const add_list = 'ADD_LIST';
export const delete_list = 'DELETE_LIST';

let idlist = 0;

export const addlistdata =(name,number) => ({
  type: add_list,
  datalist: {
    id: ++idlist,
    name,
    number
  },
});

export const deletelistdata = id => ({
  type: delete_list,
  datalist: {
    id,
  },
});
