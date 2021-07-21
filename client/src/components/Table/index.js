import React from 'react';
// import { useStoreContext } from '../../ut  ils/GlobalState';
// import { Animated } from 'react-animated-css';

function Table() {
  return (
		<div>
			<table className='table table-striped table-bordered table-sm table-hover my-3 shadow'>
				<caption>
					<i className='fas fa-info-circle mx-2'></i>
					<i>
						<small>
							Use spreadsheet-style form to enter data pre-requisite for data
							visualization.
						</small>
					</i>
				</caption>
				<thead className='shadow'>
					<tr className='my-0 py-0 text-info'>
						<th
							scope='col'
							className='text-center bg-secondary'
							data-toggle='tooltip'
							title='edit figures on the table cells'
						>
							<i className='fas fa-ruler-combined text-2xl'> </i>
						</th>

						<th scope='col' className='text-center bg-secondary'>
							<i className='fas fa-ruler-horizontal mx-1'> </i>
							Q1
						</th>

						<th scope='col' className='text-center bg-secondary'>
							<i className='fas fa-ruler-horizontal mx-1'> </i>
							Q2
						</th>
						<th scope='col' className='text-center bg-secondary'>
							<i className='fas fa-ruler-horizontal mx-1'> </i>
							Q3
						</th>
						<th scope='col' className='text-center bg-secondary'>
							<i className='fas fa-ruler-horizontal mx-1'> </i>
							Q4
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='table-info'>
						<th
							scope='row'
							className='align-middle d-flex flex-row justify-content-start align-items-center text-sm'
						>
							<i className='fas fa-ruler-vertical text-info mx-1'></i>
							Gross Sales
						</th>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
								type='text'
								defaultValue='3,954,888'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
								type='text'
								defaultValue='3,111,456'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
								type='text'
								defaultValue='3,157,123'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center  text-info'
								type='text'
								defaultValue='3,541,321'
							></input>
						</td>
					</tr>
					<tr className='table-info'>
						<th
							scope='row'
							className='align-middle d-flex flex-row justify-content-start align-items-center text-sm'
						>
							<i className='fas fa-ruler-vertical text-info mx-1'></i>
							Fixed Cost
						</th>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,519,681'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,911,658'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,155,668'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,584,441'
							></input>
						</td>
					</tr>
					<tr className='table-info'>
						<th
							scope='row'
							className='align-middle d-flex flex-row justify-content-start align-items-center text-sm'
						>
							<i className='fas fa-ruler-vertical text-info mx-1'></i>
							Operations Cost
						</th>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,123,456'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,159,658'
							></input>
						</td>
						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,159,228'
							></input>
						</td>

						<td>
							<input
								className='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
								type='text'
								defaultValue='1,159,228'
							></input>
						</td>
					</tr>
					<tr className='table-info text-sm'>
						<th scope='row' className='text-center'>
							<span className='mx-1'>&Sigma;=</span>
						</th>
						<td>
							<i> 1,311,751 </i>
						</td>
						<td>
							<i> 40,140 </i>
						</td>
						<td>
							<i> 842,227 </i>
						</td>
						<td>
							<i> 797,652 </i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
