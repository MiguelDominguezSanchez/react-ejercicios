import React, { useState } from 'react'
import { Fragment } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDb = [
	{
		id: 1,
		name: 'Seiya',
		constellation: 'Pegaso',
	},
	{
		id: 2,
		name: 'Shiryu',
		constellation: 'Dragón',
	},
	{
		id: 3,
		name: 'Hyoga',
		constellation: 'Cisne',
	},
	{
		id: 4,
		name: 'Shun',
		constellation: 'Andrómeda',
	},
	{
		id: 5,
		name: 'Ikki',
		constellation: 'Fénix',
	},
]

const CrudApp = () => {
	const [db, setDb] = useState(initialDb)
	const [dataToEdit, setDataToEdit] = useState(null)

	const createData = data => {
		data.id = Date.now()
		// console.log(data)
		setDb([...db, data])
	}
	const updateData = data => {
		let newData = db.map(el => (el.id === data.id ? data : el))
		setDb(newData)
	}
	const deleteData = id => {
		let isDelete = window.confirm(
			`¿Estás seguro de eliminar el registro del id '${id}' ?`
		)

		if (isDelete) {
			let newData = db.filter(el => el.id !== id)
			setDb(newData)
		} else {
			return
		}
	}

	return (
		<Fragment>
			<h1>CRUD APP</h1>
			<article className='grid-1-2'>
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				<CrudTable
					data={db}
					setDataToEdit={setDataToEdit}
					deleteData={deleteData}
				/>
			</article>
		</Fragment>
	)
}

export default CrudApp
