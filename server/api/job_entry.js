const add = [
    {
        uri: "/add/current-status",
        query: `INSERT INTO current_status (order_job_number) VALUES (?)`,
        body: ["order_job_number"],
        msg: "order_job_number",
    },
];

const read = [
    {
        uri: "/get/job-entry",
        query: `SELECT * from job_entry`,
    },
    {
        uri: "/get/job-entry/:id/:bl_quantity",
        query: `SELECT * from job_entry where id = ? and bl_quantity = ?`,
        param: ["id", "bl_quantity"],
    },
    {
        uri: "/get/job-entry/:id",
        query: `SELECT * from job_entry where id = ?`,
        param: ["id"],
    },
];

const change = [
    {
        uri: "/change/job-entry/:id",
        query: `UPDATE job_entry SET stevedore_contact_number = ? WHERE id = ?`,
        body: ["stevedore_contact_number"],
        parm: ["id"],
        msg: "id",
    },
];

const remove = [
    {
        uri: "/delete/job-entry/:id/:bl_quantity",
        query: `DELETE FROM job_entry WHERE id = ? and bl_quantity = ?`,
        param: ["id", "bl_quantity"],
        msg: "id",
    },
    {
        uri: "/delete/job-entry/:id",
        query: `DELETE FROM job_entry WHERE id = ?`,
        param: ["id"],
        msg: "id",
    },
];

module.exports = Object.freeze({
    add,
    read,
    change,
    remove,
});
