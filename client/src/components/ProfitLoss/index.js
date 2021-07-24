import React from 'react';
import Outline from '../Outline';
import accounts from './accounts';
// import intuit from './intuit';

export default function ProfitLoss() {
  return (
		<>
			<p>
				<b>
					<i className='far fa-compass mx-1'></i>
					Navigate
				</b>
			</p>
			<select className='form-select my-2 py-2'>
				<option hidden>Choose a report</option>
				<option>Profit & Loss</option>
			</select>
			<div className='text-center'>
				<h1 className='far fa-file-alt text-center m-0 text-center'>
					{' '}
					Profit & Loss
				</h1>
			</div>

			<p>
				<b>
					<i className='far fa-plus-square mx-1'></i>
					Add Item
				</b>
			</p>
			<div className='card-columns card-group'>
				{accounts().map((a) => (
					<div className='card bg-secondary shadow-none mb-3 p-0'>
						<div className='card-header d-flex justify-content-between align-items-center'>
							<span className='mx-1 w-100'>
								<i className='fas fa-plus'></i>{' '}
							</span>
							<select className='form-select rounded-2xl my-0 py-1 shadow-none'>
								<option>{a.category}</option>
							</select>
						</div>
						<div className='card-body form-group'>
							<select className='form-select rounded-2xl my-0 py-1 shadow-none'>
								<option hidden>Choose an account</option>
								{a.accounts.map((b) => (
									<option>{b}</option>
								))}
							</select>

							<input
								className='form-control text-capitalize rounded-2xl my-2 py-2 w-100'
								type='text'
								placeholder={'New ' + a.category}
							/>

							<button
								type='button'
								className={
									'btn btn-lg btn-' +
									a.style +
									' btn-primary w-100 text-2xl p-0'
								}
							>
								<i className={a.icon}></i>
							</button>
						</div>
						<div className='card-footer blockquote-footer'>
							<i class='text-md far fa-question-circle mx-1'></i>
							<i>{a.info}</i>
						</div>
					</div>
				))}
      </div>
      <Outline/>
		</>
	);
}

