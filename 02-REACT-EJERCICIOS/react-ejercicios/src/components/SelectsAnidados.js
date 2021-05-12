import React, { useState } from 'react'
import SelectList from './SelectList'

const SelectsAnidados = () => {
	const [state, setState] = useState('')
	const [town, setTown] = useState('')
	const [suburb, setSuburb] = useState('')

	const TOKEN = '7ff882d9-9074-4aaf-9b33-5f3be3b42e67'

	return (
		<div>
			<h2>Selects Anidados</h2>
			<h3>México</h3>
			<SelectList
				title='estados'
				url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
				handleChange={(e) => {
					setState(e.target.value)
				}}
			/>
			{state && (
				<SelectList
					title='municipios'
					url=''
					handleChange={(e) => {
						setTown(e.target.value)
					}}
				/>
			)}
			{town && (
				<SelectList
					title='colonias'
					url=''
					handleChange={(e) => {
						setSuburb(e.target.value)
					}}
				/>
			)}
			<pre>
				<code>
					{state} - {town} – {suburb}
				</code>
			</pre>
		</div>
	)
}

export default SelectsAnidados
