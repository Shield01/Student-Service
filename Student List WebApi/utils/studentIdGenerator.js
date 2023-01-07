const { customAlphabet } = require("nanoid");

const generateTransactionReference = (id_prefix) => {
    const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-', 20);

    const id = nanoid();

    const prefix = id_prefix.toUpperCase();

    const student_id = `${prefix}-${id}`;

    return student_id;
}

module.exports = generateTransactionReference;