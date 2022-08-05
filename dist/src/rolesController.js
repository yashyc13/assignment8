var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pool } from './queries.js';
class RolesController {
    getRoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            pool.query('SELECT name from roles ORDER BY key ASC', (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).json(result.rows);
                }
            });
        });
    }
    getRoleKeyByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const roleName = req.params.name;
            pool.query('SELECT key FROM roles WHERE name = $1', [roleName], (err, result) => {
                if (err) {
                    throw err;
                }
                else {
                    res.status(200).send(result.rows);
                }
            });
        });
    }
}
export const roleController = new RolesController();
//# sourceMappingURL=rolesController.js.map