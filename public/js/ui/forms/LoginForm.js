/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const thisForm = this;
    User.login(data, function(err, response) {
      if (response.success === true) {
        thisForm.element.reset();
        App.setState('user-logged');
        App.getModal('login').close();
      }
    });
  }
}