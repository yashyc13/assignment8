var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function findIndexByID(id, users) {
    return users.findIndex((user) => user.id === id);
}
export function getRoleList(myURL) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(myURL + '/roles');
        const data = yield response.json();
        const roleList = [];
        for (let i = 0; i < data.length; i++) {
            roleList.push(data[i].name);
        }
        return roleList;
    });
}
export function getRoleKey(myURL, role) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(myURL + '/roles/' + `${role}`);
        const data1 = yield res.json();
        return data1;
    });
}
export function getCustomerList(myURL) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(myURL + '/customers');
        const data1 = yield res.json();
        const customerList = [];
        for (let i = 0; i < data1.length; i++) {
            customerList.push(data1[i].name);
        }
        return customerList;
    });
}
export function getCustomerIdByName(myURL, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(myURL + '/customers/' + `${name}`);
        const data1 = yield res.json();
        return data1;
    });
}
//# sourceMappingURL=findOperations.js.map