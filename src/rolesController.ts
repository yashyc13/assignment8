import {pool} from './queries.js';
import {Request,Response} from 'express';

class RolesController{

    public async getRoles(req: Request,res: Response)
    {
        pool.query('SELECT name from roles ORDER BY key ASC',(err,result)=>
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

    public async getRoleKeyByName(req:Request,res:Response)
    {
        const roleName = req.params.name;
        pool.query('SELECT key FROM roles WHERE name = $1',[roleName],(err,result)=>
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

export const roleController = new RolesController();