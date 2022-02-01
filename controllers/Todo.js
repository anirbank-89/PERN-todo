var pool = require('../db');

var addData = async (req, res) => {
    try {
        console.log(req.body);

        let newTodo = await pool.query("INSERT INTO todo (description, test_column) VALUES($1, $2) RETURNING *",
            [
                req.body.description,
                req.body.name
            ]
        );

        return res.status(200).json({
            status: true,
            message: "Data added successfully.",
            data: newTodo.rows[0]
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Failed to add data. Server error.",
            error: err.message
        });
    }
}

var getAllData = async (req, res) => {
    try {
        var allData = await pool.query("SELECT * FROM todo");

        return res.status(200).json({
            status: true,
            message: "Data successfully get.",
            data: allData.rows
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Failed to get data. Server error.",
            error: err.message
        });
    }
}

var getDataById = async (req, res) => {
    var id = req.params.id;

    try {
        var doc = await pool.query("SELECT * FROM todo WHERE id=$1", [id]);

        return res.status(200).json({
            status: true,
            message: "Data successfully get.",
            data: doc.rows[0]
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id. Server error.",
            error: err.message
        });
    }
}

var editData = async (req, res) => {
    var id = req.params.id;

    try {
        let edit = await pool.query("UPDATE todo SET description=$1, test_column=$2 WHERE id=$3 RETURNING *",
            [
                req.body.description,
                req.body.name,
                id
            ]);

        return res.status(200).json({
            status: true,
            message: "Data successfully edited.",
            data: edit.rows[0]
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id. Server error.",
            error: err.message
        });
    }
}

var deleteData = async (req, res) => {
    var id = req.params.id;

    try {
        let del = await pool.query("DELETE FROM todo WHERE id=$1 RETURNING *", [id]);

        return res.status(200).json({
            status: true,
            message: "Data successfully deleted.",
            data: del.rows[0]
        });
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            message: "Invalid id. Server error.",
            error: err.message
        });
    }
}

module.exports = {
    addData,
    getAllData,
    getDataById,
    editData,
    deleteData
}