const db = require(`../../data/db-config`)

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');

}

const getById = id => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  // insert into accounts (name budget vales
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create,
};
