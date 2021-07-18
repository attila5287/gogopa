import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import { Animated } from 'react-animated-css';

function Table() {
  return (
		<table className='table table-striped table-hover table-info my-5'>
			<thead className='text-info shadow'>
				<tr>
					<th scope='col'>
						<i className='fab fa-react fa-spin text-lg'> </i>
					</th>
					<th scope='col'></th>
					<th scope='col'>
						Q1
						<i className='fas fa-sort mx-3'></i>
					</th>

					<th scope='col'>
						Q2
						<i className='fas fa-sort mx-3'></i>
					</th>
					<th scope='col'>
						Q3
						<i className='fas fa-sort mx-3'></i>
					</th>
					<th scope='col'>
						Q4
						<i className='fas fa-sort mx-3'></i>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope='row'>Gross Sales</th>
					<td>
						{' '}
						<i className='fas fa-plus'></i>{' '}
					</td>
					<td className='text-dark'>$ 3,514,313 </td>
					<td className='text-dark'>$ 3,653,314 </td>
					<td className='text-dark'>$ 3,232,541 </td>
					<td className='text-dark'>$ 3,921,612 </td>
				</tr>
				<tr>
					<th scope='row'>Fixed Cost</th>
					<td>
						{' '}
						<i className='fas fa-minus'></i>{' '}
					</td>
					<td className='text-danger'>($ 1,614,323) </td>
					<td className='text-danger'>($ 1,353,214) </td>
					<td className='text-danger'>($ 1,432,541) </td>
					<td className='text-danger'>($ 1,521,432) </td>
				</tr>
				<tr>
					<th scope='row'>Operational Cost</th>
					<td>
						{' '}
						<i className='fas fa-minus'></i>{' '}
					</td>
					<td className='text-danger'>($ 2,142,214)</td>
					<td className='text-danger'>($ 2,233,323)</td>
					<td className='text-danger'>($ 2,324,432)</td>
					<td className='text-danger'>($ 2,415,541)</td>
				</tr>

				<tr>
					<th scope='row'>
						<em>Gross Profit</em>
					</th>
					<td>
						{' '}
						<i className='fas fa-equals'></i>{' '}
					</td>

					<td className='text-danger'>
						<i>
							<b> ($242, 224) </b>
						</i>
					</td>
					<td className='text-dark'>
						{' '}
						<i>
							{' '}
							<b> $66, 777 </b>
						</i>
					</td>
					<td className='text-danger'>
						{' '}
						<i>
							{' '}
							<b> ($524, 432) </b>
						</i>
					</td>
					<td className='text-danger'>
						{' '}
						<i>
							{' '}
							<b> ($15, 361) </b>
						</i>
					</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
