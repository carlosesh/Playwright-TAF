import { Departments, Price, PrimePrograms } from '../util';

export const todaysDealsTestData = [
	{
		department: Departments.BOOKS,
		primeProgram: PrimePrograms.PRIME,
		price: Price.UNDER_25
	},
	{
		department: Departments.ELECTRONICS,
		primeProgram: PrimePrograms.PRIME_EARLY_ACCESS_DEALS,
		price: Price.FROM_25_TO_50
	},
	{
		department: Departments.FASHION,
		primeProgram: PrimePrograms.PRIME_EXCLUSIVE_DEALS,
		price: Price.FROM_50_TO_100
	}
];
