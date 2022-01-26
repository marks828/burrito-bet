import { useState, useEffect } from 'react';
import BetData from './BetData';
import NewBet from './NewBet';

const api_base = 'http://localhost:3001';

function BetSheet() {
	const [betData, setBetData] = useState([]);

	useEffect(() => {
		GetBets();
	}, []);

	const GetBets = () => {
		fetch(api_base + '/bets')
			.then((response) => response.json())
			.then((data) => setBetData(data))
			.catch((error) => console.log('Error' + error));
	}

	return (
		<div className='mx-10'>
			<div className='new-bet'>
				<NewBet
					betData={betData}
					setBetData={setBetData}
				/>
			</div>
			{/* bet table div */}
			<div className='bet-table
				grid 
				grid-cols-1
				grid-rows-1
			'>
				<h1>Burrito Bets</h1>
				<table className='table-auto border-collapse border border-slate-400'>
					<thead>
						<tr>
							<th className='
							border border-slate-300
							
							'>Bet</th>
							<th className='
							border border-slate-300
							'>Bettor 1</th>
							<th className='
							border border-slate-300
							'>Bettor 2</th>
							<th className='
							border border-slate-300
							'>Winner</th>
						</tr>
					</thead>
					<tbody>
						{betData.map((bet) => (
							<tr
								key={bet.id}
								className=''
							>
								<td className='
								border border-slate-300
								'>{bet.betDescription}</td>
								<td className='
								border border-slate-300
								text-center
								'>{bet.bettor1}</td>
								<td className='
								border border-slate-300
								text-center
								'>{bet.bettor2}</td>
								<td className='
								border border-slate-300
								text-center
								'>{bet.winner}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{/* bet table end */}
		</div>
	);
}

export default BetSheet;
