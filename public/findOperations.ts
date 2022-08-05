import {User} from "./user.js";
export function findIndexByID(id:number,users: User[])
{
    return users.findIndex((user) => user.id === id);
}

export async function getRoleList(myURL:string) 
{  
    const response = await fetch(myURL + '/roles');
    const data = await response.json();
    const roleList = [];
    for(let i=0;i<data.length;i++)
    {
        roleList.push(data[i].name);
    }
    return roleList;
}

export async function getRoleKey(myURL:string,role:string) {
    const res = await fetch(myURL+ '/roles/'+`${role}`);
    const data1 =await res.json();
    return data1;
}

export async function getCustomerList(myURL:string)
{
    const res = await fetch(myURL + '/customers');
    const data1 = await res.json();
    const customerList = [];
    for(let i=0;i<data1.length;i++)
    {
        customerList.push(data1[i].name);
    }
    return customerList;
}

export async function getCustomerIdByName(myURL:string,name:string) {
    const res = await fetch(myURL+'/customers/'+`${name}`);
    const data1 =await res.json();
    return data1;
}
