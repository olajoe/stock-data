import React from 'react'

export const CompanyNewsDetail = ({
  newAlone
}) => {

  return (
    <div>
      <section>
        <h1>{ newAlone.headline }</h1>
        <p>dateTime: { newAlone.datetime } </p>
        <p> {newAlone.summary} </p>
        <p>Source: {newAlone.source}</p>
      </section>
      <hr/>
    </div>
  )
}

