/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const incomeButton = document.querySelector('.create-income-button');
    incomeButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newIncome = App.getModal('newIncome');
      newIncome.open();
    });
    
    const expenseButton = document.querySelector('.create-expense-button');
    expenseButton.addEventListener('click', (event) => {
      event.preventDefault();
      const newExpense = App.getModal('newExpense');
      newExpense.open();
    });
  }
}
