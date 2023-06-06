import React from 'react'
import './service.css'
import ListServices from './listServices'


export const service = () => {
  return (
    <section id="services">
      <h5>What I Can Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default service;