import React from 'react';
// import { useStoreContext } from '../../utils/GlobalState';
// import { Animated } from 'react-animated-css';

function Table() {
  return (
    <div>  
      <table className='table table-striped table-bordered table-sm table-hover table-info my-3 shadow'>
        <caption>
          <i className='fas fa-info-circle mx-2'></i>
          <i>
            <small>
              Use spreadsheet-style form to enter data pre-requisite for data visualization.
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
						className='align-middle d-flex flex-row justify-content-start align-items-center'
					>
						<i className='fas fa-ruler-vertical text-info mx-1'></i>
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
							value='3,111,456'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-info'
							type='text'
							value='3,157,123'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center  text-info'
							type='text'
							value='3,541,321'
						></input>
					</td>
				</tr>
				<tr className='table-info'>
					<th
						scope='row'
						className='align-middle d-flex flex-row justify-content-start align-items-center'
					>
						<i className='fas fa-ruler-vertical text-info mx-1'></i>
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
						<i className='fas fa-ruler-vertical text-info mx-1'></i>
						Operations Cost
					</th>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,123,456'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,159,658'
						></input>
					</td>
					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,159,228'
						></input>
					</td>

					<td>
						<input
							class='px-0 py-0 w-100 form-control form-control-dark form-control-lg text-md text-center text-danger'
							type='text'
							value='1,159,228'
						></input>
					</td>
				</tr>
				<tr className='text-sm table-info text-ubu'>
					<th scope='row' className='text-xl text-center py-0'>
						<span className='mx-1'>&Sigma;=</span>
					</th>
					<td>
						<i> 1,311,751 </i>
					</td>
					<td>
						<i> 4,359,456 </i>
					</td>
					<td>
						<i> 841,797 </i>
					</td>
					<td>
						<i> 1,202,778 </i>
					</td>
				</tr>
			</tbody>
		</table>
    </div>  
	);
}

export default Table;
