module.exports = {
  groupByAccount: ( c ) => {
    const formatAmount = ( sign, amount ) => {
      // format large numbers with commas
      if ( sign == 'minus' ) {
        return '(' + parseInt( amount ).toLocaleString() + ')'
      } else {
        return parseInt( amount ).toLocaleString()
      }
    };


    const datesArr = c.accounts
					?.flatMap((a) => a.items)
					?.flatMap((i) => i.values)
      ?.flatMap( ( i ) => i.dated );
    
    const datesSet = new Set( datesArr );
    const dates = Array.from( datesSet );
  
    const obj = {}
    const accts = dates.map( ( d ) => {
      const items = c.accounts
      .flatMap( ( a ) => a.items )
      
      if (items.length) {
				formatAmount(
					c.sign,
						(obj[d] = items
							.flatMap((a) => a.values)
							.filter((v) => v.dated == d)
							.flatMap((v) => v.amount)
							.reduce((a, c) => a + c))
				);
			} else {
			}
      return obj;
    } );

    console.log(`accts`, accts[0])

    
    return dates.map(d=>obj[d]);
  },
  groupByCategory: ( c ) => {
    const formatAmount = ( sign, amount ) => {
      // format large numbers with commas
      if ( sign == 'minus' ) {
        return '$ (' + parseInt( amount ).toLocaleString() + ')'
      } else {
        return '$'+parseInt( amount ).toLocaleString()
      }
    };

    const datesArr = c.accounts
            ?.flatMap((a) => a.items)
            ?.flatMap( ( i ) => i.values )
            ?.flatMap( ( i ) => i.dated );
     
    const datesSet = new Set( datesArr );
    const dates = Array.from( datesSet );
  
    const obj = {}
    const accts = dates.map( ( d ) => {
      const items = c.accounts
      .flatMap( ( a ) => a.items )
      const sums = (obj[d] = items
				.flatMap((a) => a.values)
				.filter((v) => v.dated == d)
				.flatMap((v) => v.amount)
				.reduce((a, c) => a + c));
      
      if ( items.length ) {
				obj[d] = formatAmount(
          c.sign,
          sums
				);
			} else {
			}
      return obj;
    } );

    console.log(`accts`, accts[0])

    
    return dates.map(d=>obj[d]);
  },
	styleAmount: (sign) => {
		const d = {
			plus: '',
			minus: ' text-danger'
		};
		return d[sign];
	},
	calculate_progress: (need, coll) => {
		return Math.floor((coll / need) * 100);
	},
	formatAmount: (sign, amount) => {
		// format large numbers with commas
		if (sign == 'minus') {
			return '(' + parseInt(amount).toLocaleString() + ')';
		} else {
			return parseInt(amount).toLocaleString();
		}
	},
	formatDate: (date) => {
		// Using JavaScript Date methods, we get and format the month, date, and year
		// We need to add one to the month since it is returned as a zero-based value
		return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
			// We add five years to the 'year' value to calculate the end date
			new Date(date).getFullYear() + 5
		}`;
	}
};
