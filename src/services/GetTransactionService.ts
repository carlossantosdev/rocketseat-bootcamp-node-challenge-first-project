import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface Transactions {
  transactions: Array<Transaction>;
  balance: Balance;
}

class GetTransactionService {
  private repository: TransactionRepository;

  constructor(repository: TransactionRepository) {
    this.repository = repository;
  }

  public execute(): Transactions {
    const transactions = this.repository.all();

    let totalIncome;
    let totalOutcome;
    let total;

    // transactions.reduce();
  }
}

export default GetTransactionService;
