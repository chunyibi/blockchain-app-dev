import React, {Component} from 'react';
import './App.css';
import crowdfunding from './crowdfunding';
import web3 from './web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      npo:"",
      receiver:'',
      target:'',
      message:'',
      defaultAccount: '',
      balance:'',
      donors:[],
      status:'',
      donate:'',
      donors_amount:'',
      total_donation:'',
      fd1:'',
      fe2:'',
      personal_refund:'',
      total_refund:'',
      qualified1:'',
    };
  }

  async componentDidMount() {
    const accounts = await window.ethereum.enable();
    const npo = await crowdfunding.methods.show_npo().call();
    const receiver = await crowdfunding.methods.show_receiver().call();
    const target = await crowdfunding.methods.Get_Target_ether().call();
    const total_donation = await crowdfunding.methods.Get_Donation().call();
    const donors = await crowdfunding.methods.show_donors().call();
    const status = await crowdfunding.methods.Get_Status().call();
    const balance = await crowdfunding.methods.Get_current().call();
    const donors_amount =await crowdfunding.methods.Show_DonorsDonation().call();
    const fd1 = await crowdfunding.methods.Get_Feedback1().call();
    const fd2 = await crowdfunding.methods.Get_Feedback2().call();
    const personal_refund = await crowdfunding.methods.Show_personal_Refund().call();
    const total_refund= await crowdfunding.methods.Show_total_Refund().call();

    this.setState({npo:npo,
                   receiver:receiver,
                   target:target,
                   defaultAccount: accounts[0],
                   balance:balance,
                   donors:donors,
                   message:'',
                   status:status,
                   donate:'',
                   donors_amount:donors_amount,
                   total_donation:total_donation,
                   fd1:fd1,
                   fd2:fd2,
                   feedback1:'',
                   feedback2:'',
                   qualified1:'',
                   qualified2:'',
                   personal_refund:personal_refund,
                   total_refund:total_refund,
                  });
  };

  setTarget=async event => {
    event.preventDefault();
    console.log('Set target now...');
    this.setState({message:"Updating..."});
    await crowdfunding.methods.Set_Target_ether(this.state.target).send({
      from: this.state.defaultAccount
    });
    this.setState({message:'Target has been set!'});
  }

  amINpo(address1, address2){
    if (!address1 || !address2 || address1 ==="" || address2 ==="") return false;
    let ad1= address1;
    let ad2 = address2;
    if (ad1.toString().toLowerCase() === ad2.toString().toLowerCase()){
      return true;
    }
    return false;
  };

  amIReceiver(address1, address2){
    if (!address1 || !address2 || address1 ==="" || address2 ==="") return false;
    let ad1= address1;
    let ad2 = address2;
    if (ad1.toString().toLowerCase() === ad2.toString().toLowerCase()){
      return true;
    }
    return false;
  };

  setQuality1 = async event => {
    event.preventDefault();
    console.log('Send qualification review now...');
    this.setState({message:"Updating..."});
    await crowdfunding.methods.Phase1_Qualified(this.state.qualified1).send({
      from: this.state.defaultAccount
    });
    this.setState({message:'Qualification review has been set!'});
  };

  setFeedback1 = async event => {
    event.preventDefault();
    console.log('Send feedback now...');
    this.setState({message:"Updating..."});
    await crowdfunding.methods.Phase1_Feedback(this.state.feedback1).send({
      from: this.state.defaultAccount
    });
    this.setState({message:'Feedback has been set!'});
  };

  setQuality2 = async event => {
    event.preventDefault();
    console.log('Send qualification review now...');
    this.setState({message:"Updating..."});
    await crowdfunding.methods.Phase2_Qualified(this.state.qualified2).send({
      from: this.state.defaultAccount
    });
    this.setState({message:'Qualification review has been set!'});
  };

  setFeedback2 = async event => {
    event.preventDefault();
    console.log('Send feedback now...');
    this.setState({message:"Updating..."});
    await crowdfunding.methods.Phase2_Feedback(this.state.feedback2).send({
      from: this.state.defaultAccount
    });
    this.setState({message:'Feedback has been set!'});
  };

  onDonate =async event => {
    event.preventDefault();
    console.log('Amount to donate is' + this.state.donate);
    const accounts =await web3.eth.getAccounts();
    console.log("total account number is" + accounts.length);
    this.setState({message: 'Waiting...'});
    await crowdfunding.methods.Donated_Amount().send({
      from:accounts[0],
      value: web3.utils.toWei(this.state.donate,'ether')
    });
    this.setState({message: "Thank you! You have made your donation successfully!"})
  };

  refund =async event =>{
    event.preventDefault();
    console.log("Getting refund now...");
    this.setState({message:"Updating..."});

    await crowdfunding.methods.Request_Refund().send({
      from:this.state.defaultAccount,
    });
    this.setState({message:"Refund was success!"});
  };

  render() {
    console.log("npo is"+ this.state.npo);

    return (
      <div>
      <Container className="p-3">
      <div className="App">
        <Jumbotron>
        <h1> GoFundGood</h1>
        <p> a Blockchain Crowdfunding Platform for Public Emergency </p>
        </Jumbotron>    
        <Card>
          <Card.Body>
            <Card.Title>Special thanks to {this.state.npo} to raise money for {this.state.receiver}</Card.Title>
            <Card.Text>
            <p>The process of the GoFundGood:</p>
              <ul>
                <li>Phase 1: Send 50% of the total donation, when reached 60% of the target</li>
                <li>Phase 2: Send rest of the total donation, when reached 100% of the target </li>
             </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      { this.amIReceiver (this.state.defaultAccount, this.state.receiver)
      ?
      <p></p>
      :
      <div>
      { this.amINpo (this.state.defaultAccount, this.state.npo)
        ?
          <div>
            <br/>
            <Form align="middle" onSubmit={this.setTarget}>
                <Form.Label>Since you are the npo, you can set the target</Form.Label>
                 <Form.Control value={this.state.target} onChange={event=> this.setState({target:event.target.value})} placeholder="Enter amount" />
              <Button variant="primary" type="submit">Enter to Set</Button>
            </Form>
          </div>
        :
        <div><p></p></div>
      }
      </div>
      }
      <hr/>
      <p>The target amount is {this.state.target} ether.</p>
      <p>The current donation is {web3.utils.fromWei(this.state.total_donation, 'ether')} ether. </p>
      <p>The remaining balance is {web3.utils.fromWei(this.state.balance,'ether')} ether. </p>
      <p>The project current status is:</p>
        <ul>
          <li>{this.state.status}</li>
        </ul>
      <p>The current feedbacks are: 
        <ul>
          <li>Phase1: {this.state.fd1}</li>
          <li>Phase2: {this.state.fd2}</li>
        </ul>
      </p>
      <p>Donations are made by:<br/>
      <ul>
        {this.state.donors.map((value,index) => {
          return <li key={index}>Donors: {value}</li>
        })}
      </ul>
      </p>
      <hr/>
      { this.amINpo (this.state.defaultAccount, this.state.npo)
        ?
          <p></p>
        :
          <div>
           { this.amIReceiver (this.state.defaultAccount, this.state.receiver)
             ?
             <p></p>
              :
                <div>
                  <Form align="middle" onSubmit={this.onDonate}>
                    <Form.Label>Want to donate for this project?</Form.Label>
                    <Form.Control value={this.state.donate} onChange={event=> this.setState({donate:event.target.value})} placeholder="Enter amount" />
                   <Button variant="primary" type="submit">Enter to Donate</Button>
                  </Form>
                  <br></br>

                  <Button  variant="info" onClick={this.refund}> Get Refund</Button>
                  <p>The refund transaction of {web3.utils.fromWei(this.state.personal_refund,'ether')} ether is completed.</p>
                 </div>
             }
            </div>
      }
      { this.amIReceiver (this.state.defaultAccount, this.state.receiver)
        ?
          <div>
            <lable> Since you are the receiver, you can send qualification reviews and feedbacks. </lable>
            <br></br><br/> 
              <Form onSubmit={this.setQuality1}>
                <Form.Label>Phase 1 qualification review: </Form.Label>
                <Form.Control value={this.state.qualified1} onChange={event=> this.setState({qualified1:event.target.value})} placeholder="Enter number" />
                <Form.Text className="text-muted">
                1: Not Qualified, 2: Qualified
                </Form.Text>
              <Button variant="primary" type="submit">Submit</Button>
              </Form>
              <Form onSubmit={this.setFeedback1}>
                <Form.Label>Phase 1 feedback: </Form.Label>
                <Form.Control value={this.state.feedback1} onChange={event=> this.setState({feedback1:event.target.value})} placeholder="Feedback" />
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
              <br></br>
              <Form onSubmit={this.setQuality2}>
                <Form.Label>Phase 2 qualification review: </Form.Label>
                <Form.Control value={this.state.qualified2} onChange={event=> this.setState({qualified2:event.target.value})} placeholder="Enter number" />
                <Form.Text className="text-muted">
                1: Not Qualified, 2: Qualified
                </Form.Text>
              <Button variant="primary" type="submit">Submit</Button>
              </Form>
              <Form onSubmit={this.setFeedback2}>
                <Form.Label>Phase 2 feedback: </Form.Label>
                <Form.Control value={this.state.feedback2} onChange={event=> this.setState({feedback2:event.target.value})} placeholder="Feedback" />
              <Button variant="primary" type="submit">Submit</Button>
              </Form>
          </div>

        :<p> </p>
      }
      </Container>
      </div>
    );
  }
}

export default App;
