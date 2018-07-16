import React, { Component } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Input, Button, Layout } from  'antd' 
import * as _ from 'lodash'

import { HeaderComponent } from './Header'
import { FooterComponent } from './Footer'
import { CompanyNewsList } from '../components/CompanyNewsList'

import { 
  fetchCompanyNews
} from '../actions'

import {
  getCompanyNewsSelector
} from '../reducers/selector'

const FormItem = Form.Item
const { Content } = Layout

class CompanyNews extends Component {

  componentDidMount = () => {
    const {
      match
    } = this.props
    
    const symbol = _.get(match, 'params.symbol', null)
    const range = _.get(match, 'params.range', null)

    if(!_.isNil(symbol) || !_.isNil(range)){
      this.props.fetchCompanyNews(symbol, range)
    }
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let symbol = _.get(values, 'symbol', '')
        let range = _.get(values, 'range', '')
        this.props.fetchCompanyNews(symbol, range)
        this.props.history.replace(`/news/${symbol}/last/${range}`)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { companyNews } = this.props

    return (
      <div style={{ textAlign: 'center' }}>
        <Layout>
          <HeaderComponent/>

          <Content style={{ padding: '0 50px' }}>
            <Form onClick={this.handleSubmit}>
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
                label="range news"
                style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
              >
                {getFieldDecorator('range', {
                  rules: [{ required: true, message: 'Please input your range news!' }]
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">Submit</Button>
              </FormItem>

            </Form>
            
            <CompanyNewsList
              news= {companyNews}
            />

          </Content>

          <FooterComponent/>
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  companyNews: getCompanyNewsSelector(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCompanyNews 
  }, dispatch)
} 


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(CompanyNews)
