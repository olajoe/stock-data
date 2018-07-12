import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Input, Button } from  'antd' 
import * as _ from 'lodash'

import { 
  fetchCompany
} from '../actions/index'

import {
  getCompanySelector
} from '../reducers/selector'

const FormItem = Form.Item

class Home extends React.Component {

  componentDidMount = () => {
    const {
      match
    } = this.props
    const symbol = _.get(match, 'params.symbol', '')
    this.props.fetchCompany(symbol)
  } 

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          let symbol = _.get(values, 'symbol', '')
          this.props.fetchCompany(symbol)
          this.props.history.replace(`/company/${symbol}`)
        }
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { company } = this.props

    return (
      <div style={{textAlign: 'center'}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="Company Symbol"
            style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
          >
            {getFieldDecorator('symbol', {
              normalize: value => _.toUpper(value),
              rules: [{ required: true, message: 'Please input your company symbol!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem

          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>


        <h1>Company Name: { _.get(company, 'companyName', '')  } </h1>
        <h3>Symbol: {   _.get(company,'symbol', '')  }</h3>
        <h3>Market: { _.get(company,'exchange', '') } </h3>
        <p> More Detail: { _.get(company, 'description', '') } </p>
            
        <a href={ _.get(company, 'website', '') }>Visit Official Website {_.get(company, 'companyName', '')}</a>

      </div>
    );
  }

    

}

const mapStateToProps = (state) => ({
  company: getCompanySelector(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCompany 
  }, dispatch)
} 


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(Home)

