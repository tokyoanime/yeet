import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class BizForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.biz;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  render() {

    const stateList = (
      <select className="bizState" required="required" onChange={this.updateField('biz_state')}>
        <option value="" selected disabled hidden>Select a State</option>
        <option value="AL">Alabama (AL)</option>
        <option value="AK">Alaska (AK)</option>
        <option value="AZ">Arizona (AZ)</option>
        <option value="AR">Arkansas (AR)</option>
        <option value="CA">California (CA)</option>
        <option value="CO">Colorado (CO)</option>
        <option value="CT">Connecticut (CT)</option>
        <option value="DE">Delaware (DE)</option>
        <option value="DC">District Of Columbia (DC)</option>
        <option value="FL">Florida (FL)</option>
        <option value="GA">Georgia (GA)</option>
        <option value="HI">Hawaii (HI)</option>
        <option value="ID">Idaho (ID)</option>
        <option value="IL">Illinois (IL)</option>
        <option value="IN">Indiana (IN)</option>
        <option value="IA">Iowa (IA)</option>
        <option value="KS">Kansas (KS)</option>
        <option value="KY">Kentucky (KY)</option>
        <option value="LA">Louisiana (LA)</option>
        <option value="ME">Maine (ME)</option>
        <option value="MD">Maryland (MD)</option>
        <option value="MA">Massachusetts (MA)</option>
        <option value="MI">Michigan (MI)</option>
        <option value="MN">Minnesota (MN)</option>
        <option value="MS">Mississippi (MS)</option>
        <option value="MO">Missouri (MO)</option>
        <option value="MT">Montana (MT)</option>
        <option value="NE">Nebraska (NE)</option>
        <option value="NV">Nevada (NV)</option>
        <option value="NH">New Hampshire (NH)</option>
        <option value="NJ">New Jersey (NJ)</option>
        <option value="NM">New Mexico (NM)</option>
        <option value="NY">New York (NY)</option>
        <option value="NC">North Carolina (NC)</option>
        <option value="ND">North Dakota (ND)</option>
        <option value="OH">Ohio (OH)</option>
        <option value="OK">Oklahoma (OK)</option>
        <option value="OR">Oregon (OR)</option>
        <option value="PA">Pennsylvania (PA)</option>
        <option value="RI">Rhode Island (RI)</option>
        <option value="SC">South Carolina (SC)</option>
        <option value="SD">South Dakota (SD)</option>
        <option value="TN">Tennessee (TN)</option>
        <option value="TX">Texas (TX)</option>
        <option value="UT">Utah (UT)</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
    )

    return (
      <div>
        {this.props.formType}
        <form onSubmit={this.handleSubmit}>
          <label>Business Name: 
            <input
              type="text"
              className="bizName"
              placeholder="Business Name"
              value={this.state.bizName}
              required="required"
              onChange={this.updateField('biz_name')}
            />
          </label>
          <br />

          <label>Address: 
            <input
              type="text"
              className="bizAddress"
              placeholder="Address"
              value={this.state.biz_address}
              required="required"
              onChange={this.updateField('biz_address')}
            />
          </label>
          <br />

          <label>City: 
            <input
              type="text"
              className="bizCity"
              placeholder="City"
              value={this.state.biz_city}
              required="required"
              onChange={this.updateField('biz_city')}
            />
          </label>
          <br />

          <label>State: 
            {stateList}
          </label>
          <br/>

          <label>Zip Code: 
            <input
              type="text"
              className="bizZipCode"
              placeholder="99999"
              value={this.state.biz_zipcode}
              required="required"
              onChange={this.updateField('biz_zipcode')}
            />
          </label>
          <br />

          <label>Phone: 
            <input
              type="tel"
              className="bizPhone"
              placeholder="555-555-5555"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={this.state.biz_phone}
              required="required"
              onChange={this.updateField('biz_phone')}
            />
          </label>
          <br />

          <label>
            <input
              type="url"
              className="bizUrl"
              placeholder="http://www.webaddress.com"
              pattern="http://.*}"
              value={this.state.biz_url}
              onChange={this.updateField('biz_url')}
            />
          </label>
          <br />

          <div>Price Range:</div>
          <div>
            <label for="lowPrice">$ 
              <input
                type="radio"
                className="bizPriceRange"
                id="lowPrice"
                name="priceRange"
                value="$"
                checked
                onChange={this.updateField('biz_price_range')}
              />
            </label>
          </div>
          <div>
            <label for="bizPriceRange">$$ 
              <input
                type="radio"
                className="bizPriceRange"
                id="mediumPrice"
                name="priceRange"
                value="$$"
                onChange={this.updateField('biz_price_range')}
              />
            </label>
          </div>
          <div>
            <label for="bizPriceRange">$$$ 
              <input
                type="radio"
                className="bizPriceRange"
                id="highPrice"
                name="priceRange"
                value="$$$"
                onChange={this.updateField('biz_price_range')}
              />
            </label>
          </div>
            
          
          <br/>
          <input type="submit" value={this.state.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(BizForm);