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
	return (
		<Fragment>
			<h1>CRUD APP</h1>
			<CrudForm />
			<CrudTable data={db} />
		</Fragment>
	)
}

export default CrudApp
