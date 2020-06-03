import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private repository: TransactionsRepository;

  constructor(repository: TransactionsRepository) {
    this.repository = repository;
  }

  public execute({ title, value, type }: Request): Transaction {
    if (type === 'outcome') {
      const { total } = this.repository.getBalance();
      if (value > total) throw Error('Insufficient funds');
    }

    return this.repository.create({ title, value, type });
  }
}

export default CreateTransactionService;
