import React, { Component } from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import { Form, Input, Button, Layout } from 'antd'
import * as _ from 'lodash'
import PropTypes from 'prop-types'

import { HeaderComponent } from './Header'
import { FooterComponent } from './Footer'
import { CompanyNewsList } from '../components/CompanyNewsList'

import { fetchCompanyNews } from '../actions'

import {
  getCompanyNewsSelector,
  getErrorResponseNewsSelector
} from '../reducers/selector'

const { Item: FormItem } = Form
const { Content } = Layout

const mapStateToProps = state => ({
  companyNews: getCompanyNewsSelector(state),
  errorResponse: getErrorResponseNewsSelector(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCompanyNews
    },
    dispatch
  )
}

class CompanyNews extends Component {
  static defaultProps = {
    companyNews: PropTypes.array,
    errorResponse: PropTypes.object
  }

  componentDidMount = () => {
    const { match, fetchCompanyNews } = this.props

    const symbol = _.get(match, 'params.symbol', null)
    const range = _.get(match, 'params.range', null)

    if (!_.isNil(symbol) || !_.isNil(range)) {
      fetchCompanyNews(symbol, range)
    }
  }

  handleSubmit = e => {
    const {
      form: { validateFields },
      fetchCompanyNews,
      history
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        let symbol = _.get(values, 'symbol', '')
        let range = _.get(values, 'range', '')
        fetchCompanyNews(symbol, range)
        history.replace(`/news/${symbol}/last/${range}`)
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      companyNews,
      errorResponse
    } = this.props

    return (
      <div style={{ textAlign: 'center' }}>
        <Layout>
          <HeaderComponent />

          <Content style={{ padding: '0 50px' }}>
            <Form onClick={this.handleSubmit}>
              <FormItem
                label="Company Symbol"
                style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}
              >
                {getFieldDecorator('symbol', {
                  normalize: value => _.toUpper(value),
                  rules: [
                    {
                      required: true,
                      message: 'Please input your company symbol!'
                    }
                  ]
                })(<Input />)}
              </FormItem>
              <FormItem
                label="range news"
                style={{ width: 200, marginLeft: 'auto', marginRight: 'auto' }}
              >
                {getFieldDecorator('range', {
                  rules: [
                    { required: true, message: 'Please input your range news!' }
                  ]
                })(<Input />)}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>

            <CompanyNewsList news={companyNews} errorResponse={errorResponse} />
          </Content>

          <FooterComponent />
        </Layout>
      </div>
    )
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  Form.create()
)(CompanyNews)
