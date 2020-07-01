 import React, { Component } from 'react'
 
 class FormDemo1 extends Component {
    state ={userName:'',city:''} 
    onChangeHandler =(event)=>{
        //username gelen eventin değeri olucak 
        //username i deiştirmiş oluruz
      //this.setState({userName:event.target.value})
      //name bizim eventimize sebep olan nesnenin ismi
      //value:hedef nesnenin value su
      let name = event.target.name;
       let value = event.target.value;
       //format yazımı!!
       this.setState({[name]:value})
    }
    onSubmitHandler=(event)=>{
     //event : formbilgisi
     
     alert(this.state.userName);
     event.preventDefault()
     
     ;
    }
    render() {
         return (
             <div>
                 <form onSubmit= {this.onSubmitHandler}>
       <h3>User Name</h3>
       <input name ="userName" onChange ={this.onChangeHandler} type ="text"></input>
         <h3>User Name is{this.state.userName}</h3>
         
         <h3>City</h3>
       <input name ="city" onChange ={this.onChangeHandler} type ="text"></input>
         <h3>City is{this.state.city}</h3>
           <input type ="submit" value="Save"></input>
            </form>
             </div>
         )
     }
 }
 export default FormDemo1;