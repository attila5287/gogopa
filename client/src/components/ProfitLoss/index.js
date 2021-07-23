import React from 'react';
import accounts from './accounts';
// import intuit from './intuit';

export default function ProfitLoss() {
  return (
		<>
			<h1 className='mx-2 far fa-file-alt'>  Profit & Loss</h1>
			<div className='card-columns'>
				{accounts().map((a) => (
					<div className='card bg-secondary mb-3 p-2'>
						<div className='card-header'>
							<span className='text-sm'>Category:</span>
							<span className='text-xl far fa-list-alt text-capitalize'> {a.category}</span>
						</div>
						<div className='card-body'>
							<select className='form-select my-2 py-2'>
								<option hidden>Choose an account</option>
								{a.accounts.map((b) => (
									<option>{b}</option>
								))}
							</select>

							<input
								className='w-100 form-control text-capitalize my-2 py-2'
								type='text'
								defaultValue={'New ' + a.category}
							/>

							<button
								type='button'
								className={'btn btn-lg btn-'+a.style +' btn-primary w-100 text-2xl p-0'}
							>
								<i className={a.icon + ' text-' + a.style}></i>
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

