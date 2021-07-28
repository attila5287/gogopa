import React, { useEffect } from 'react';
import { ListItem, List } from '../List';
import DeleteBtn from '../DeleteBtn';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_FINANCIALS, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function FinancialsList() {
	const [state, dispatch] = useStoreContext();

	const getFinancials = () => {
		dispatch({ type: LOADING });
		API.getFinancials()
			.then((results) => {
				dispatch({
					type: UPDATE_FINANCIALS,
					financials: results.data
				});
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getFinancials();
	}, []);

	return (
		<div>
			<h1>Financials</h1>
			<h3 className='mb-5 mt-5'>Click on a financial to view</h3>
			{state.financials.length ? (
				<List>
					{state.financials.map((financial) => (
						<ListItem key={financial._id}>
							<Link to={'/financials/' + financial._id}>
								<strong>
									{financial.title} ({financial.company})
								</strong>
							</Link>
						</ListItem>
					))}
        </List>
        
			) : (
				<h3>You haven't added any financials yet!</h3>
			)}
		</div>
	);
}

export default FinancialsList;
