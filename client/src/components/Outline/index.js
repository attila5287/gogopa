import React from 'react';
import accounts from '../ProfitLoss/accounts';

export default function Outline(){
	return (
		<>
			<p>
				<b>
					<i className='fas fa-list-ul mx-1'></i>
					View, Edit or Delete Items
				</b>
			</p>
			<div className='row no-gutters'>
				{accounts().map((a) => (
					<div className='col-6'>
						<h1 className='d-flex flex-row align-items-start'>
							<i className='far fa-caret-square-down text-capitalize'>
								{' '}
								{a.category}
							</i>
						</h1>
						<ul className='list-group bg-transparent border-0 shadow-none'>
							{a.accounts.map((f) => (
								<li className='list-group-item py-0 my-2 border-0'>
									<h5 className=''>
										{' '}
										<i className='fas fa-caret-square-right mx-1'></i>
										{f}
									</h5>
								</li>
							))}
							<li className='list-group-item py-0 my-0 border-0'>
								<h5 className=''>
									<div class='input-group mb-3'>
										<div class='input-group-prepend'>
											<button
												class='btn btn-secondary disabled rounded-lg shadow-none py-2 px-2 h-100'
												type='button'
											>
												<i className='text-xl fas fa-caret-square-right mx-1'></i>
											</button>
										</div>
										<input
											type='text'
											class='form-control py-2 px-3'
											placeholder={'New ' + a.category + ' acct.'}
											aria-label={'New ' + a.category + ' acct.'}
											aria-describedby='basic-addon2'
										></input>
										<div class='input-group-append'>
											<button
												class='btn btn-outline-primary rounded-lg shadow-none py-2 px-2 h-100'
												type='button'
											>
												<i className='fas fa-plus mx-1'></i>
											</button>
										</div>
									</div>
								</h5>
							</li>
						</ul>
					</div>
				))}
			</div>
		</>
	);
};
