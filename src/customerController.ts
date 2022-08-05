import {pool} from './queries.js';
import {Request,Response} from 'express';

class CustomerController{
public async getCustomers(req: Request,res: Response)
    {
        pool.query('SELECT name from customer ORDER BY id ASC',(err,result)=>
        {
            if(err)
            {
                throw err;
            }
            else
            {
                res.status(200).json(result.rows);
            }
        })
    }
    public async getCustomerIdByName(req:Request,res:Response)
    {
        const customerName = req.params.name;
        pool.query('SELECT id FROM customer WHERE name = $1',[customerName],(err,result)=>
        {
            if(err)
            {
                throw err;
            }
            else
            {
                res.status(200).send(result.rows);
            }
        })
    }

}


export const customer = new CustomerController();