import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import { Animated } from 'react-animated-css';

function Table() {
  return (
		<table className='table table-striped table-bordered table-sm table-hover table-info my-5'>
			<thead className='shadow'>
				<tr className='my-0 py-0 text-info'>
					<th
						scope='col'
						className='text-center bg-secondary text-lg'
						data-toggle='tooltip'
						title='edit figures on the table cells'
					>
						<i className='fas fa-ruler-combined text-2xl'> </i>
					</th>

					<th scope='col' className='text-center bg-secondary text-lg'>
						<i className='fas fa-ruler-horizontal mx-1'> </i>
						Q1
					</th>

					<th scope='col' className='text-center bg-secondary text-lg'>
						<i className='fas fa-ruler-horizontal mx-1'> </i>
						Q2
					</th>
					<th scope='col' className='text-center bg-secondary text-lg'>
						<i className='fas fa-ruler-horizontal mx-1'> </i>
						Q3
					</th>
					<th scope='col' className='text-center bg-secondary text-lg'>
						<i className='fas fa-ruler-horizontal mx-1'> </i>
						Q4
					</th>
				</tr>
			</thead>
			<tbody>
				<tr className='table-info'>
					<th
						scope='row'
						className='align-middle d-flex flex-row justify-content-start align-items-center'
					>
						<i className='fas fa-ruler-vertical text-info text-xl mx-1'></i>
						Gross Sales
					</th>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
							type='text'
							value='3,954,888'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
							type='text'
							data-integer='3111456'
							value='3,111,456'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
							type='text'
							data-integer='3157123'
							value='3,157,123'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center  text-info'
							type='text'
							data-integer='3541321'
							value='3,541,321'
						></input>
					</td>
				</tr>
				<tr className='table-info'>
					<th
						scope='row'
						className='align-middle d-flex flex-row justify-content-start align-items-center'
					>
						<i className='fas fa-ruler-vertical text-info text-xl mx-1'></i>
						Fixed Cost
					</th>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,519,681'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,911,658'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,155,668'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,584,441'
						></input>
					</td>
				</tr>
				<tr className='table-info'>
					<th
						scope='row'
						className='align-middle d-flex flex-row justify-content-start align-items-center'
					>
						<i className='fas fa-ruler-vertical text-info text-xl mx-1'></i>
						Operations Cost
					</th>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							data-integer='1123456'
							value='1,123,456'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							data-integer='3159658'
							value='1,159,658'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							data-integer='1159658'
							value='1,159,658'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							data-integer='1159228'
							value='1,159,228'
						></input>
					</td>
				</tr>
				<tr className='table-info text-ubu text-light text-lg'>
					<th scope='row' className='bg-info text-light py-0'>
						<span className='text-xl mx-1'>&Sigma;=</span>
					</th>
					<td className='bg-info'>$1,311,751</td>
					<td className='bg-info'>$4,359,456</td>
					<td className='bg-info'>$841,797</td>
					<td className='bg-info'>$1,202,778</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
