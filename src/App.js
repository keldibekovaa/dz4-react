        import React,{Component} from "react";
      

   class EssayForm extends React.Component {
   
    constructor(props) {
      super(props);
      this.state = {
        value:"Я люблю бывать в новых городах и странах. Каждое новое место - это целая история. Сейчас я очень хочу побывать в Абхазии. Недавно я читала журнал о путешествиях и прочитала, что там очень живописная природа. Я бы хотела погулять по спокойным улицам вечерней Гагры. Посетить сухумский зоопарк. Купаться в море и отдыхать на пляже. Мне хочется побывать в Абхазии, еще потому что я мечтаю побывать на озере Рица. Это необыкновенной красоты озеро, которое не замерзает даже зимой. Надеюсь, когда-нибудь моя мечта исполнится."
      
      };
    
      this.handleChange =this.handleChange.bind(this)
      this.handleSubmit =this.handleSubmit.bind(this)
 
   }

   handleChange(event) {
     this.setState({value: event.target.value });
  }


  handleSubmit(event) {
    alert("отправлено " +this.state.value);

    event.preventDefault();
    console.log(this.state.value);

  }

  render() {
    return (
      <div className="area-select" style={{marginLeft:300}} >
        <form onSubmit={this.handleSubmit}>
          <br/>
            <label>
              <h1>input/textarea/select</h1>
              <br></br>
              <p>input</p>
              <input type="text" name="email" placeholder="@email"  />
              <input type="submit" value="отправить " />
              <p>текст</p>
              <textarea value={this.state.value} onChange={this.handleChange} >
                </textarea>
                      <p>ГДЕ БЫ ВЫ ХОТЕЛИ ПУТЕШЕСТВОВАТЬ ?</p>
                  <select value={this.state.value} onChange={this.handleChange}>
                  <option value="LONDON"> LONDON</option>
                  <option value="SEOUL"> SEOUL</option>
                  <option value="SIDNEY"> SIDNEY</option>
                  <option value="PARIS">PARIS </option>
                  <option value="THAILAND">THAILAND</option>
                  <br></br>
            </select>
            </label>
            <input type="submit" value="Отправить "/>
        </form>
     </div>
    )
      }
  };

 export default EssayForm;