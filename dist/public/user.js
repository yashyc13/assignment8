/*
enum Role {
    superadmin = 'superadmin',
    admin= 'admin',
    subscriber = 'subscriber'
}
 */
class User {
    constructor(id, firstName, middleName, lastName, email, phone, role, address, customer) {
        this.id = id;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.address = address;
        this.customer = customer;
    }
}
export { User };
//# sourceMappingURL=user.js.map