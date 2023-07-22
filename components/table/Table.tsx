import { useState } from 'react'
import { titleCase } from '@smitch/js-lib'

interface TableProps {
	className?: string | undefined
	data: any[]
	height?: number | undefined
	width?: number | undefined
	ignore?: string[] | undefined
	caption?: string | undefined
	dividers?: boolean | undefined
}

const Table = ({ className = '', data, height, ignore, caption, dividers }: TableProps) => {
	const [tabledata, setTabledata] = useState(data)
	const [sortby, setSortby] = useState('')
	const [ascending, setAscending] = useState(true)

	const isIgnore = (key: any) => {
		if (!ignore?.length) return false
		if (ignore.indexOf(key) !== -1) return true
		return false
	}

	//let asc: boolean = true
	const sort = (key: string) => {
		let asc: boolean
		if (key === sortby) {
			if (ascending === true) asc = false
			else asc = true
		} else asc = true

		if (asc) setTabledata(data.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0)))
		else setTabledata(data.sort((a, b) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0)))

		setAscending(asc)
		setSortby(key)
	}

	return (
		<div className='overflow-y-auto'>
			<table
				className={`table ${className} ${dividers ? 'dividers' : ''} ${
					height ? 'fixed-height w-full' : ''
				}`}
			>
				{caption && <caption>{caption}</caption>}
				<thead>
					<tr>
						{Object.keys(tabledata[0]).map(
							(key: any, index) =>
								!isIgnore(key) && (
									<th
										key={index}
										onClick={() => sort(key)}
										className={`cursor-pointer hover:text-info
											${typeof data[0][key] === 'number' ? 'justify-end text-end' : 'justify-start text-start'}
										`}
									>
										{titleCase(key)}
									</th>
								)
						)}
					</tr>
				</thead>
				<tbody style={{ height: height }}>
					{tabledata.map((obj, index) => (
						<tr key={index}>
							{Object.keys(obj).map(
								(key, index) =>
									!isIgnore(key) && (
										<td
											key={index}
											className={
												typeof obj[key] === 'number'
													? 'justify-end text-end'
													: 'justify-start text-start'
											}
										>
											{obj[key]}
										</td>
									)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
