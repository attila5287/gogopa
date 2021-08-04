import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';

function InfoNote() {
	const [store] = useStoreContext();

	return (
		<p className='text-sm mt-1 mb-2'>
    <i>&middot; Planning &middot; Analytics &middot;</i>
		</p>
	);
}

export default InfoNote;
