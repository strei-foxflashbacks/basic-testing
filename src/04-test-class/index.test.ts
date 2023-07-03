// Uncomment the code below and write your tests
import _ from 'lodash';
import {
  getBankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  const initialBalance = 100;
  const myBankAccount = getBankAccount(initialBalance);
  const otherBankAccount = getBankAccount(initialBalance);
  const largeAmount = 1999999999999999;

  test('should create account with initial balance', () => {
    expect(myBankAccount.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => myBankAccount.withdraw(largeAmount)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      myBankAccount.transfer(largeAmount, otherBankAccount),
    ).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => myBankAccount.transfer(100, myBankAccount)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const currentBalance = myBankAccount.getBalance();
    const deposit = 10;

    myBankAccount.deposit(deposit);
    expect(myBankAccount.getBalance()).toBe(currentBalance + deposit);
  });

  test('should withdraw money', () => {
    const currentBalance = myBankAccount.getBalance();
    const withdrawal = 10;

    myBankAccount.withdraw(withdrawal);
    expect(myBankAccount.getBalance()).toBe(currentBalance - withdrawal);
  });

  test('should transfer money', () => {
    const myBalance = myBankAccount.getBalance();
    const otherBalance = otherBankAccount.getBalance();
    const transfer = 10;

    myBankAccount.transfer(transfer, otherBankAccount);
    expect(myBalance - myBankAccount.getBalance()).toBe(
      otherBankAccount.getBalance() - otherBalance,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const mockRandom = jest.spyOn(_, 'random');
    mockRandom.mockReturnValue(10);

    const result = await myBankAccount.fetchBalance();
    expect(typeof result).toBe('number');
    mockRandom.mockClear();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = myBankAccount.getBalance();
    const mockRandom = jest.spyOn(_, 'random');
    mockRandom.mockReturnValue(10);

    await myBankAccount.synchronizeBalance();
    const currentBalance = myBankAccount.getBalance();

    expect(currentBalance).not.toBe(initialBalance);
    mockRandom.mockClear();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const mockRandom = jest.spyOn(_, 'random');
    mockRandom.mockReturnValue(0);
    expect(myBankAccount.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
    mockRandom.mockClear();
  });
});
