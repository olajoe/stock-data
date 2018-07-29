import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Input, Button, Layout } from  'antd' 
import * as _ from 'lodash'

import { 
  fetchCompany
} from '../actions'

import {
  getCompanySelector,
  getErrorResponseCompanySelector
} from '../reducers/selector'

import { CompanyDetail } from '../components/CompanyDetail'

import { HeaderComponent } from './Header'
import { FooterComponent } from './Footer'

const FormItem = Form.Item
const { Content } = Layout

class Company extends React.Component {

  componentDidMount = () => {
    const {
      match
    } = this.props
    
    const symbol = _.get(match, 'params.symbol', null)
    if(!_.isNil(symbol)){
      this.props.fetchCompany(symbol)
    }
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
        <Layout>
          <HeaderComponent/>
          <Content style={{ padding: '0 50px' }}>
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
              <FormItem>
                <Button type="primary" htmlType="submit">Submit</Button>
              </FormItem>
              <CompanyDetail
                companyName={ _.get(company, 'companyName', '') }
                symbol={ _.get(company,'symbol', '') }
                exchange={ _.get(company,'exchange', '') }
                description={ _.get(company, 'description', '') }
                website={ _.get(company, 'website', '') }
              />
            </Form>
          </Content>
          <FooterComponent/>
        </Layout>

      </div>
    );
  }

    

}

const mapStateToProps = (state) => ({
  company: getCompanySelector(state),
  errorResponse: getErrorResponseCompanySelector(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCompany 
  }, dispatch)
} 


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(Company)

