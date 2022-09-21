const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'crud_produtos',
    port: 5432
});

exports.getProdutos = (req, res) => {
    pool.query('SELECT * FROM crud_produtos ORDER BY id DESC', (err, results) => {
        if (err) {
            res.json({error: err});
        }
        res.status(200).json(results);
    });
};

exports.getProdutosById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM crud_produtos WHERE id = $1', [id], (err, results) => {
        if(err){
            res.json({error: err});
        }
        res.status(200).json(results.rows);
    });
};

exports.createProdutos = (req, res) => {
    const {name, price} = req.body;
    pool.query('INSERT INTO crud_produtos (name, price) VALUES ($1, $2)', [name, price], (err, results) => {
        if(err){
            res.json({error: err});
        }
        res.status(200).json(results);
    });
};

exports.updateProdutos = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, price} = req.body;
    pool.query('UPDATE crud_produtos SET name = $1, price = $2 WHERE id = $3', [name, price, id], (err, results) => {
        if(err){
            res.json({error: err});
        }
        res.status(200).json(`Atualização do ${id}:`, results);
    });
};

exports.deleteProdutos = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM crud_produtos WHERE id = $1', [id], (err, results) => {
        if(err){
            res.json({error: err});
        }
        res.status(200).json(`Detalhes do ${id} removido:`, results);
    });
};