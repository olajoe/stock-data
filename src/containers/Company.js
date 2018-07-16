import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Input, Button, Layout,Menu } from  'antd' 
import { Link } from 'react-router-dom'
import * as _ from 'lodash'

import { 
  fetchCompany
} from '../actions'

import {
  getCompanySelector
} from '../reducers/selector'

import { CompanyView } from '../components/CompanyDetail'

const FormItem = Form.Item
const { Header, Content, Footer } = Layout

class Home extends React.Component {

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
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/">HOME</Link>
              </Menu.Item>
              <Menu.Item key="company">
                <Link to="/company">Company</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Header>
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
              <FormItem

              >
                <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>

              <CompanyView
                companyName={ _.get(company, 'companyName', '') }
                symbol={ _.get(company,'symbol', '') }
                exchange={ _.get(company,'exchange', '') }
                description={ _.get(company, 'description', '') }
                website={ _.get(company, 'website', '') }
              />

            </Form>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Stock data demo ©2018 Created by Joe
          </Footer>
        </Layout>

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

