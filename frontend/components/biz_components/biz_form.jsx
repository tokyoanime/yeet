import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNavContainer from '../nav_components/top_nav_container';

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

    if (this.state.biz_mo_hrs === "") {
      this.state.biz_mo_hrs = "closed"
    }
    if (this.state.biz_tu_hrs === "") {
      this.state.biz_tu_hrs = "closed"
    }
    if (this.state.biz_we_hrs === "") {
      this.state.biz_we_hrs = "closed"
    }
    if (this.state.biz_th_hrs === "") {
      this.state.biz_th_hrs = "closed"
    }
    if (this.state.biz_fr_hrs === "") {
      this.state.biz_fr_hrs = "closed"
    }
    if (this.state.biz_sa_hrs === "") {
      this.state.biz_sa_hrs = "closed"
    }
    if (this.state.biz_su_hrs === "") {
      this.state.biz_su_hrs = "closed"
    }

    this.state.biz_lat = 5;
    this.state.biz_lng = 5;

    this.props.processForm(this.state)
      .then(() => this.props.history.push('/'));
  }

  removeHr(day) {
    return (e) => {
      this.setState({ [day]: "" })
    }
  }

  addHours() {
    const weekDay = document.getElementsByClassName("weekDay")[0].value;
    const startHr = document.getElementsByClassName("bizHrStart")[0].value;
    const endHr = document.getElementsByClassName("bizHrEnd")[0].value;
    const fieldKey = `biz_${weekDay}_hrs`;
    const fieldVal = `${weekDay.toUpperCase()} ${startHr} - ${endHr}`

    return this.setState({[fieldKey]: fieldVal})
  }

  render() {

    const stateList = (
      <select className="bizState" defaultValue={'DEFAULT'} required="required" onChange={this.updateField('biz_state')}>
        <option value="DEFAULT" disabled>Select a State</option>
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

    const bizMoHours = (
      <div>
        <div>{this.state.biz_mo_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_mo_hrs")}>Remove</div>
      </div>
    );
    const bizTuHours = (
      <div>
        <div>{this.state.biz_tu_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_tu_hrs")}>Remove</div>
      </div>
    );
    const bizWeHours = (
      <div>
        <div>{this.state.biz_we_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_we_hrs")}>Remove</div>
      </div>
    );
    const bizThHours = (
      <div>
        <div>{this.state.biz_th_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_th_hrs")}>Remove</div>
      </div>
    );
    const bizFrHours = (
      <div>
        <div>{this.state.biz_fr_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_fr_hrs")}>Remove</div>
      </div>
    );
    const bizSaHours = (
      <div>
        <div>{this.state.biz_sa_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_sa_hrs")}>Remove</div>
      </div>
    );
    const bizSuHours = (
      <div>
        <div>{this.state.biz_su_hrs}</div>
        <div className="remove-day" onClick={this.removeHr("biz_su_hrs")}>Remove</div>
      </div>
    );

    const bizHrs = (val) => (
      <select className={`${val}`} defaultValue={(`${val}` === "bizHrStart") ? "9:00 am" : "8:00 pm"}>
        <option value="12:00 am">12:00 am (midnight)</option>
        <option value="12:30 am">12:30 am </option>
        <option value="1:00 am">1:00 am </option>
        <option value="1:30 am">1:30 am </option>
        <option value="2:00 am">2:00 am </option>
        <option value="2:30 am">2:30 am </option>
        <option value="3:00 am">3:00 am </option>
        <option value="3:30 am">3:30 am </option>
        <option value="4:00 am">4:00 am </option>
        <option value="4:30 am">4:30 am </option>
        <option value="5:00 am">5:00 am </option>
        <option value="5:30 am">5:30 am </option>
        <option value="6:00 am">6:00 am </option>
        <option value="6:30 am">6:30 am </option>
        <option value="7:00 am">7:00 am </option>
        <option value="7:30 am">7:30 am </option>
        <option value="8:00 am">8:00 am </option>
        <option value="8:30 am">8:30 am </option>
        {(`${val}` === "bizHrStart") ? <option value="9:00 am">9:00 am </option> : <option value="9:00 am">9:00 am </option>}
        <option value="9:30 am">9:30 am </option>
        <option value="10:00 am">10:00 am </option>
        <option value="10:30 am">10:30 am </option>
        <option value="11:00 am">11:00 am </option>
        <option value="11:30 am">11:30 am </option>
        <option value="12:00 pm">12:00 pm (noon)</option>
        <option value="12:30 pm">12:30 pm </option>
        <option value="1:00 pm">1:00 pm </option>
        <option value="1:30 pm">1:30 pm </option>
        <option value="2:00 pm">2:00 pm </option>
        <option value="2:30 pm">2:30 pm </option>
        <option value="3:00 pm">3:00 pm </option>
        <option value="3:30 pm">3:30 pm </option>
        <option value="4:00 pm">4:00 pm </option>
        <option value="4:30 pm">4:30 pm </option>
        <option value="5:00 pm">5:00 pm </option>
        <option value="5:30 pm">5:30 pm </option>
        <option value="6:00 pm">6:00 pm </option>
        <option value="6:30 pm">6:30 pm </option>
        <option value="7:00 pm">7:00 pm </option>
        <option value="7:30 pm">7:30 pm </option>
        {(`${val}` === "bizHrEnd") ? <option value="8:00 pm">8:00 pm </option> : <option value="8:00 pm">8:00 pm </option>}
        <option value="8:30 pm">8:30 pm </option>
        <option value="9:00 pm">9:00 pm </option>
        <option value="9:30 pm">9:30 pm </option>
        <option value="10:00 pm">10:00 pm </option>
        <option value="10:30 pm ">10:30 pm </option>
        <option value="11:00 pm">11:00 pm </option>
        <option value="11:30 pm">11:30 pm </option>
      </select>
    )

    let bizNameError = [];
    let bizAddressError = [];
    let bizCityError = [];
    let bizStateError = [];
    
    return (
      <div>
        <TopNavContainer />
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

          <label>Web Address:
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

          <label>Categories:
            <input
              type="text"
              className="bizFirstCat"
              placeholder="(required)"
              required="required"
              value={this.state.biz_first_cat}
              onChange={this.updateField('biz_first_cat')}
            />
            <input
              type="text"
              className="bizSecondCat"
              placeholder="(optional)"
              value={this.state.biz_second_cat}
              onChange={this.updateField('biz_second_cat')}
            />
            <input
              type="text"
              className="bizThirdCat"
              placeholder="(optional)"
              value={this.state.biz_third_cat}
              onChange={this.updateField('biz_third_cat')}
            />
          </label>
          <br />

          <div className="biz-hours-container">
            <div>Hours: </div>
            {(this.state.biz_mo_hrs !== "") ? bizMoHours : ""}
            {(this.state.biz_tu_hrs !== "") ? bizTuHours : ""}
            {(this.state.biz_we_hrs !== "") ? bizWeHours : ""}
            {(this.state.biz_th_hrs !== "") ? bizThHours : ""}
            {(this.state.biz_fr_hrs !== "") ? bizFrHours : ""}
            {(this.state.biz_sa_hrs !== "") ? bizSaHours : ""}
            {(this.state.biz_su_hrs !== "") ? bizSuHours : ""}
            <div className="biz-hours-form">
              <select className="weekDay">
                <option value="mo">Monday</option>
                <option value="tu">Tuesday</option>
                <option value="we">Wednesday</option>
                <option value="th">Thursday</option>
                <option value="fr">Friday</option>
                <option value="sa">Saturday</option>
                <option value="su">Sunday</option>
              </select>
              {bizHrs("bizHrStart")}
              {bizHrs("bizHrEnd")}
              <div className="add-day" onClick={() => this.addHours()}>Add Hours</div>
            </div>
          </div>

          <div className="price-range-container">
            <div>Price Range:</div>
            <div className="price-range-label">
              <div>
                <label>$</label>
              </div>
              <div>
                <label>$$</label>
              </div>
              <div>
                <label>$$$</label>
              </div>
            </div>
            <div className="price-range-radio" onChange={this.updateField('biz_price_range')}>
              <div>
                <input
                type="radio"
                className="bizPriceRange"
                id="lowPrice"
                name="priceRange"
                value="$"
                onChange={this.updateField('biz_price_range')}
              />
              </div>
              <div>
                <input
                  type="radio"
                  className="bizPriceRange"
                  id="mediumPrice"
                  name="priceRange"
                  value="$$"
                  onChange={this.updateField('biz_price_range')}
                />
              </div>
              <div>
                <input
                  type="radio"
                  className="bizPriceRange"
                  id="highPrice"
                  name="priceRange"
                  value="$$$"
                  onChange={this.updateField('biz_price_range')}
                />
              </div>
            </div>
          </div>
          
          <div className="general-features-container">
            <div>
              <input
                type="checkbox"
                className="generalFeatures"
                value="yes"
                onChange={this.updateField('biz_parking')}
              />Parking
            </div>
            <div>
              <input
                type="checkbox"
                className="generalFeatures"
                value="yes"
                onChange={this.updateField('biz_delivery')}
              />Delivery
            </div>
            <div>
              <input
                type="checkbox"
                className="generalFeatures"
                value="yes"
                onChange={this.updateField('biz_takeout')}
              />Takeout
            </div>
            <div>
              <input
                type="checkbox"
                className="generalFeatures"
                value="yes"
                onChange={this.updateField('biz_reservations')}
              />Reservations
            </div>
          </div>
          
          <br/>
          <input type="submit" value={this.state.formType}/>
        </form>
      </div>
    )
  }
}

export default withRouter(BizForm);