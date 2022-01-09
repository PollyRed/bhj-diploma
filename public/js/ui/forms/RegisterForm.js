/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const thisForm = this;
    User.register(data, function(err, response) {
      if (response.success === true) {
        thisForm.element.reset();
        App.setState('user-logged');
        App.getModal('register').close();
      }
    });
  }
}