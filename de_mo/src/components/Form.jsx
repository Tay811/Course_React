import React from 'react'
import './style.css';

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        DateOfB: '',
        phone: '',
        email: '',
        message_01: '',
        message_02: '',
        message_03: '',
    };


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    handelClear = () => {
            this.setState({
            //...this.state,
            firstName: '',
            lastName: '',
            DateOfB: '',
            phone: '',
            email: '', 
            message_01: '',
            message_02: '',
            message_03: '',
            
            })
        document.getElementById("mainInput").reset();
    }

    

    handelSubmit = (e) => {
        const validateFirst = /^[a-z0-9](?:[a-z0-9\s]{0,98}[a-z0-9])?$/.test(this.state.firstName);
        //this.state.firstName.length > 2;
        const validateLast = this.state.lastName.length > 2;
        const dateOf = this.state.DateOfB !== '';
        const isPhone = /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(this.state.phone);
        const isValidEmail = /^(ftp|http|https):\/\/[^ "]+$/.test(
            this.state.email);
        const isMess01 = this.state.message_01 !== '';
        const isMess02 = this.state.message_02 !== '';
        const isMess03 = this.state.message_03 !== '';

        if (!validateFirst) {
            alert('Напишите ваше имя корректно')
            return
        }

        if(!validateLast) {
            alert('Напишите вашу фамилию корректно')
            return
        }

        if(!dateOf) {
            alert('Введите дату')
            return
        }

        if (!isPhone) {
            alert('Некорректный номер')
            return
        }

        if (!isValidEmail) {
            alert('Некорректная почта')
            return
        }

        if (!isMess01) {
            alert('Вы пропустили раздел "О себе"')
            return
        }

        if (!isMess02) {
            alert('Вы пропустили раздел "Стек технологий"')
            return
        }

        if (!isMess03) {
            alert('Вы пропустили раздел "Описание последнего проекта"')
            return
        }

        e.preventDefault();
        const formData = {
            Имя: this.state.firstName,
            Фамилия: this.state.lastName,
            Дата: this.state.DateOfB,
            Телефон: this.state.phone,
            Сайт: this.state.email,
            Биография: this.state.message_01,
            Стек: this.state.message_02,
            Опыт: this.state.message_03,
        }

        //const container = React.createElement('div', {}, formData)

      
        console.log(formData);
      
        this.setState({
                    firstName: '',
                    lastName: '',
                    dateOf: '',
                    phone: '',
                    email: '',
                    message_01: '',
                    message_02: '',
                    message_03: '',
        
        });
                
                //Form.reset();
                alert('Данные отправлены');
    };

   

    
    render() {
        const{firstName, lastName, DateOfB, phone, email, message_01, message_02, message_03} = this.state;

        return <div className='form'>
        <h1> Анкета </h1>
        <form id="mainInput">
            <label>
            <h2>Имя</h2>
            <br/>
            <input
                id="mainInput"
                type='text'
                name='firstName' required
                placeholder='Ваше имя'
                value={firstName}
                onChange={this.handleChange}
               
            />
            </label>
            <br/>
            <label>
            <h2>Фамилия</h2>
            <br/>
            <input
                id="mainInput"
                type='text'
                name='lastName' required
                placeholder='Ваша фамилия'
                value={lastName}
                onChange={this.handleChange}
                
            />
            </label>
            <br />
            <label>
            <h2>Дата рождения</h2>
            <br/>
            <input

                id="mainInput"
                type='date'
                name='DateOfB' 
                placeholder='Date'
                value={DateOfB}
                onChange={this.handleChange}
            />
            </label>
            <br />
            <label>
            <h2>Телефон</h2>
            <br/>
            <input
            id="mainInput"
                type='tel'
                name='phone'
                value={phone}  
                onChange={this.handleChange}
                placeholder='7-7777-77-77'
               
          />
          </label>
          <br />
          <label>
          <h2>Сайт</h2>
          <br/>
          <input   
          id="mainInput"  
                type='url'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder="Сайт"
                required
          /> </label>
          <br />
            <label>
            <h2>О себе</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_01'
                value={message_01}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о себе"
                
            />
            </label>
            <br />
            <label>   
            <h2>Стек технологий</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_02'
                value={message_02}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о технологиях"
                
            />     
            </label> 
            <br />
            <label>   
            <h2>Описание последнего проекта</h2>
            <br />
            <textarea 
            id="mainInput"
                type='text'
                name='message_03'
                value={message_03}
                onChange={this.handleChange}
                rows='7'
                placeholder="Напишите о последнем проекте"
                
            />     
            </label> 
            <br />
            <div className='all_btn'>
            <button className='btn' onClick={this.handelClear}>Отмена</button>
            <button className='btn' onClick={this.handelSubmit}>Сохранить</button> 
            
            </div>
            </form>
            {/* <div class='aplication'>
            <table>
            <tbody>
            <tr>
      <td>Имя</td>
      <td>${name}</td>
    </tr>
    <tr>
      <td>Фамилия</td>
      <td>Ячейка 5</td> 
    </tr>
    <tr>
      <td>Дата рождения</td>
      <td>Ячейка 8</td> 
    </tr>
    <tr>
      <td>Телефон</td>
      <td>Ячейка 5</td>
    </tr>
    <tr>
      <td>Сайт</td>
      <td>Ячейка 8</td> 
    </tr>
    <tr>
      <td>О себе</td>
      <td>Ячейка 5</td>  
    </tr>
    <tr>
      <td>Стек технологий</td>
      <td>Ячейка 8</td>  
    </tr>
    <tr>
      <td>Последний проект</td>
      <td>Ячейка 5</td>
    </tr>
  </tbody>
            </table>

            </div>
             */}
        </div>
    }
}

export {Form}