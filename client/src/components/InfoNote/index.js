import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';

function InfoNote() {
	const [store] = useStoreContext();

	return (
    <i className='text-sm mt-0 mb-5'>
			<b>Gogo</b>
			&middot;
			<b>P</b>
			lanning &middot;
			<b>A</b>
			nalytics &middot;
		</i>
	);
}

export default InfoNote;
