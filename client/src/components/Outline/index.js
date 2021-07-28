import React from 'react';
import accountsDemo from '../ProfitLoss/accountsDemo';

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
        { accountsDemo().map( ( a ) => (
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
									<div className='input-group mb-3'>
										<div className='input-group-prepend'>
											<button
												className='btn btn-secondary disabled rounded-lg shadow-none py-2 px-0 h-100'
												type='button'
											>
												<i className='text-lg fas fa-caret-square-right mx-1'></i>
												<span className='mx-1'></span>
											</button>
										</div>
										<input
											type='text'
											className='form-control py-2 px-3'
											placeholder={'New account under ' + a.category}
											aria-label={'New account under ' + a.category}
											aria-describedby='basic-addon2'
										></input>
										<div className='input-group-append'>
											<button
												className='btn btn-outline-primary rounded-lg shadow-none py-2 px-2 h-100'
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
